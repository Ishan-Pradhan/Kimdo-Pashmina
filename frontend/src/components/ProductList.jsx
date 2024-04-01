import { useState } from "react";
import { useFilterContext } from "../context/womenfiltercontext";
import FeatureProducts from "./FeatureProducts";
import Pagination from "./Pagination";

/* eslint-disable react/prop-types */
function ProductList({ genderCategory }) {
  const { filter_products } = useFilterContext();
  const filteredProducts = filter_products.filter(
    (product) => product.genderCategory === genderCategory
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalItems = filteredProducts.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsForCurrentPage = filteredProducts.slice(startIndex, endIndex);

  if (productsForCurrentPage.length === 0) {
    return (
      <>
        <div className="flex justify-center items-center ">
          <p>No products to show</p>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-y-20 md:gap-y-10 flex-wrap items-center justify-center md:justify-start gap-[4.8rem] container">
        {productsForCurrentPage.map((product) => (
          <FeatureProducts key={product._id} product={product} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default ProductList;
