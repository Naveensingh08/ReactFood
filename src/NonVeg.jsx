
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";

function NonVeg() {
    let nonVegsItems = useSelector(state => state.product.nonVeg);
    let dispatch = useDispatch();

    // Pagination variables
    let perPage = 4;
    let [pageNumber, setPageNumber] = useState(1);
    let [searchQuery, setSearchQuery] = useState('');
    let [selectedPrices, setSelectedPrices] = useState([]);

    let pageEndIndexItem = pageNumber * perPage;
    let pageStartIndexItem = pageEndIndexItem - perPage;
    let totalPage = Math.ceil(nonVegsItems.length / perPage);

    // Filter items based on search query and selected prices
    let filteredItems = nonVegsItems.filter(item => {
        let matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        let matchesPrice = selectedPrices.length === 0 || selectedPrices.includes(item.price);
        return matchesSearch && matchesPrice;
    });

    let currentItem = filteredItems.slice(pageStartIndexItem, pageEndIndexItem);

    let nonVegs = currentItem.map((item, index) => (
        <div className="col-12 col-sm-6 col-md-3" key={index}>
            <div className="card shadow-sm mb-4">
                <img src={item.image} alt="Not found" className="card-img-top" width="100%" height="200px" />
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

    // Handle price filter checkboxes
    const handlePriceFilter = (e) => {
        const price = parseInt(e.target.value);
        setSelectedPrices((prevPrices) => {
            if (prevPrices.includes(price)) {
                return prevPrices.filter((p) => p !== price); // Remove price from filter
            } else {
                return [...prevPrices, price]; // Add price to filter
            }
        });
    };

    return (
        <>
            {/* Search and Price Filter in One Line */}
            <div className="d-flex justify-content-between align-items-center mt-4">
                {/* Search Bar */}
                <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Search for items..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* Price Filter */}
                <div className="d-flex align-items-center">
                    <div className="d-inline-block me-3">
                        {[100, 200, 300].map((price) => (
                            <div key={price} className="form-check form-check-inline">
                                <input
                                    className="form-check-input bg-dark"
                                    type="checkbox"
                                    id={`price-${price}`}
                                    value={price}
                                    onChange={handlePriceFilter}
                                />
                                <label className="form-check-label" htmlFor={`price-${price}`}>
                                    ₹{price}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Display */}
            <div className="row g-3">
                {nonVegs}
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-center my-4">
                <button
                    onClick={() => handlePage(pageNumber - 1)}
                    className="btn btn-outline-secondary me-2"
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
                    className="btn btn-outline-secondary ms-2"
                    disabled={pageNumber === totalPage}
                >
                    Next
                </button>
            </div>
        </>
    );
}

export default NonVeg;
