import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useGetCoinDetailsQuery, useGetCoinHistoryQuery } from '../../features/api/cryptoApi';
import {AiOutlineNumber , AiOutlineThunderbolt, 
        AiOutlineTrophy, AiOutlineFundProjectionScreen,
        AiOutlineMoneyCollect, AiOutlineExclamationCircle, AiOutlineCheck, AiOutlineStop} from 'react-icons/ai';
import { CiDollar } from 'react-icons/ci';
import CryptoStats from './CryptoStats';
import millify from 'millify';
import LineChart from './LineChart';


function CryptoDetails() { 
  const [time, setTime] = useState("7d")
  const arrTime = ['3h', '24h', '7d', '30d', '3m' , '1y', '3y', '5y'];
  const {uuid} = useParams()
  const { data } = useGetCoinDetailsQuery({uuid,time})
  const { data: dataHistory} = useGetCoinHistoryQuery({uuid,time})


  return (
    <section>
      <div className='text-center bottom-border mt-28'>
        <h2 className='title-name-crypto'>{data?.name} ({data?.symbol})</h2>
        <p className='text-gray-600 my-9'>{data?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
      </div>

      <select value={time} onChange={e => setTime(e.target.value)} className='dropdown'>
            {arrTime?.map( (item, index) => (
              <option key={index}>{item}</option>
            ))}
      </select>

      <LineChart historyAboutCoin={ dataHistory} nameCoin={data?.name} currentPrice={data?.price &&  millify(+data?.price)}/>

      <div className='flex justify-between mt-12'>
        <div className='block-about-crypto'>
          <div>
            <h2>{data?.name} Value Statistics</h2>
            <p>An overview showing the stats of {data?.name}.</p>
          </div>
            <CryptoStats Icon={CiDollar} text='Price to USD' data={data?.price && "$ " + millify(+data?.price)}/>
            <CryptoStats Icon={AiOutlineNumber} text='Rank' data={data?.rank }/>
            <CryptoStats Icon={AiOutlineThunderbolt} text='24h Volume' data={data?.['24hVolume']  && "$ " +millify( +data?.['24hVolume'] )}/>
            <CryptoStats Icon={CiDollar} text='Market Cap' data={data?.marketCap && "$ " +millify( +data!.marketCap )}/>
            <CryptoStats Icon={AiOutlineTrophy} text='All-time-high(daily avg.)' data={data?.allTimeHigh.price && "$ " +millify(+data!.allTimeHigh!.price)}/> 
        </div>

        <div className='block-about-crypto'>
          <div>
            <h2>Other Statistics</h2>
            <p>An overview showing the statistics of cryptocurrencies</p>
          </div>
          <CryptoStats Icon={AiOutlineFundProjectionScreen} text='Number Of Markets' data={data?.numberOfMarkets} />
          <CryptoStats Icon={AiOutlineMoneyCollect} text='Number Of Exchanges' data={data?.numberOfExchanges} />
          <CryptoStats Icon={AiOutlineExclamationCircle} text='Aprroved Supply' data={data?.supply?.confirmed ? <AiOutlineCheck /> : <AiOutlineStop/>} />
          <CryptoStats Icon={AiOutlineExclamationCircle} text='Total Supply' data={data?.supply?.total && "$ " + millify(+data!.supply!.total )} />
          <CryptoStats Icon={AiOutlineExclamationCircle} text='Circulating Supply' data={data?.supply?.circulating && "$ " + millify(+data!.supply!.circulating)} />
        </div>
      </div>

      <div className='flex flex-col items-center	my-12'>
        <h3 className='title-name-crypto text-2xl'>What is {data?.name}</h3>
        <p className='more-info-crypto mt-2'>{data?.description}</p>
      </div>

      <div className='mb-5'>
        <h3 className='text-center font-semibold text-3xl'>{data?.name} links</h3>
        <ul className='w-3/6 m-auto'>
          {data?.links.map( (link, index ) => (
            <li className='flex justify-between p-3' key={index}>
              <h4 className='font-medium font-["Verdana"]'>{link.type}</h4>
              <a className='more-info-crypto hover:underline' href={link.url} target='_blank' rel="noreferrer" >{link.name}</a>
            </li>
          ) )}
        </ul>
      </div>
    </section>
  );
}

export default CryptoDetails;