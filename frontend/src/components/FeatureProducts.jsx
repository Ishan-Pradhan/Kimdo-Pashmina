/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import AddToCart from "./AddToCart";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

function FeatureProducts({ product }) {
  if (product.stock === 0) {
    return (
      <NavLink
        to={`/SingleProducts/${product._id} `}
        data-aos="zoom-in-down"
        className="relative brightness-90 w-60"
      >
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
                  Rs. {product.price - product.price * (product.discount / 100)}
                </span>
              ) : (
                <span className="text-xl font-semibold text-secondary">
                  Rs. {product.price}
                </span>
              )}
              <div className="flex gap-1">
                <span
                  className={`text-md font-semibold text-gray-500 ${
                    product.discount > 0 ? "line-through" : "text-secondary"
                  }`}
                >
                  Rs. {product.discount > 0 ? <span>{product.price}</span> : ""}
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

            <AddToCart product={product} buttonText={"yes"} disabled={true} />
          </div>
        </div>
      </NavLink>
    );
  }

  return (
    <NavLink
      to={`/SingleProducts/${product._id} `}
      data-aos="zoom-in-down"
      className="w-60"
    >
      <div className="hover:-translate-y-3 transition-transform ease-in duration-200 hover:shadow-lg border">
        <div className="relative h-60 w-full">
          <img
            src={product.productImg}
            alt=""
            className="h-full w-full object-cover object-top overflow-hidden  relative"
          />
        </div>
        <div className="px-3 py-3 bg-white border-t flex flex-col  ">
          <h3 className="flex text-lg font-head font-extrabold mb-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
            <Tippy
              theme={"light"}
              interactive={true}
              content={product.productName}
            >
              <span className="overflow-hidden whitespace-nowrap overflow-ellipsis">
                {" "}
                {product.productName}
              </span>
            </Tippy>
          </h3>
          <div className="flex justify-between items-center mb-2">
            {product.discount > 0 ? (
              <span className="text-xl font-semibold text-secondary">
                Rs. {product.price - product.price * (product.discount / 100)}
              </span>
            ) : (
              <span className="text-xl font-semibold text-secondary">
                Rs. {product.price}
              </span>
            )}
            <div className="flex gap-1">
              <span
                className={`text-md font-semibold text-gray-500 ${
                  product.discount > 0 ? "line-through" : "text-secondary"
                }`}
              >
                {product.discount > 0 ? <span>Rs. {product.price}</span> : ""}
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
          <AddToCart product={product} buttonText={"yes"} disabled={false} />
        </div>
      </div>
    </NavLink>
  );
}

export default FeatureProducts;
