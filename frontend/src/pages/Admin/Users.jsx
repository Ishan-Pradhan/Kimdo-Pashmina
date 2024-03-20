import { useEffect, useState } from "react";
import AdminMenu from "../../components/AdminPage/AdminMenu";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("/api/v1/auth/users");
      const data = res.data;
      setUsers(data);
    };
    getUsers();
  }, []);
  return (
    <>
      <section className="container  flex justify-start items-start gap-10 ">
        <AdminMenu />

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Users</h2>
          <div className="grid grid-cols-3 border-b-2 border-text px-10 py-5 gap-10">
            <span className="font-bold font-head">Name</span>
            <span className="font-bold font-head">Email</span>
            <span className="font-bold font-head">Roles</span>
          </div>
          <div>
            {users.map((user) => {
              return (
                <NavLink
                  key={user._id}
                  to={`/dashboard/admin/users/${user._id}`}
                  className="hover: bg-primaryTint"
                >
                  <div className="grid grid-cols-3 my-6 px-10 py-5 gap-10 border-text items-center justify-center hover:bg-primaryTint hover:rounded-3xl">
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                    <div
                      className={
                        user.role === 1
                          ? "text-secondary font-bold"
                          : "text-text"
                      }
                    >
                      {user.role === 0 ? " User" : "Admin"}
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

export default Users;
