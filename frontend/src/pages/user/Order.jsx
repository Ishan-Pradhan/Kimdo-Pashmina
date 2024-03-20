import axios from "axios";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserMenu from "../../components/User/UserMenu";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/authcontext";

function Order() {
  const [userOrders, setUserOrders] = useState([]);
  const [auth] = useAuthContext();
  const [selectedStatus, setSelectedStatus] = useState("All");

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const { data } = await axios.get("/api/v1/orders");

        const ordersForCurrentUser = data.filter(
          (order) => order.customer_information.email === auth.user.email
        );

        setUserOrders(ordersForCurrentUser);
      } catch (error) {
        console.error("Error fetching user orders:", error);
      }
    };

    fetchUserOrders();
  }, [auth.user]);

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const filteredOrders = userOrders.filter((order) => {
    if (selectedStatus === "All") {
      return true;
    } else {
      return order.status === selectedStatus;
    }
  });
  return (
    <>
      <Header />
      <section className="flex flex-col container mx-auto md:flex-row justify-start items-start gap-10 px-5 md:px-0">
        <UserMenu />
        <div>
          <div className="flex justify-between border-b items-center">
            <h2 className="text-2xl font-semibold ">My orders</h2>
            <div>
              <label htmlFor="status">Filter by Status:</label>
              <select
                id="status"
                value={selectedStatus}
                onChange={(e) => handleStatusChange(e.target.value)}
              >
                <option value="All">All</option>
                <option value="delivered">Delivered</option>
                <option value="paid">Paid</option>
                <option value="cash on delivery">Cash on Delivery</option>
              </select>
            </div>
          </div>
          {/* <div className="grid grid-cols-6 gap-10 md:grid-cols-9 mb-5 md:gap-5 ">
            <span className="font-bold font-head col-span-2">
              Transaction_id
            </span>
            <span className="font-bold font-head">Products</span>
            <span className="font-bold font-head">Quantity</span>
            <span className="font-bold font-head">Total Price</span>
            <span className="hidden font-bold font-head md:flex">Address</span>
            <span className="hidden font-bold font-head md:flex">
              Paid-Through
            </span>
            <span className="font-bold font-head">Status</span>
            <span className="font-bold font-head hidden md:flex">
              Ordered on
            </span>
          </div> */}

          {!filteredOrders.length > 0 && <div>You have not ordered yet.</div>}

          {filteredOrders.map((order) => (
            <div
              className="grid grid-cols-6 gap-4 md:grid-cols-7 md:gap-x-10 items-center justify-center border-b-2 py-4 "
              key={order._id}
            >
              <span className="col-span-6 md:col-span-7">
                <span className="font-bold">Order_id </span>
                {order._id}
                <div className="text-sm text-gray-500">
                  Placed on{" "}
                  {new Date(order.createdAt).toLocaleString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </div>
              </span>
              <div className="flex flex-col col-span-2">
                {order.products.map((product) => (
                  <span key={product.identity}>{product.product}</span>
                ))}
              </div>
              <div className="flex flex-col">
                {order.products.map((product) => (
                  <span key={product.identity}>
                    <span className="font-semibold text-gray-500">Qty </span>{" "}
                    {product.quantity}
                  </span>
                ))}
              </div>
              <span>
                {" "}
                <span className="font-semibold text-gray-500">Total </span>{" "}
                {order.amount}
              </span>
              {/* <span className="hidden md:flex">{order.address}</span> */}

              <div>
                <span className="hidden md:flex">
                  {/* <span className="font-semibold">Paid Through</span>{" "} */}
                  {/* {order.payment_method} */}
                </span>
                <span
                  className={`  rounded text-center uppercase font-semibold text-sm ${
                    order.status === "paid"
                      ? "bg-green-300 text-green-800 px-4 md:px-4 w-full py-1"
                      : order.status === "delivered"
                      ? "bg-slate-300 text-slate-800 px-1 md:px-4 w-full py-1"
                      : order.status === "cancelled"
                      ? "bg-red-300 text-red-800 px-1 md:px-4 w-full py-1"
                      : "bg-gray-300 text-gray-800 px-1 md:px-4 w-full py-1"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <div className="hidden md:flex col-span-2 gap-2">
                {order.status === "delivered" ? (
                  <div>
                    <span className="font-semibold">Delivered on</span>{" "}
                    {new Date(order.updatedAt).toLocaleDateString()}
                  </div>
                ) : order.status === "paid" ||
                  order.status === "cash on delivery" ? (
                  <span className="font-semibold">Processing</span>
                ) : (
                  <span className="font-semibold">Cancelled</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Order;
