import React from 'react';
import { IHistory, DataHistory } from '../../types/responseCoinHistory';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

interface IChart {
  historyAboutCoin?: DataHistory<IHistory>
  nameCoin?: string
  currentPrice?: string
}

function LineChart({historyAboutCoin, nameCoin, currentPrice}:IChart) {
  ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

  const coinPrice  = historyAboutCoin?.history.map(item => {
    return item.price
  })

  const coinTimestamp =  historyAboutCoin?.history.map(item => {
    return new Date( Number(String(item.timestamp) + "000" )).toLocaleDateString()
  })
  // api misses some zero for correct convert to date 

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    maintainAspectRatio : false
}

  return (
    <div className='h-[800px] '>
      <div className='flex justify-between'>
        <h3 className='title-name-crypto font-normal'>{nameCoin} Price Chart</h3>
        <p className='stats-result-crypto'><span className='mr-4'>Change:{historyAboutCoin?.change} % </span> Current {nameCoin} Price: $ {currentPrice} </p>
      </div>
      <Line data={data} height="=100%" options={options} />
    </div>
  );
}

export default LineChart;