/* import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";



function NonVeg()
{
    let nonVegsItems=useSelector(state=>state.product.nonVeg);
    let dispatch=useDispatch();

     let perPage=4;
       let[pageNumber,setPageNumber]=useState(1);
       let pageEndIndexItem=pageNumber*perPage;
       let pageStartIndexItem=pageEndIndexItem-perPage;
       let totalPage=nonVegsItems.length/perPage;
       
       let currentItem=nonVegsItems.slice(pageStartIndexItem,pageEndIndexItem);

    let nonVegs=currentItem.map((item,index)=>(
        <li key={index} >
            <img src={item.image} alt="Not found" width={'100px'} height={'80px'}/>
            {item.name} -- ₹{item.price}
            <button onClick={()=>dispatch(addToCart(item))} style={{width:'100px'}}>AddToCart</button>
        </li>
    ))

    let handlePage=(page)=>{
      setPageNumber(page);
  }
 

    return(
        <>
        <h1 >NonVeg Items</h1>
        <ul>{nonVegs}</ul>

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
export default NonVeg;
*/

 
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";

function NonVeg() {
    let nonVegsItems = useSelector(state => state.product.nonVeg);
    let dispatch = useDispatch();

    let perPage = 4;
    let [pageNumber, setPageNumber] = useState(1);
    let pageEndIndexItem = pageNumber * perPage;
    let pageStartIndexItem = pageEndIndexItem - perPage;
    let totalPage = Math.ceil(nonVegsItems.length / perPage);  

    let currentItem = nonVegsItems.slice(pageStartIndexItem, pageEndIndexItem);

    let nonVegs = currentItem.map((item, index) => (
        <div className="col-12 col-sm-6 col-md-3" key={index}>
            <div className="card mb-3">
                <img src={item.image} alt="Not found" className="card-img-top" width="100%" height="200px" />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">₹{item.price}</p>
                    <button className="btn btn-primary" onClick={() => dispatch(addToCart(item))}>
            Add to Cart
          </button></div>
            </div>
        </div>
    ));

    let handlePage = (page) => {
        setPageNumber(page);
    };

    return (
        <>
            
            <div className="row">
                {nonVegs}
            </div>
            
            <div className="d-flex justify-content-center my-4">
                <button 
                    onClick={() => handlePage(pageNumber - 1)} 
                    className="btn btn-secondary me-2"
                    disabled={pageNumber === 1}
                >
                    Previous
                </button>

                {Array.from({ length: totalPage }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePage(index + 1)}
                        className={`btn ${pageNumber === index + 1 ? 'btn-primary' : 'btn-outline-primary'} me-2`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button 
                    onClick={() => handlePage(pageNumber + 1)} 
                    className="btn btn-secondary ms-2"
                    disabled={pageNumber === totalPage}
                >
                    Next
                </button>
            </div>
        </>
    );
}

export default NonVeg;
