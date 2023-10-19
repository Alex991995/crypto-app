export interface DataCoin<I> {
  status: string
  data: {coin: I}
}



export interface ICoin<L,S,A,N> {
  uuid: string
  symbol: string
  name: string
  description: string
  color: string
  iconUrl: string
  websiteUrl: string
  links: L[]
  supply: S
  "24hVolume": string
  marketCap: string
  fullyDilutedMarketCap: string
  price: string
  btcPrice: string
  priceAt: number
  change: string
  rank: number
  numberOfMarkets: number
  numberOfExchanges: number
  sparkline: string[]
  allTimeHigh: A
  coinrankingUrl: string
  lowVolume: boolean
  listedAt: number
  notices: N
  tags: string[]
}

export interface Link {
  name: string
  url: string
  type: string
}

export interface Supply {
  confirmed: boolean
  supplyAt: number
  circulating: string
  total: string
  max: string
}

export interface AllTimeHigh {
  price: string
  timestamp: number
}

export interface Notice {
  type: string
  value: string
}
