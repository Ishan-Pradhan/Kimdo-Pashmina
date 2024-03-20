import { useEffect } from "react";
import Header from "../components/Header";
import { NavLink, useParams } from "react-router-dom";
import { useProductContext } from "../context/productcontext";

import PageNavigation from "../components/PageNavigation";
import Footer from "../components/Footer";
import AddToCart from "../components/AddToCart";
import Loading from "../components/Loading";

const API = "http://localhost:8000/api/v1/product";

function SingleProducts() {
  const { isSingleLoading, getSingleProduct, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    _id,
    productImg,
    productName,
    description,
    price,
    discount,
    composition,
    size,
    stock,
    weight,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, [id]);

  if (isSingleLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <PageNavigation title={productName} />

      <main>
        <section className="container m-auto px-16">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0">
            <div className="w-full md:w-1/2 flex justify-start ">
              <img
                src={productImg}
                alt=""
                className="w-[500px] object-cover object-top"
              />
            </div>
            <div className="flex flex-col gap-10 justify-center items-start md:w-1/2">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p className="font-head font-bold capitalize text-4xl">
                    {productName}
                  </p>

                  <div className="flex gap-5 items-center">
                    <span
                      className={`text-xl ${
                        discount > 0 ? "line-through text-gray-500" : ""
                      }`}
                    >
                      Rs. {price}
                    </span>
                    {discount > 0 ? (
                      <span className="text-2xl text-secondary font-semibold">
                        Rs. {price - price * (discount / 100)}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="text-lg">{description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <h3 className="text-lg text-gray-500 border-b-2 py-1 col-span-2 mb-2">
                      DETAILS
                    </h3>
                    <span className="text-gray-500 text-lg">Composition </span>{" "}
                    <span className="text-gray-500 text-lg">
                      {composition ? composition : "NA"}
                    </span>
                    <span className="text-gray-500 text-lg">Size: </span>
                    <span className="text-gray-500 text-lg">
                      {size ? size : "NA"}
                    </span>
                    <span className="text-gray-500 text-lg">Weight</span>{" "}
                    <span className="text-gray-500 text-lg">
                      {weight ? weight : "NA"}
                    </span>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">{stock} in stock</span>
              </div>

              <NavLink to="/Cart">
                <AddToCart product={singleProduct} buttonText="Add to Cart" />
              </NavLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SingleProducts;
