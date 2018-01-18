var initialState = [
  {
    id: 1,
    name: "Iphone 7 plus",
    price: 3000,
    status: true
  },
  {
    id: 2,
    name: "Samsung note 7",
    price: 3200,
    status: false
  },
  {
    id: 3,
    name: "Oppo F1s",
    price: 2800,
    status: true
  }
];

const Products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
  return [...state];
};
export default Products;
