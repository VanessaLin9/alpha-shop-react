export type CartType = {
  id: string,
  name: string,
  img: string,
  price: number,
  quantity: number,
};

export type btnContext = {
  atDeleteItem: (id: string) => void,
  atReduceItem: (id: string) => void,
  atIncreaseItem: (id: string) => void,
};

export type step = {
  step: Number,
};

export type State = {
  lineItems: CartType,
};

export type Action = {
  type: 'Delete-Item',
  payload: string,
};
