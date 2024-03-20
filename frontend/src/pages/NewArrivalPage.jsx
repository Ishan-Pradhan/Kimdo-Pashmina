import Footer from "../components/Footer";
import Header from "../components/Header";
import PageNavigation from "../components/PageNavigation";
import { useProductContext } from "../context/productcontext";
import { useState } from "react";
import NewArrival from "../components/Homepage/newArrival";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";

function NewArrivalPage() {
  const { isLoading, newArrivalProducts } = useProductContext();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalItems = newArrivalProducts.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsForCurrentPage = newArrivalProducts.slice(startIndex, endIndex);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <main>
      <Header />
      <PageNavigation title={"New Arrivals"} />

      <div className="container px-16 mx-auto">
        <div className="flex flex-col md:flex-row gap-10 justify-start">
          <section className="flex flex-col container ">
            <div className="flex items-center container">
              {productsForCurrentPage &&
                productsForCurrentPage.map((product) => {
                  return <NewArrival key={product._id} product={product} />;
                })}
            </div>
            <Pagination
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={totalItems}
              onPageChange={handlePageChange}
            />
          </section>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default NewArrivalPage;
