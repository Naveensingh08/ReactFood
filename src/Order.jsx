/*import { useSelector } from "react-redux";

function Order()
{
    let order=useSelector(state=>state.purchase);

    let purchasedItems=order.map((purchase,index)=>(
        <li key={index} className="Order">
        <h3>Purchase Date:{purchase.date}</h3>
        <h3>Purchase Date:{purchase.price}</h3>

        <ul>
            {
            purchase.items.map((item,itemIndex)=>(
                <li key={itemIndex}>
                {item.name} -- {item.price} -- {item.quantity}
                </li>
            ))
        }
        </ul>
        </li>
    ))
    return(
        <>
        {
            order.length>0?
            
        <ul>{purchasedItems}</ul>
        :
        <h3>Order is Empty</h3>
        }
        </>
    )
}
export default Order; */



import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

function Order() {
  let order = useSelector(state => state.purchase);

  let purchasedItems = order.map((purchase, index) => (
    <div key={index} className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Purchase Date: {purchase.date}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Total Price: ₹{purchase.price}</h6>

        <ul className="list-group mt-2">
          {purchase.items.map((item, itemIndex) => (
            <li key={itemIndex} className="list-group-item">
              {item.name} -- ₹{item.price} -- Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));

  return (
    <div className="container d-flex justify-content-center align-items-center " style={{ minHeight: "100vh" }}>
      <div className="row w-100">
        <h1 className="text-center text-success my-4">Order History</h1>
        {order.length > 0 ? (
          <div className="col-12">
            {purchasedItems}
          </div>
        ) : (
          <h3 className="text-center text-danger w-100">Order is Empty</h3>
        )}
      </div>
    </div>
  );
}

export default Order;
