import React, { useEffect, useState, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../estilos/graficos.css'
// Registrar los componentes de Chart.js necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Charts = ({data}) => {
  const [dataPorCargo, setDataPorCargo] = useState(null);
  const [dataPorDependencia, setDataPorDependencia] = useState(null);
  const [loading, setLoading] = useState(true);
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCargo = await axios.get('http://localhost:8000/empleados/api/empleados/conteo-empleados-por-cargo/');
        const responseDependencia = await axios.get('http://localhost:8000/empleados/api/empleados/conteo-empleados-por-dependencia/');
        setDataPorCargo(responseCargo.data);
        setDataPorDependencia(responseDependencia.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const exportToPDF = async (chartRef) => {
    const input = chartRef.current;

    const canvas = await html2canvas(input, { scale: 1 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('l', 'px', [input.offsetWidth, input.offsetHeight]);
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save('chart.pdf');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!dataPorCargo || !dataPorCargo.length || !dataPorDependencia || !dataPorDependencia.length) {
    return <div>No data available</div>;
  }

  const dataCargo = {
    labels: dataPorCargo.map(item => item.cargo),
    datasets: [
      {
        label: 'Cantidad',
        data: dataPorCargo.map(item => item.cantidad),
        backgroundColor: 'rgba(75, 192, 192)',
        borderColor: 'rgba(0,0,0)',
        borderWidth: 1,
      },
    ],
  };

  const dataDependencia = {
    labels: dataPorDependencia.map(item => item.departamento),
    datasets: [
      {
        label: 'Cantidad',
        data: dataPorDependencia.map(item => item.cantidad),
        backgroundColor: 'rgba(153, 102, 255)',
        borderColor: 'rgba(0,0,0',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
    {data==1&&(
        <>
        <div className='contenedor-graficos'>
        <h2>Gráfico por Cargo</h2> 
      <div style={{ width: '600px', height: '400px' }}>
        <div ref={chartRef1}>
          <Bar data={dataCargo} />
        </div>
        <br />
        <button className="button-default" onClick={() => exportToPDF(chartRef1)}>Exportar a PDF</button>
      </div>
    </div>
      </>
)}{data==2&&(<>

       
    <div className='contenedor-graficos'>
      <h2>Gráfico por Dependencia</h2>
      <div style={{ width: '800px', height: '400px' }}>
        <div ref={chartRef2}>
          <Bar data={dataDependencia} />
        </div>
        <br />
        <button  className="button-default" onClick={() => exportToPDF(chartRef2)}>Exportar a PDF</button>
      </div>
    </div>
</>)}{data==3&&(<></>)}
</div>
  );
};

export default Charts;