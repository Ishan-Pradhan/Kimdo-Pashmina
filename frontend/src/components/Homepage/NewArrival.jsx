/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import AddToCart from "../AddToCart";

function NewArrival({ product }) {
  if (product.stock === 0) {
    return (
      <div className="relative brightness-90">
        <div className="absolute w-full h-full top-0 z-40 flex justify-center items-center ">
          <span className="bg-background rounded-3xl px-3 py-1 -rotate-6">
            currently out of stock
          </span>
        </div>
        <div className="hover:-translate-y-3 transition-transform ease-in duration-200 hover:shadow-lg">
          <div className="relative h-60 w-60" data-aos="fade-in">
            <img
              src={product.productImg}
              alt=""
              className="h-full w-full object-cover object-top  relative"
            />
          </div>
          <div className="px-3 py-3 bg-white border-t flex flex-col  ">
            <h3 className="text-lg  font-head font-extrabold mb-1">
              {product.productName}
            </h3>
            <div className="flex justify-between items-center mb-2">
              {product.discount > 0 ? (
                <span className="text-xl font-semibold text-secondary">
                  {product.price - product.price * (product.discount / 100)}
                </span>
              ) : (
                <span className="text-xl font-semibold text-secondary">
                  {product.price}
                </span>
              )}
              <div className="flex gap-1">
                <span
                  className={`text-md font-semibold text-gray-500 ${
                    product.discount > 0 ? "line-through" : "text-secondary"
                  }`}
                >
                  {product.discount > 0 ? <span>{product.price}</span> : ""}
                </span>
                {product.discount > 0 ? (
                  <span className={`text-md text-gray-500`}>
                    -{product.discount}%
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <AddToCart product={product} buttonText={"yes"} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <NavLink
      to={`/SingleProducts/${product._id} `}
      className="relative hover:-translate-y-3 transition-transform ease-in duration-200 hover:shadow-lg"
    >
      <div className="relative h-60 w-60" data-aos="fade-in">
        <img
          src={product.productImg}
          alt=""
          className="h-full w-full object-cover object-top  relative"
        />
      </div>
      <div className="px-3 py-3 bg-white border-t flex flex-col  ">
        <h3 className="text-lg  font-head font-extrabold mb-1">
          {product.productName}
        </h3>
        <div className="flex justify-between items-center mb-2">
          {product.discount > 0 ? (
            <span className="text-xl font-semibold text-secondary">
              {product.price - product.price * (product.discount / 100)}
            </span>
          ) : (
            <span className="text-xl font-semibold text-secondary">
              {product.price}
            </span>
          )}
          <div className="flex gap-1">
            <span
              className={`text-md font-semibold text-gray-500 ${
                product.discount > 0 ? "line-through" : "text-secondary"
              }`}
            >
              {product.discount > 0 ? <span>{product.price}</span> : ""}
            </span>
            {product.discount > 0 ? (
              <span className={`text-md text-gray-500`}>
                -{product.discount}%
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <AddToCart product={product} buttonText={"yes"} />
      </div>
      <span className="absolute top-2 right-2 bg-secondary text-background font-semibold px-3 py-1 text-sm rounded-full">
        New
      </span>
    </NavLink>
  );
}

export default NewArrival;
