import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";

function Veg() {
  let vegItems = useSelector((state) => state.product.veg);
  let dispatch = useDispatch();
  let perPage = 4;
  let [pageNumber, setPageNumber] = useState(1);
  let [searchQuery, setSearchQuery] = useState(""); // For search query
  let [priceFilter, setPriceFilter] = useState({ below100: false, below200: false, below300: false }); // For price filter
  
  let pageEndIndexItem = pageNumber * perPage;
  let pageStartIndexItem = pageEndIndexItem - perPage;
  let totalPage = Math.ceil(vegItems.length / perPage); // Round up to handle remaining items

  // Filter items based on search query and price filter
  let currentItem = vegItems
    .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())) // Filter items based on search
    .filter(item => {
      if (priceFilter.below100 && item.price >= 100) return false;
      if (priceFilter.below200 && item.price >= 200) return false;
      if (priceFilter.below300 && item.price >= 300) return false;
      return true;
    })
    .slice(pageStartIndexItem, pageEndIndexItem);

  let vegs = currentItem.map((item, index) => (
    <div className="col-md-3 mb-4" key={index}>
      <div className="card shadow-lg border-0" style={{ width: '100%' }}>
        <img src={item.image} className="card-img-top" alt="Not found" />
        <div className="card-body text-center">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">₹{item.price}</p>
          <button className="btn btn-success w-100" onClick={() => dispatch(addToCart(item))}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  let handlePage = (page) => {
    setPageNumber(page);
  };

  // Handle price filter change
  const handlePriceFilter = (e) => {
    const { name, checked } = e.target;
    setPriceFilter((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="container mt-4">
      {/* Search Bar and Price Filter in one line */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        {/* Search Bar */}
        <div className="w-50">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Search Vegetables"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Price Filter */}
        <div className="d-flex align-items-center">
          <label className="me-3">
            <input
              type="checkbox"
              name="below100"
              checked={priceFilter.below100}
              onChange={handlePriceFilter}
            />
             ₹100
          </label>
          <label className="me-3">
            <input
              type="checkbox"
              name="below200"
              checked={priceFilter.below200}
              onChange={handlePriceFilter}
            />
             ₹200
          </label>
          <label>
            <input
              type="checkbox"
              name="below300"
              checked={priceFilter.below300}
              onChange={handlePriceFilter}
            />
             ₹300
          </label>
        </div>
      </div>

      {/* Veg Items */}
      <div className="row g-4">
        {vegs}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-outline-secondary me-2"
          onClick={() => handlePage(pageNumber - 1)}
          disabled={pageNumber <= 1}
        >
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

        <button
          className="btn btn-outline-secondary ms-2"
          onClick={() => handlePage(pageNumber + 1)}
          disabled={pageNumber >= totalPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Veg;
