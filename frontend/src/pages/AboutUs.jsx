import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Features from "../components/Homepage/Features";
import PageNavigation from "../components/PageNavigation";
import TestimonialSection from "../components/Homepage/testimonialSection";

function AboutUs() {
  return (
    <>
      <Header />
      <PageNavigation title={"About us"} />
      <section className="container px-8 md:px-16 mx-auto">
        <h2
          className="text-2xl md:text-4xl font-bold text-center mb-8"
          data-aos="fade-down"
        >
          Welcome to Kimdo Pashmina
        </h2>
        {/* Hero Section */}
        <div className="flex flex-col gap-10 md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src="images/grpimg.jpg"
              alt="Kimdo Pashmina"
              className="w-full object-cover h-[200px] md:h-[400px]"
              data-aos="fade-right"
            />
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <p className=" leading-6  mb-4">
              Kimdo Pashmina is a family-owned business dedicated to creating
              employment for underprivileged women in Nepal. Established in
              1959, our mission is to uplift lives through the art of textile.
            </p>
            <p className="leading-6   mb-4">
              Kimdo Pashmina is an impressive family business in Kathmandu,
              Nepal.{" "}
              <span className="font-semibold">Daya Bir Sing Kanshakar</span>,
              late father of the current owner{" "}
              <span className="font-semibold">Prakash Kanshakar</span>, founded
              the social enterprise in 1959. The enterprise's goal is to create
              employment for underprivileged women in Nepal. Prakash learned
              from a young age how to be a social entrepreneur.{" "}
            </p>
            <p className=" leading-6">
              In the Fourties his father Daya already was a social worker and
              Nepal's very first blood donor. Daya founded the country's
              earliest social service organization in 1947, Paropakar
              Organisation. Besides an Orphanage, an Orphanage Middle School,
              and a Maternity hospital, Daya set up a workshop where
              underprivileged women produced traditional Nepalese textile.{" "}
            </p>
          </div>
        </div>

        <h3 className="font-semibold font-head text-2xl md:text-4xl mb-4 mt-16">
          Our Management
        </h3>
        {/* <section className="container flex flex-wrap justify-center md:justify-center gap-5 md:gap-10 mt-10 mb-20"> */}
        <section className="md:container grid grid-cols-1 md:grid-cols-3 justify-center items-center md:justify-center gap-5 md:gap-10 mt-10 mb-20">
          {/* Management Team Members */}
          <div
            className="group relative w-full md:w-72 overflow-hidden"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img
              src="images/fakeowner.jpg"
              alt="Fake Prakash Kansakar"
              className=" w-full h-full object-cover "
            />
            <div className="overlay opacity-0 translate-y-16 group-hover:opacity-100 transition duration-500 absolute group-hover:-translate-y-0 top-0 left-0 w-full h-full p-4 flex flex-col justify-center items-start bg-secondary">
              <h2 className="management-name-inner font-head text-secondaryTint text-lg md:text-3xl font-semibold overflow-hidden">
                Padmatara Kansakar
              </h2>
              <h4 className="management-title-inner text-gray-400 text-sm md:text-md font-semibold mb-4">
                Owner
              </h4>
              <p className="management-info text-background text-sm ">
                Padmatara Kansakar, the visionary owner of Kimdo Pashmina, hails
                from a long line of social entrepreneurs. With a passion for
                uplifting underprivileged communities, Padmatara took the reins
                of the family business, continuing the legacy established by her
                predecessors.
              </p>
              <div className="flex gap-4 justify-center items-center mt-4 w-full">
                <a href="#" className="text-white">
                  <i className="fab fa-instagram text-background text-2xl"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-facebook-square text-background text-2xl"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-twitter-square text-background text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="group relative w-full md:w-72 overflow-hidden"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <img
              src="images/fakedesigner.jpg"
              alt="Prakash Kansakar"
              className="people-image w-full h-full object-cover "
            />
            <div className="overlay opacity-0 translate-y-16 group-hover:opacity-100 transition duration-500 absolute group-hover:-translate-y-0 top-0 left-0 w-full h-full p-4 flex flex-col justify-center items-start bg-secondary">
              <h2 className="management-name-inner font-head text-secondaryTint text-lg md:text-3xl font-semibold overflow-hidden">
                Prakash Kansakar
              </h2>
              <h4 className="management-title-inner text-gray-400 text-sm md:text-md font-semibold mb-4">
                Designer
              </h4>
              <p className="management-info text-background text-sm ">
                Prakash Kansakar, the creative force behind Kimdo Pashmina's
                exquisite designs, inherited his father's flair for social
                entrepreneurship. Trained from a young age in the art of
                textile, Prakash infuses traditional Nepalese craftsmanship with
                contemporary aesthetics, captivating global audiences.
              </p>
              <div className="flex gap-4 justify-center items-center mt-4 w-full">
                <a href="#" className="text-white">
                  <i className="fab fa-instagram text-background text-2xl"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-facebook-square text-background text-2xl"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-twitter-square text-background text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="group relative w-full md:w-72 overflow-hidden"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <img
              src="images/fakemanager.jpg"
              alt="Hari Prasad"
              className="people-image w-full h-full object-cover "
            />
            <div className="overlay opacity-0 translate-y-16 group-hover:opacity-100 transition duration-500 absolute group-hover:-translate-y-0 top-0 left-0 w-full h-full p-4 flex flex-col justify-center items-start bg-secondary">
              <h2 className="management-name-inner font-head text-secondaryTint text-lg md:text-3xl font-semibold overflow-hidden">
                Sita Pradhan
              </h2>
              <h4 className="management-title-inner text-gray-400 text-sm md:text-md font-semibold mb-4">
                Manager
              </h4>
              <p className="management-info text-background text-sm ">
                Sita Pradhan, the dedicated manager of Kimdo Pashmina, brings
                extensive experience in organizational leadership. With a keen
                eye for detail and a commitment to empowering women, Sita
                ensures smooth operations and fosters a supportive work
                environment for the talented artisans of Nepal.
              </p>
              <div className="flex gap-4 justify-center items-center mt-4 w-full">
                <a href="#" className="text-white">
                  <i className="fab fa-instagram text-background text-2xl"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-facebook-square text-background text-2xl"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-twitter-square text-background text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Features */}
        <div className="flex flex-col gap-1 md:gap-10">
          <h3 className="font-semibold font-head text-2xl md:text-4xl">
            Our Features
          </h3>
          <Features />
        </div>
      </section>
      <TestimonialSection />
      <Footer />
    </>
  );
}

export default AboutUs;
