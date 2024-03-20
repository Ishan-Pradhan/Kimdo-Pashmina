import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-text pt-10 mt-28">
      <div className="container mx-auto px-16 grid grid-cols-1 md:grid-cols-3 md:grid-flow-row justify-center items-start place-items-center gap-10">
        <div className="flex flex-col gap-2 ">
          <span className="text-gray-300 font-semibold text-xl">
            Customer Care
          </span>
          <div className="flex flex-col">
            <NavLink
              to={"/returnandexchange"}
              className="text-background hover:underline"
              onClick={scrollToTop}
            >
              Returns & Exchanges
            </NavLink>
            <NavLink
              to={"/contactus"}
              className="text-background hover:underline"
              onClick={scrollToTop}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <span className="text-gray-300 font-semibold text-xl">
            Kimdo Pashmina
          </span>
          <NavLink
            to={"/AboutUs"}
            className="text-background hover:underline"
            onClick={scrollToTop}
          >
            About Us
          </NavLink>
        </div>

        <div className="flex flex-col gap-2 ">
          <span className="text-gray-300 font-semibold text-xl">
            My Account
          </span>
          <div className="flex flex-col">
            <NavLink
              to={"/cart"}
              className="text-background hover:underline"
              onClick={scrollToTop}
            >
              My Cart
            </NavLink>
          </div>
        </div>
      </div>

      <div className="flex gap-6 justify-center mt-8">
        <i className="fa-brands fa-instagram text-background text-2xl"></i>

        <i className="fa-brands fa-facebook text-background text-2xl"></i>

        <i className="fa-brands fa-whatsapp text-background text-2xl"></i>
      </div>

      <div className="border-t text-center mt-3 py-4 text-gray-300 font-extralight md:mx-44 flex flex-col gap-4 ">
        <div className="brightness-200 flex justify-center">
          <Logo />
        </div>
        Copyright &copy; 2024 Kimdo Pashmina
      </div>
    </footer>
  );
}

export default Footer;
