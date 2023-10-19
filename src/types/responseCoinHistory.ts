export interface RootHistory<D> {
  status: string
  data: D
}

export interface DataHistory<H> {
  change: string
  history: H[]
}

export interface IHistory {
  price: string
  timestamp: number
}
