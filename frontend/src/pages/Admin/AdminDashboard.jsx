// import Header from "../../components/Header";
/* eslint-disable  */
import axios from "axios";
import AdminMenu from "../../components/AdminPage/AdminMenu";
import { useAuthContext } from "../../context/authcontext";
import { useProductContext } from "../../context/productcontext";
import { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";
function AdminDashboard() {
  const { products } = useProductContext();
  const [orders, setOrders] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [paidOrders, setPaidOrders] = useState([]);
  const [deliveredOrders, setDeliveredOrders] = useState([]);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("/api/v1/auth/users");
      const data = res.data;
      setUsers(data);
    };
    getUsers();
  }, []);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const { data } = await axios.get("/api/v1/orders");

        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);
  useEffect(() => {
    const revenue = orders
      .filter((order) => order.status === "delivered")
      .reduce((total, order) => total + order.amount, 0);

    const paidOrders = orders.filter(
      (order) => order.status === "paid" || order.status === "cashOnDelivery"
    );
    setPaidOrders(paidOrders);

    const deliveredOrders = orders.filter(
      (order) => order.status === "delivered"
    );
    setDeliveredOrders(deliveredOrders);

    setTotalRevenue(revenue);
  }, [orders]);

  // const orderDates = orders.map((order) =>
  //   new Date(order.createdAt).toLocaleDateString()
  // );
  // const revenueData = orders.map((order) => order.amount);

  const revenueByMonth = orders.reduce((acc, order) => {
    if (order.status === "delivered") {
      const month = new Date(order.createdAt).toLocaleString("default", {
        month: "long",
      });
      acc[month] = (acc[month] || 0) + order.amount;
    }
    return acc;
  }, {});

  const monthLabels = Object.keys(revenueByMonth);
  const revenueByMonthData = Object.values(revenueByMonth);

  const chartData = {
    labels: monthLabels,
    datasets: [
      {
        label: "Revenue",
        data: revenueByMonthData,
        fill: true,
        borderColor: "#B76E79",
        tension: 0,
      },
    ],
  };

  const productSales = products.reduce((acc, product) => {
    if (product.quantitySold >= 5) {
      acc.push({
        name: product.productName,
        quantitySold: product.quantitySold,
      });
    }
    return acc;
  }, []);

  productSales.sort((a, b) => b.quantitySold - a.quantitySold);

  const topSellingProductNames = productSales.map((product) => product.name);
  const topSellingProductQuantities = productSales.map(
    (product) => product.quantitySold
  );

  const topSellingProductsChartData = {
    labels: topSellingProductNames,
    datasets: [
      {
        label: "Units Sold",
        data: topSellingProductQuantities,
        backgroundColor: "rgba(211,168,174,0.2)",
        borderColor: "#B76E79",
        borderWidth: 1,
      },
    ],
    options: {
      animation: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
  };

  const [auth] = useAuthContext();
  return (
    <>
      <section className="container  flex justify-start items-start gap-10 ">
        <AdminMenu />
        <div className="mt-10">
          <div className="flex gap-2">
            <span>Admin: </span>
            <span className="col-span-2 text-secondary font-bold">
              {auth.user.name}
            </span>
          </div>
          <div className="flex gap-2">
            <span>Email: </span>
            <span className="col-span-2 text-secondary font-bold">
              {auth.user.email}
            </span>
          </div>
          <h1 className="font-head font-extrabold mt-10 mb-5 text-3xl">
            Stats
          </h1>
          <div className="flex flex-wrap gap-20">
            <div className="flex flex-col gap-2 justify-center items-center shadow-xl border-l-4 border-primary  relative px-10 py-3 w-64 hover:bg-primary text-white transition-all ease-in duration-100">
              <span className="font-head font-bold">Total Products</span>
              <div className="text-6xl">{products.length}</div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center shadow-xl border-l-4 border-primary  relative px-10 py-3 w-64  hover:bg-primary text-white transition-all ease-in duration-100">
              <span className="font-head font-bold">Orders to deliver</span>
              <div className="text-6xl">{paidOrders.length}</div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center shadow-xl border-l-4 border-primary  relative px-10 py-3 w-64  hover:bg-primary text-white transition-all ease-in duration-100">
              <span className="font-head font-bold">Delivered Orders</span>
              <div className="text-6xl ">{deliveredOrders.length}</div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center shadow-xl border-l-4 border-primary  relative px-10 py-3 w-64  hover:bg-primary text-white transition-all ease-in duration-100">
              <span className="font-head font-bold">Total Users</span>
              <div className="text-6xl ">{users.length}</div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center shadow-xl border-l-4 border-primary  relative px-10 py-3 w-64  hover:bg-primary text-white transition-all ease-in duration-100">
              <span className="font-head font-bold">Total Revenues</span>
              <div className="text-4xl ">Rs.{totalRevenue}</div>
            </div>
          </div>

          <div className="flex justify-between gap-4">
            <div className="my-10 w-[500px]">
              <h1 className="font-head font-extrabold mb-5 text-3xl">
                Revenue Over Time
              </h1>
              <Line data={chartData} className="" />
            </div>

            <div className="my-10 w-[500px]">
              <h1 className="font-head font-extrabold mb-5 text-3xl">
                Top Selling Products
              </h1>
              <Bar data={topSellingProductsChartData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminDashboard;
