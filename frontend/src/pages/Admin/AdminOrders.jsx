import axios from "axios";
import AdminMenu from "../../components/AdminPage/AdminMenu";
import { useEffect, useState } from "react";

function AdminOrders() {
  const [userOrders, setUserOrders] = useState([]);
  const [displayOption, setDisplayOption] = useState("all");
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const { data } = await axios.get("/api/v1/orders");
        setUserOrders(data);
      } catch (error) {
        console.error("Error fetching user orders:", error);
      }
    };

    fetchUserOrders();
  }, []);

  useEffect(() => {
    filterOrders();
  }, [userOrders, displayOption]);

  const filterOrders = () => {
    let filtered = [...userOrders];
    if (displayOption === "delivered") {
      filtered = userOrders.filter((order) => order.status === "delivered");
    } else if (displayOption === "paid") {
      filtered = userOrders.filter((order) => order.status === "paid");
    } else if (displayOption === "cod") {
      filtered = userOrders.filter(
        (order) => order.status === "cash on delivery"
      );
    } else if (displayOption === "cancelled") {
      filtered = userOrders.filter((order) => order.status === "cancelled");
    } else if (searchQuery) {
      filtered = filtered.filter((order) => order._id.includes(searchQuery));
    }

    setFilteredOrders(filtered);
  };

  const handleDisplayOptionChange = (option) => {
    setDisplayOption(option);
  };

  const handleStatus = async (orderId, selectedStatus) => {
    try {
      await axios.put(`/api/v1/orders/${orderId}`, { status: selectedStatus });
      const updatedOrders = userOrders.map((order) =>
        order._id === orderId ? { ...order, status: selectedStatus } : order
      );
      setUserOrders(updatedOrders);
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <>
      <section className=" flex justify-start items-start gap-10 mb-10 relative">
        <AdminMenu />
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4 px-10">
            <h2 className="text-2xl font-semibold ">Orders</h2>
            <input
              type="text"
              placeholder="Search Order ID"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 ml-4"
            />
            <div className="flex items-center">
              <label htmlFor="displayOption" className="font-semibold">
                Sort:
              </label>
              <select
                id="displayOption"
                value={displayOption}
                onChange={(e) => handleDisplayOptionChange(e.target.value)}
                className="rounded border-2"
              >
                <option value="all">All</option>
                <option value="delivered">Delivered</option>
                <option value="paid">Paid</option>
                <option value="cod">COD</option>
                <option value="cancelled">cancelled</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto text-[10px]">
            <div className="grid grid-cols-11 mb-5 gap-4 mt-10">
              <span className="font-bold font-head col-span-2">Id</span>
              <span className="font-bold font-head col-span-2">Products</span>
              <span className="font-bold font-head">Quantity</span>
              <span className="font-bold font-head">Total Price</span>
              <span className="font-bold font-head">Address</span>
              <span className="font-bold font-head">Paid-Through</span>
              <span className="font-bold font-head">Status</span>
              <span className="font-bold font-head">Ordered By</span>
              <span className="font-bold font-head">Ordered on</span>
            </div>
            {filteredOrders.map((order) => (
              <div
                className={`grid grid-cols-11 border-b-2 py-4 gap-4 ${
                  order.status === "cancelled" ? "bg-red-200" : ""
                }`}
                key={order._id}
              >
                <div className="col-span-2 flex flex-col">
                  <span>
                    <span className="font-bold">Order_id </span>
                    {order._id}
                  </span>
                  <span>
                    <span className="font-bold">Txn_id</span>{" "}
                    {order.transaction_code}
                  </span>
                </div>
                <div className="flex flex-col col-span-2">
                  {order.products.map((product) => (
                    <span key={product.identity}>{product.product}</span>
                  ))}
                </div>
                <div className="flex flex-col">
                  {order.products.map((product) => (
                    <span key={product.identity}>{product.quantity}</span>
                  ))}
                </div>

                <span> {order.amount}</span>
                <span>{order.address}</span>
                <span>{order.payment_method}</span>
                <div>
                  <select
                    className={`px-2 py-1 rounded text-center ${
                      order.status === "paid"
                        ? "bg-green-300 text-green-800"
                        : order.status === "delivered"
                        ? "bg-slate-300 text-slate-800"
                        : order.status === "cancelled"
                        ? "bg-red-300 text-red-800 font-thin"
                        : "bg-gray-200 text-gray-800"
                    }`}
                    onChange={(e) => handleStatus(order._id, e.target.value)}
                    value={order.status}
                    disabled={
                      order.status === "cancelled" ||
                      order.status === "delivered"
                    }
                  >
                    <option value="cash on delivery">COD</option>
                    <option value="paid">paid</option>
                    <option value="delivered">delivered</option>
                    <option value="cancelled">cancelled</option>
                  </select>
                </div>

                <div>
                  <div>{order.customer_information.name}</div>(
                  {order.customer_information.phone})
                </div>
                <div>{new Date(order.createdAt).toLocaleDateString()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminOrders;
