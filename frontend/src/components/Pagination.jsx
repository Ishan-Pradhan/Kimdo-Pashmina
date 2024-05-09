import { scrollToTop } from "../utils/scrollTop";

/* eslint-disable  */
function Pagination({ currentPage, itemsPerPage, totalItems, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevClick = () => {
    scrollToTop();
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    scrollToTop();
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-end gap-4 items-center mt-20 text-secondary">
      <button
        className="text-secondary flex items-center gap-2 cursor-pointer "
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        <i
          className={`fa-solid fa-chevron-left text-secondary text-md ${
            currentPage === 1 ? "text-secondaryTint" : ""
          }`}
        ></i>
        <span
          className={`text-secondary ${
            currentPage === 1 ? "text-secondaryTint" : ""
          }`}
        >
          Prev
        </span>{" "}
      </button>
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        className="text-secondary flex items-center gap-2 cursor-pointer "
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <span
          className={`text-secondary ${
            currentPage === totalPages ? "text-secondaryTint" : ""
          }`}
        >
          Next
        </span>{" "}
        <i
          className={`fa-solid fa-chevron-right text-secondary text-md ${
            currentPage === totalPages ? "text-secondaryTint" : ""
          }`}
        ></i>
      </button>
    </div>
  );
}

export default Pagination;
