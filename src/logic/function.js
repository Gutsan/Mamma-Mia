

export const formatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
});

export const generateIdOrder = (size, id) => id + size

export const addOrderCart = (IdPizza, name, size, price, quantity, total, order, setOrder) => {
  const newIdOrder = generateIdOrder(size, IdPizza)
  const indexOrder = order.findIndex(or => or.idOrder === newIdOrder)
  if (indexOrder === -1) {
    const newOrder = {
      idOrder: newIdOrder,
      size: size,
      name: name,
      priceOrder: price,
      quantity: quantity,
      total: total,
    };
    setOrder([...order, newOrder]);
  } else {
    const newOrder = order
    newOrder[indexOrder].quantity += quantity
    newOrder[indexOrder].total = newOrder[indexOrder].quantity * price
    setOrder(newOrder);
  }

}

export const calculateTotal=(order,setTotalOrder,setCountOrder)=>{
  let sum=0
  order.forEach(ord => {sum=sum+ord.total})
  const totalOrder =  sum
  setTotalOrder(totalOrder)
  const CountOrder = order.length
  setCountOrder(CountOrder)
}