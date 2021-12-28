import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAllProducts } from "../redux/actions/index";

import { Link } from "react-router-dom";
// import SingleProduct from "./SingleProduct";

import { useDispatch, useSelector } from "react-redux";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.todoReducers.products);

  const getAllProductsApi = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    if (res) {
      setLoading(false);
      //   setProducts(res.data);
      dispatch(getAllProducts(res.data));
    }
    console.log(res.data);
  };

  useEffect(() => {
    setLoading(true);
    getAllProductsApi();
  }, []);

  return (
    <div className="ui grid container" style={{ marginTop: "50px" }}>
      {loading ? (
        <p>...LOADING</p>
      ) : (
        state &&
        state.map((val) => {
          const { id, image, title, category, price } = val;
          return (
            <div className="four wide column" key={id}>
              <Link to={`/product/${id}`}>
                <div className="ui link cards">
                  <div className="card">
                    <div className="image">
                      <img src={image} alt={title} />
                    </div>
                    <div className="content">
                      <div className="header">{title}</div>
                      <div className="meta price">$ {price}</div>
                      <div className="meta">{category}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default AllProducts;

{
  /* products &&
        products.map((val) => {
          return <h1>{val.title}</h1>;
        }) */
}
