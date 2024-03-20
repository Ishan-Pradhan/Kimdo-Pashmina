import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageNavigation from "../components/PageNavigation";
import { useAuthContext } from "../context/authcontext";
import axios from "axios";
import { toast } from "react-toastify";

const ContactUsPage = () => {
  const [auth, setAuth] = useAuthContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (auth?.user) {
      const { email, name } = auth.user;
      setName(name);
      setEmail(email);
    }
  }, [auth?.user]);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/contact", { name, email, message });
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        throw new Error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (!auth.user) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center h-lvh font-head font-semibold drop-shadow-2xl">
          Please login to contact us
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <PageNavigation title="Contact Us" />
      <div className="relative h-80">
        <iframe
          className="w-full h-full rounded-lg"
          title="Kimdo Pashmina"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4813252737495!2d85.29614537418263!3d27.702421425711048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194731e91ebb%3A0x6b370ce68a5bd649!2sKimdo%20Pashmina!5e0!3m2!1sen!2snp!4v1705893016045!5m2!1sen!2snp"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
      <section className="my-10 flex flex-col md:flex-row container mx-auto justify-center  md:border shadow-xl gap-10 md:gap-10 bg-transparent">
        <div className=" p-6 w-full ">
          <div>
            <h2 className="text-4xl font-semibold mb-8 text-center">
              Contact Us
            </h2>

            <div className="mb-8">
              <p className=" text-center">
                We&lsquo;d love to hear from you! Feel free to reach out to us
                with any questions, concerns, or feedback.
              </p>
            </div>

            <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block  text-sm font-bold mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-primary-300"
                  type="text"
                  value={name}
                  onChange={handleName}
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-primary-300"
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  id="email"
                  name="email"
                  placeholder="Email Address"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-primary-300"
                  id="message"
                  value={message}
                  onChange={handleMessage}
                  name="message"
                  rows="4"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                className="bg-primary text-white py-2 px-4  hover:bg-primaryShadow transition"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col justify-center  gap-10 bg-primary md:bg-text p-20 md:px-20 ">
          <div className="flex flex-col">
            <span className="text-xl font-semibold font-head text-background">
              Call us
            </span>
            <span className="text-lg font-thin text-background">
              01-4286149
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold font-head text-background">
              Email at
            </span>
            <span className="text-lg font-thin text-background">
              kimdo@pashmina.com
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold font-head text-background">
              Located at
            </span>
            <span className="text-lg font-thin text-background">
              Tahachal, Kathmandu
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUsPage;
