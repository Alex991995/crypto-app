import React from 'react';
import { useGetCoinsQuery } from '../features/api/cryptoApi';
import InfoOfTotal from './InfoOfTotal';

function Home() { 
  const quantity: string = '10';

  const { coins, stats, isSuccess } = useGetCoinsQuery({quantity}, {
    selectFromResult: ({data, isSuccess}) => ({
      coins: data?.coins,
      stats: data?.stats,
      isSuccess
    })
  })

  return (
  <section>
    <h1 className='title-main'>Global Crypto Stats</h1>
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
    </div>

    </>
    }
  </section>

  );
}

export default Home;