import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, remove } from "../redux/actions/index";

const SingleProduct = () => {
  const params = useParams();
  const id = params.productId;
  console.log(params.productId);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.singleProduct);
  console.log(state);

  const fetchSingleProduct = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch(selectedProduct(res.data));
  };

  useEffect(() => {
    fetchSingleProduct();
    return () => {
      dispatch(remove());
    };
  }, [id]);

  const { image, title, price, category, description } = state;

  return (
    // <div>
    //   {Object.keys(state).length === 0 ? (
    //     "...LOADING PRODUCT"
    //   ) : (
    //     <>
    //       <img src={state.image} style={{ width: "150px", width: "150px" }} />
    //       <h1>{state.id}</h1>
    //       {state.title}
    //       {state.description}
    //       {state.category}
    //       {state.price})
    //     </>
    //   )}
    // </div>

    <div className="ui grid container" style={{ marginTop: "30px" }}>
      {Object.keys(state).length === 0 ? (
        <div>...Loading Product</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
