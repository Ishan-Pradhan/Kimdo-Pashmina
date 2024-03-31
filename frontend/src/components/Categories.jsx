import { Link } from "react-router-dom";
import CategoriesBtn from "./CategoriesBtn";
/* eslint-disable react/prop-types */
function Categories({ children, images }) {
  return (
    <div
      className="w-full h-[250px] rounded flex justify-end items-end px-10 py-5 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.25)),url(${images})`,
      }}
    >
      <Link to="/MenProduct" className="w-full">
        <CategoriesBtn>{children}</CategoriesBtn>
      </Link>
    </div>
  );
}

export default Categories;
