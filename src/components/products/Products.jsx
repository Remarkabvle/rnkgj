import React, { useEffect, useState } from 'react';
import mainUrl from '../../api';
import "./products.scss";

function Products() {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product
    const perPageCount = 5;

    useEffect(() => {
        setLoading(true);
        mainUrl
            .get(`/products`, {
                params: {
                    limit: offset * perPageCount
                }
            })
            .then(res => setProducts(res.data.products))
            .catch(err => console.error("Error fetching products:", err))
            .finally(() => setLoading(false));
    }, [offset]);

    let productsItems = products?.map((el) => (
        <div key={el.id} className="products__card">
            <div className="products__img">
                <img width={250} src={el.images[0]} alt={el.title} />
            </div>
            <p>{el.title}</p>
            <p>{el.brand}</p>
            <p className='price'>${el.price}</p>
            <button onClick={() => setSelectedProduct(el)}>See more details</button>
        </div>
    ));

    return (
        <div className="products">
            <div className="products__grid">
                {productsItems}
                {loading && <div className="loading-indicator">Loading...</div>}
            </div>
            <button onClick={() => setOffset((prevOffset) => prevOffset + 1)}>View More</button>

            {selectedProduct && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setSelectedProduct(null)}>close</span>
                        <h3>{selectedProduct.title}</h3>
                        <p>{selectedProduct.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Products;