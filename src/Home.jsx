/* import React from 'react'

function Home() {
  return (
    <>
     <h1>WelCome To Our Hotel </h1>
    </>
  )
}

export default Home;
*/



import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';


function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 text-primary">Welcome to Our Food Zone</h1>
      <p className="lead">Indulge in delicious meals and exciting flavors!</p>
    </div>
  );
}

export default Home;

// import { useSelector } from "react-redux"
// import 'bootstrap/dist/css/bootstrap.min.css';
// function Home()
// {
//   let vegItem=useSelector((state) => state.product.veg);
//   let nonVegItem=useSelector((state) => state.product.nonVeg);

//   let vegs = vegItem.map((item, index) => (
//     <div key={index} className="col-md-3 mb-4">
//         <div className="card">
//             <img
//                 src={item.image}
//                 alt="Not found"
//                 className="card-img-top"
//                 style={{ height: '200px', objectFit: 'cover' }} // Adjust image height
//             />
//             <div className="card-body">
//                 <h5 className="card-title">{item.name}</h5>
//                 <p className="card-text">₹{item.price}</p>
//                 <button className="btn btn-primary" onClick={() => dispatch(addToCart(item))}>
//                     Add to Cart
//                 </button>
//             </div>
//         </div>
//     </div>
// ));



//   let nonVegs = nonVegItem.map((item, index) => (
//           <div key={index} className="col-md-3 mb-4">
//               <div className="card">
//                   <img
//                       src={item.image}
//                       alt="Not found"
//                       className="card-img-top"
//                       style={{ height: '200px', objectFit: 'cover' }} // Adjust image height
//                   />
//                   <div className="card-body">
//                       <h5 className="card-title">{item.name}</h5>
//                       <p className="card-text">₹{item.price}</p>
//                       <button className="btn btn-primary" onClick={() => dispatch(addToCart(item))}>
//                           Add to Cart
//                       </button>
//                   </div>
//               </div>
//           </div>
//       ));
  
//   return(
//     <>

// <div className="row">
//          {vegs}
//      </div>
//     <div className="row">
//          {nonVegs}
//      </div>

//     </>
//   )
// }
// export default Home;

