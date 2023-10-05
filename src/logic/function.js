

export const formatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
});

export const generateIdOrder = (size, id) => id + size
export const addNewOrder=(newIdOrder,size,name,price,quantity,total,order,setOrder)=>{
  const newOrder = {
    idOrder: newIdOrder,
    size: size,
    name: name,
    priceOrder: price,
    quantity: quantity,
    total: total,
  };
  setOrder([...order, newOrder]);
}
export const modfOrder=(order,indexOrder,quantity,price,setOrder)=>{
  const newOrder = order
  newOrder[indexOrder].quantity += quantity
  newOrder[indexOrder].total = newOrder[indexOrder].quantity * price
  setOrder(newOrder);
}
export const addOrderCart = (IdPizza, name, size, price, quantity, total, order, setOrder) => {
  const newIdOrder = generateIdOrder(size, IdPizza)
  const indexOrder = order.findIndex(or => or.idOrder === newIdOrder)
  if (indexOrder === -1) {
    addNewOrder(newIdOrder,size,name,price,quantity,total,order,setOrder)
  } else {
    modfOrder(order,indexOrder,quantity,price,setOrder)
  }

}

export const calculateTotal=(order,setTotalOrder,setCountOrder)=>{
  let total=0
  let count =0
  order.forEach(ord => {
    total+=ord.total
    count+=ord.quantity
  })
  setTotalOrder(total)
  setCountOrder(count)
}