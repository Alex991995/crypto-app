import React from 'react';
import { useGetCoinsQuery } from '../../features/api/cryptoApi'; 
import InfoOfTotal from './InfoOfTotal';
import Loader from '../Loader';
import millify from 'millify';
import { Link } from 'react-router-dom';

function Home() { 
  const quantity: string = '10';
  const { coins, stats, isSuccess, isLoading } = useGetCoinsQuery({quantity}, {
    selectFromResult: ({data, isSuccess, isLoading}) => ({
      coins: data?.coins,
      stats: data?.stats,
      isSuccess,
      isLoading
    })
  })

  return (
  <section>
    <h1 className='title-main'>Global Crypto Stats</h1>
    {isLoading && <Loader/>}
    {isSuccess &&
    <>
    <div className='grid grid-cols-2 gap-3 mt-4 [&>*]:min-w-[160px] justify-items-center'>
        <InfoOfTotal text={'Total Cryptocurrencies'} total={stats!.total}/>
        <InfoOfTotal text={'Total Exchanges'} total={stats!.totalExchanges}/>
        <InfoOfTotal text={'Total Market Cap:'} total={+stats!.totalMarketCap}/>
        <InfoOfTotal text={'Total 24h Volume'} total={+stats!.total24hVolume}/>
        <InfoOfTotal text={'Total Markets'} total={stats!.totalMarkets}/>
    </div>
    <div>
      <h1 className='title-main'>Top 10 cryptocurrency in the world</h1>

      <ul className='list-crypto my-4'>
          {coins?.map((coin, index) => (
          <Link to={coin.uuid} key={coin.uuid}>
            <li className='h-[200px] border bg-white border-slate-600 p-4 hover:shadow-lg' >
              <div className='flex justify-between'>
                <h5>{++index +". "+ coin.name}</h5>
                <img src={coin.iconUrl} alt="#" className='w-[30px] mr-2'/>
              </div>
            <div className='mt-4'>
              <p>Price: {millify(+coin.price)}$</p>
              <p>Market Cap: {millify(+coin.marketCap)}</p>
              <p>Daily Change: {coin.change}%</p>
            </div>
          </li>
        </Link>
        ))}
      </ul>
    </div>
    </>
    }
  </section>

  );
}

export default Home;