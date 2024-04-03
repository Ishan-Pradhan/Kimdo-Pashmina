import { useState } from "react";
import AdminMenu from "../../components/AdminPage/AdminMenu";
import { useProductContext } from "../../context/productcontext";
import { NavLink } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollTop";

function ManageProducts() {
  const { products } = useProductContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [showZeroStock, setShowZeroStock] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = products.filter(
    (product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "all" ||
        product.generalCategory === selectedCategory) &&
      (showZeroStock ? product.stock === 0 : true)
  );

  const toggleShowZeroStock = () => {
    setShowZeroStock(!showZeroStock);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <section className="container flex justify-start items-start gap-10 ">
        <AdminMenu />
        <div className="mt-10">
          <h2 className="text-2xl uppercase font-head font-bold mb-1 text-center">
            Manage Products
          </h2>

          <div className="flex flex-col justify-center">
            <div className="flex justify-between items-center">
              <input
                type="text"
                placeholder="Search by product name..."
                className="border border-gray-300 px-2 py-1 rounded mb-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="border border-gray-300 p-2 rounded-md mb-4"
              >
                <option value="all">All Categories</option>
                <option value="shawl">Shawl</option>
                <option value="muffler">Muffler</option>
                <option value="poncho">Poncho</option>
                <option value="blanket">Blanket</option>
              </select>
            </div>

            <label className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={showZeroStock}
                onChange={toggleShowZeroStock}
                className="mr-2  "
              />
              Show products with 0 stock
            </label>

            <div
              className={`grid grid-cols-5 gap-10 justify-center border-b-2  mb-10 mt-10 p-2 border-text`}
            >
              <span className="font-bold">Product</span>
              <span className="font-bold">Product Name</span>
              <span className="font-bold">Gender Category</span>
              <span className="font-bold">Stock left</span>
            </div>

            {filteredProducts.map((product) => {
              return (
                <div
                  className={`grid grid-cols-5 gap-10 justify-center items-center flex-wrap  mb-10 mt-10 p-2 border-b`}
                  key={product._id}
                >
                  <div className="h-32 w-32  overflow-hidden">
                    <img
                      className="h-full w-full object-contain"
                      src={product.productImg}
                      alt=""
                    />
                  </div>
                  <span
                    className={` ${product.stock === 0 ? "text-red-500" : ""}`}
                  >
                    {product.productName}
                  </span>
                  <span>{product.genderCategory}</span>
                  <span
                    className={` ${product.stock === 0 ? "text-red-500" : ""}`}
                  >
                    {product.stock}
                  </span>
                  <NavLink
                    to={`/dashboard/admin/manage-product/${product._id}`}
                    className="text-secondary font-bold hover:underline uppercase"
                    onClick={scrollToTop}
                  >
                    update
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ManageProducts;
