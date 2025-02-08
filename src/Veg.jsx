/*import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";



function Veg()
{
    let vegItems=useSelector(state=>state.product.veg);
    let dispatch=useDispatch();
    let perPage=4;
   let[pageNumber,setPageNumber]=useState(1);
   let pageEndIndexItem=pageNumber*perPage;
   let pageStartIndexItem=pageEndIndexItem-perPage;
   let totalPage=vegItems.length/perPage;
   
   let currentItem=vegItems.slice(pageStartIndexItem,pageEndIndexItem);

    let vegs=currentItem.map((item,index)=>(
        <li key={index} >
            <img src={item.image} alt="Not found" width={'100px'} height={'80px'}/>
            {item.name} -- ₹{item.price}
            <button onClick={()=>dispatch(addToCart(item))}>AddToCart</button>
        </li>
        
    ))

    let handlePage=(page)=>{
      setPageNumber(page);
  }
 

    
    return(
        <>
        <h1>Veg Items</h1>
        <ul>{vegs}</ul>

        <button onClick={()=>handlePage(pageNumber+1)} >Next</button>
        {
  Array.from({ length: totalPage }, (_, index) => (
    <button key={index} onClick={() => handlePage(index + 1)}>
      {index + 1}
    </button>
  ))
}

        <button onClick={()=>handlePage(pageNumber-1)}>Privious</button>
        
        </>
    )



}

export default Veg;

*/


import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";

function Veg() {
  let vegItems = useSelector((state) => state.product.veg);
  let dispatch = useDispatch();
  let perPage = 4;
  let [pageNumber, setPageNumber] = useState(1);
  let pageEndIndexItem = pageNumber * perPage;
  let pageStartIndexItem = pageEndIndexItem - perPage;
  let totalPage = Math.ceil(vegItems.length / perPage); // Round up to handle remaining items

  let currentItem = vegItems.slice(pageStartIndexItem, pageEndIndexItem);

  let vegs = currentItem.map((item, index) => (
    <div className="col-md-3 mb-4" key={index}>
      <div className="card" style={{ width: '100%' }}>
        <img src={item.image} className="card-img-top" alt="Not found" />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">₹{item.price}</p>
          <button className="btn btn-primary" onClick={() => dispatch(addToCart(item))}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  let handlePage = (page) => {
    setPageNumber(page);
  };

  return (
    <div className="fixed-content">
      <div className="row">
        {vegs}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-secondary me-2" onClick={() => handlePage(pageNumber - 1)} disabled={pageNumber <= 1}>
          Previous
        </button>

        {Array.from({ length: totalPage }, (_, index) => (
          <button
            key={index}
            className={`btn btn-outline-primary me-2 ${pageNumber === index + 1 ? 'active' : ''}`}
            onClick={() => handlePage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button className="btn btn-secondary ms-2" onClick={() => handlePage(pageNumber + 1)} disabled={pageNumber >= totalPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Veg;
