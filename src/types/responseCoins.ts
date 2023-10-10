export interface Root<D> {
  status: string
  data: D
}

export interface Data {
  stats: Stats
  coins: ICoins[]
}

export interface Stats {
  total: number
  totalCoins: number
  totalMarkets: number
  totalExchanges: number
  totalMarketCap: string
  total24hVolume: string
}

export interface ICoins {
  uuid: string
  symbol: string
  name: string
  color?: string
  iconUrl: string
  marketCap: string
  price: string
  listedAt: number
  tier: number
  change: string
  rank: number
  sparkline: string[]
  lowVolume: boolean
  coinrankingUrl: string
  "24hVolume": string
  btcPrice: string
}
