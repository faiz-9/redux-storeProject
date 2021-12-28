import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./sass/main.css";

function App() {
  return (
    <div className="App">
      <>
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>
          SHOP USING REDUX
        </h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllProducts />}></Route>
            <Route
              path="/product/:productId"
              element={<SingleProduct />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
