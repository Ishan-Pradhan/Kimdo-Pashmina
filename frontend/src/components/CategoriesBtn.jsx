/* eslint-disable react/prop-types */
function CategoriesBtn({ children }) {
  return (
    <button className="sm:text-sm w-full flex justify-between items-center p-4 bg-background rounded-3xl font-semibold shadow-md group">
      {children}
      <i className="fa-solid fa-arrow-right-long group-hover:translate-x-1 transition duration-100 hover:ease-in-out"></i>
    </button>
  );
}

export default CategoriesBtn;
