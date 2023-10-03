export const ElementCart=({idOrder,name,price,quantity,total})=>{

return(
<div>
    <div>
        
<h3>{name}</h3>
<div className="card-modf-qty">
    <button className="card-btn-qty">-</button>
    <p>{quantity}</p>
    <button className="card-btn-qty">+</button>
</div>
</div>
<p>
    {total}
</p>
</div>
)
}