import AdminMenu from "../../components/AdminPage/AdminMenu";
import { useProductContext } from "../../context/productcontext";

import { NavLink } from "react-router-dom";

function ManageProducts() {
  const { products } = useProductContext();

  return (
    <>
      <section className="container flex justify-start items-start gap-10 ">
        <AdminMenu />
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Manage Products</h2>
          <div className="flex gap-10 justify-evenly flex-wrap  mb-10 mt-10">
            {products?.map((product) => {
              return (
                <NavLink
                  key={product._id}
                  to={`/dashboard/admin/manage-product/${product._id}`}
                >
                  <div
                    className={`flex  flex-col gap-4 border p-4 shadow-md hover:-translate-y-3 transition-transform ease-in-out duration-500 ${
                      product.stock === 0 ? "bg-red-200" : ""
                    }`}
                  >
                    <img
                      className="w-52 h-60 object-cover "
                      src={product.productImg}
                    />
                    <div className="flex flex-col justify-between items-center">
                      <div className="font-bold">{product.productName}</div>
                      <div className="text-sm">Stock: {product.stock}</div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ManageProducts;
