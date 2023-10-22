import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {  Root, Data } from '../../types/responseCoins';
import { DataCoin, ICoin, Link, Supply, AllTimeHigh, Notice } from '../../types/responseCoinDetails';
import { IHistory, DataHistory, RootHistory } from '../../types/responseCoinHistory';

  const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'ba5de1e756msh3f046fbc710c3a6p19cae2jsnf7519a5d53ea',
    'X-RapidAPI-Host':  'coinranking1.p.rapidapi.com',
  };

  const baseUrl = 'https://coinranking1.p.rapidapi.com';

  const createRequest = (url:string) => ({url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCoins: builder.query<Data,{value?:string, quantity:number }  >({
      query: ({value, quantity}) => createRequest(`/coins?limit=${quantity}${value ? "&search="+value : '' }`),
      transformResponse: ( response:Root<Data> ) => response.data
    }),
    getCoinDetails: builder.query<ICoin<Link, Supply, AllTimeHigh, Notice>, {uuid?:string, time:string}> ({
      query: ({uuid, time}) => createRequest(`coin/${uuid}?timePeriod=${time} `),
      transformResponse: ( response:DataCoin<ICoin<Link, Supply, AllTimeHigh, Notice>> ) => response.data.coin,
    }),
    getCoinHistory: builder.query<DataHistory<IHistory>, {uuid?:string, time:string}> ({
      query:({uuid, time}) =>  createRequest(`coin/${uuid}/history?timePeriod=${time}`),
      transformResponse: (response:RootHistory<DataHistory<IHistory>> ) => response.data
    })
  }),
})

export const {useGetCoinsQuery, useGetCoinDetailsQuery, useGetCoinHistoryQuery  } = cryptoApi