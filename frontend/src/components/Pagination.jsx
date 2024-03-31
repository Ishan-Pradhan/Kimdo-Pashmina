import { scrollToTop } from "../utils/scrollTop";

/* eslint-disable  */
function Pagination({ currentPage, itemsPerPage, totalItems, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      scrollToTop();
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      scrollToTop();
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
        <i className="fa-solid fa-chevron-left text-secondary text-md"></i>
        <span className="text-secondary ">Prev</span>{" "}
      </button>
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        className="text-secondary flex items-center gap-2 cursor-pointer "
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <span className="text-secondary ">Next</span>{" "}
        <i className="fa-solid fa-chevron-right text-secondary text-md "></i>
      </button>
    </div>
  );
}

export default Pagination;
