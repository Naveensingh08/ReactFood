/* import { useDispatch, useSelector } from "react-redux";
import { addToOrder, clearCart, decreement, increement, remove } from "./Store";
import { useState } from "react";

function Cart()
{ 
let readCart=useSelector(state=>state.cart);
const dispatch=useDispatch();

let cartItems=readCart.map((item,index)=>(
    <li key={index} className="cart">
        {item.name}--{item.price} 
        <button onClick={()=>dispatch(increement(item))} style={{width:'50px'}} >+</button>
        <button onClick={()=>dispatch(decreement(item))} style={{width:'50px', backgroundColor:'red'}}>-</button>

        Quantity--{item.quantity} 

        <button onClick={()=>dispatch(remove(item))} >Remove</button>
    </li>
    
))


let total=readCart.reduce((sum,item)=>sum+item.price*item.quantity,0);
let [discount,setDiscount]=useState(0);
let discountAmt=total*(discount/100);
let finalPrice=total-discountAmt;
let [coupen,setCoupen]=useState('');
let [coupenDiscount,setCoupenDiscount]=useState(0);
let [showDiscountAmt,setShowDiscountAmt]=useState(false);
let showDiscount=()=>{
    
switch(coupen.toUpperCase())
{
    case 'NAVEEN10':setCoupenDiscount(10);
                    break;
    case 'NAVEEN20':setCoupenDiscount(20);
                    break;
    case 'NAVEEN30':setCoupenDiscount(30);
                    break;
    default:
        setCoupenDiscount(0);
        alert("Invalid Coupen");
}
};
let coupenDiscountPrice=total*(coupenDiscount/100);


let showInOrder=()=>{

    let purchaseHolder={

        date:new Date().toLocaleTimeString(),
        price:finalPrice,
        items:[...readCart]
    }

    dispatch(addToOrder(purchaseHolder));
    dispatch(clearCart());
}





return(
    <>
    {
        readCart.length>0 ?
    <>
    <h1 style={{marginTop:'100px', color:'yellowgreen',marginLeft:'550px'}}>Cart Items</h1>
    <ul>{cartItems}</ul>
    <h2 className="hedline">Total Price: {total}</h2>

        
    <div className="ab">
    <button onClick={()=>setDiscount(10)} >10% Discount</button>
    <button onClick={()=>setDiscount(20)} >20% Discount</button>
    <button onClick={()=>setDiscount(30)} >30% Discount</button>
    </div>
    <h3 className="hedline">Discount is: {discount}%</h3>
    <h3 className="hedline" style={{ marginTop:'25px'}}>discount Price : {discountAmt}</h3>
    
    <div className="copen">
    <input type="text" value={coupen} onChange={(e)=>setCoupen(e.target.value)} placeholder="Enter Coupen" />
    <button onClick={()=>{showDiscount(),setShowDiscountAmt(true)}} >AddCoupen</button>
    </div>
    {
        showDiscountAmt &&
        <>
    <h3 className="hedline" style={{width:'300px',backgroundColor:'brown', color:'yellow', marginLeft:'500px'}}>Your Coupen is:{coupen.toUpperCase()}</h3>
    <h2 className="hedline">Discount Price:{coupenDiscountPrice}</h2>
    </>
    }
    <h2 className="price">final Price :{finalPrice-coupenDiscountPrice}</h2>

    <button onClick={showInOrder} >Complete Purchase</button>
    </>
    :
    <h3>Cart is Empty</h3>
}
    </>
)
}
export default Cart; */


import { useDispatch, useSelector } from "react-redux";
import { addToOrder, clearCart, decreement, increement, remove } from "./Store";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart() { 
  let readCart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  let cartItems = readCart.map((item, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">₹{item.price}</p>
          <div className="d-flex align-items-center">
            <button className="btn btn-success" onClick={() => dispatch(increement(item))}>+</button>
            <span className="mx-2">Quantity: {item.quantity}</span>
            <button className="btn btn-danger" onClick={() => dispatch(decreement(item))}>-</button>
          </div>
          <button className="btn btn-warning mt-2" onClick={() => dispatch(remove(item))}>Remove</button>
        </div>
      </div>
    </div>
  ));

  let total = readCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let [discount, setDiscount] = useState(0);
  let discountAmt = total * (discount / 100);
  let finalPrice = total - discountAmt;

  let [coupen, setCoupen] = useState('');
  let [coupenDiscount, setCoupenDiscount] = useState(0);
  let [showDiscountAmt, setShowDiscountAmt] = useState(false);

  let showDiscount = () => {
    switch (coupen.toUpperCase()) {
      case 'NAVEEN10': setCoupenDiscount(10); break;
      case 'NAVEEN20': setCoupenDiscount(20); break;
      case 'NAVEEN30': setCoupenDiscount(30); break;
      default:
        setCoupenDiscount(0);
        alert("Invalid Coupen");
    }
  };

  let coupenDiscountPrice = total * (coupenDiscount / 100);

  let showInOrder = () => {
    let purchaseHolder = {
      date: new Date().toLocaleTimeString(),
      price: finalPrice,
      items: [...readCart]
    };
    dispatch(addToOrder(purchaseHolder));
    dispatch(clearCart());
  };

  return (
    <>
      {readCart.length > 0 ? (
        <>
          <h1 className="text-center text-success my-4">Cart Items</h1>
          <div className="container">
            <div className="row">
              {cartItems}
            </div>
            <h2 className="text-primary">Total Price: ₹{total}</h2>

            <div className="my-3">
              <button className="btn btn-outline-primary mx-2" onClick={() => setDiscount(10)}>10% Discount</button>
              <button className="btn btn-outline-primary mx-2" onClick={() => setDiscount(20)}>20% Discount</button>
              <button className="btn btn-outline-primary mx-2" onClick={() => setDiscount(30)}>30% Discount</button>
            </div>

            <h3 className="text-secondary">Discount: {discount}%</h3>
            <h3 className="text-secondary">Discount Amount: ₹{discountAmt}</h3>

            <div className="my-3">
              <input 
                type="text" 
                className="form-control mb-2" 
                value={coupen} 
                onChange={(e) => setCoupen(e.target.value)} 
                placeholder="Enter Coupen" 
              />
              <button className="btn btn-info" onClick={() => { showDiscount(); setShowDiscountAmt(true); }}>Apply Coupen</button>
            </div>

            {showDiscountAmt && (
              <>
                <h3 className="text-warning">Your Coupen: {coupen.toUpperCase()}</h3>
                <h2 className="text-success">Discount Price: ₹{coupenDiscountPrice}</h2>
              </>
            )}

            <h2 className="text-danger">Final Price: ₹{finalPrice - coupenDiscountPrice}</h2>

            <button className="btn btn-success mt-4" onClick={showInOrder}>Complete Purchase</button>
          </div>
        </>
      ) : (
        <h3 className="text-center text-danger">Cart is Empty</h3>
      )}
    </>
  );
}

export default Cart;
