import { useNavigate, useParams } from "react-router-dom";
import AdminMenu from "../../components/AdminPage/AdminMenu";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function UpdateUsers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(0);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/auth/users/${id}`
        );

        if (response.data) {
          const userData = response.data;
          setName(userData.name);
          setEmail(userData.email);
          setRole(userData.role);
        } else {
          throw new Error(response.data.message);
        }
      } catch (error) {
        toast.error(error.message);
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { role };

      const response = await axios.put(
        `http://localhost:8000/api/v1/auth/users/${id}`,
        data
      );
      console.log(response.data);
      if (response.data) {
        toast.success("Users updated sucessfully");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      let answer = window.prompt("Are you sure you want to delete this user?");
      if (!answer) return;

      const adminname = "admin";

      if (name === adminname) {
        toast.error("You can't delete this admin");
        return;
      }

      const { data } = await axios.delete(
        `http://localhost:8000/api/v1/auth/users/${id}`
      );
      if (data.success) {
        toast.success("User deleted successfully");
        console.log("Navigating");
        navigate("/dashboard/admin/users");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error("Error Deleting the user");
    }
  };

  return (
    <>
      <section className="container  flex justify-start items-start gap-10 mb-10">
        <AdminMenu />
        <div className="flex flex-col mt-10 border p-10 py-5">
          <h3 className="font-bold text-2xl text-center mb-5">Update User</h3>
          <form className="grid grid-cols-2 gap-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              className="border-2 rounded px-2"
              disabled
            />
            <label htmlFor="name">Email</label>
            <input
              type="text"
              value={email}
              className="border-2 rounded px-2"
              disabled
            />

            <label htmlFor="featured">Set as Admin</label>
            <select
              name=""
              className="rounded px-2"
              id="featured"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            <div className="mt-2">
              <button
                className="bg-primary hover:bg-primaryShadow text-background rounded px-5 py-1"
                onClick={handleSubmit}
              >
                Update
              </button>
            </div>
            <div className="mt-2">
              <button
                className="bg-red-500 hover:bg-red-700 text-background rounded  px-5 py-1"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default UpdateUsers;
