import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { addToCart } from './Store';

function Home() {
  const vegItems = useSelector(state => state.product.veg).slice(0, 5);
  const nonVegItems = useSelector(state => state.product.nonVeg).slice(0, 5);
  const dispatch = useDispatch();

  // Combine and shuffle exactly 5 veg and 5 non-veg items
  const mixedItems = [...vegItems, ...nonVegItems].sort(() => Math.random() - 0.5);

  const renderCard = (item, index) => (
    <div className="col-md-4 mb-4" key={index}>
      <div className="card h-100">
        <img
          src={item.image}
          alt="Not found"
          className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Price: ₹{item.price}</p>
          <button
            className="btn btn-success mt-auto"
            onClick={() => dispatch(addToCart(item))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mt-5">
      <div className="row">
        {mixedItems.map((item, index) => renderCard(item, index))}
      </div>
    </div>
  );
}

export default Home;
