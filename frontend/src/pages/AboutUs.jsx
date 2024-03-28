import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Features from "../components/Homepage/Features";
import PageNavigation from "../components/PageNavigation";

function AboutUs() {
  return (
    <>
      <Header />
      <PageNavigation title={"About us"} />
      <section className="container px-16 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col gap-10 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <img
              src="images/grpimg.jpg"
              alt="Kimdo Pashmina"
              className="w-full object-contain h-[500px] md:h-[600px]"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-4xl font-bold mb-4">
              Welcome to Kimdo Pashmina
            </h2>
            <p className="text-lg leading-6 mb-4">
              Kimdo Pashmina is a family-owned business dedicated to creating
              employment for underprivileged women in Nepal. Established in
              1959, our mission is to uplift lives through the art of textile.
            </p>
            <p className="leading-6 text-lg mb-4">
              Kimdo Pashmina is an impressive family business in Kathmandu,
              Nepal.{" "}
              <span className="font-semibold">Daya Bir Sing Kanshakar</span>,
              late father of the current owner{" "}
              <span className="font-semibold">Prakash Kanshakar</span>, founded
              the social enterprise in 1959. The enterprise's goal is to create
              employment for underprivileged women in Nepal. Prakash learned
              from a young age how to be a social entrepreneur.{" "}
            </p>
            <p>
              In the Fourties his father Daya already was a social worker and
              Nepal's very first blood donor. Daya founded the country's
              earliest social service organization in 1947, Paropakar
              Organisation. Besides an Orphanage, an Orphanage Middle School,
              and a Maternity hospital, Daya set up a workshop where
              underprivileged women produced traditional Nepalese textile.{" "}
            </p>
          </div>
        </div>

        {/* Our Features */}
        <div className="flex flex-col gap-10">
          <h3 className="font-semibold text-4xl mb-4">Our Features</h3>
          <Features />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;
