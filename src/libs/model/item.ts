
export interface Item {
  id: string,
  name: string,
  quantity: number,
  category: string,
  receiveDate: string,
  hasExpiration: boolean,
  expirationDate: string
}

export const DEFAULT_ITEM : Item = {
  id: '',
  name: '',
  quantity: 0,
  category: '',
  receiveDate: '',
  hasExpiration: false,
  expirationDate: ''
} as const;
