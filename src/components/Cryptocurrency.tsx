import React, {useState } from 'react';
import { useGetCoinsQuery } from '../features/api/cryptoApi';
import millify from 'millify';
import { Link } from 'react-router-dom';
import Loader from './Loader';

function Cryptocurrency() {
  const quantity: number = 100;
  const [value, setValue] = useState<string>('')

  const { coins,  isSuccess, isLoading } = useGetCoinsQuery({value, quantity}, {
    selectFromResult: ({data, isSuccess, isLoading}) => ({
      coins: data?.coins,
      isSuccess,
      isLoading
    })
  })

  return (
    <section>
      <div className='text-center my-4 '>
        <input 
          className='input w-1/4'
          type="text" value={value} 
          onChange={e =>setValue(e.target.value) }
          placeholder='Search Cryptocurrency'/>
      </div>
      {isLoading && <Loader/>}
      {isSuccess &&
        <ul className='list-crypto'>
          {coins?.map((coin, index) => (
          <Link to={coin.uuid} key={coin.uuid}>
            <li className='item-crypto ' >
              <div className='flex justify-between mt-5'>
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
        </ul>}
    </section>
  );
}

export default Cryptocurrency;