import { useEffect, useState } from "react";
import { useContactContext } from "../../context/contactcontext";
import { useParams } from "react-router-dom";
import AdminMenu from "../../components/AdminPage/AdminMenu";

import axios from "axios";
import { toast } from "react-toastify";

function SingleFeedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);

  const API = "http://localhost:8000/api/v1/contact";
  const { getSingleContact, singleContact } = useContactContext();
  const { id } = useParams();
  useEffect(() => {
    getSingleContact(`${API}/${id}`);
  }, []);

  useEffect(() => {
    if (singleContact) {
      setName(singleContact.name);
      setEmail(singleContact.email);
      setMessage(singleContact.message);
      setIsFeatured(singleContact.isFeatured);
    }
  }, [singleContact]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { isFeatured };
      const response = await axios.put(`/api/v1/contact/${id}`, data);
      console.log(response);
      if (response.data.success) {
        toast.success("Feedback updated sucessfully");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      let answer = window.prompt(
        "Are you sure you want to delete this contact?"
      );
      if (!answer) return;
      const { data } = await axios.delete(`/api/v1/contact/${id}`);
      toast.success("product deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("error deleting");
    }
  };
  return (
    <>
      <section className="container  flex justify-start items-start gap-10 ">
        <AdminMenu />
        <div className="flex flex-col mb-10 mt-10 w-3/5">
          <form className="grid grid-cols-2 gap-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              className="border-2  px-2"
              disabled
            />
            <label htmlFor="name">Email</label>
            <input
              type="text"
              value={email}
              className="border-2  px-2"
              disabled
            />
            <label htmlFor="name">Message</label>
            <textarea
              type="text"
              rows="6"
              value={message}
              className="border-2  px-2"
              disabled
            ></textarea>
            <label htmlFor="featured">Set as Featured</label>
            <select
              name=""
              className="bg-background border-2 px-2"
              id="featured"
              value={isFeatured}
              onChange={(e) => setIsFeatured(e.target.value)}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <div></div>
            <div className="flex justify-between items-center">
              <div>
                <button
                  className="bg-red-300  text-red-700 px-4 py-1"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
              <div>
                <button
                  className="bg-primary text-background px-4 py-1"
                  onClick={handleSubmit}
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default SingleFeedback;
