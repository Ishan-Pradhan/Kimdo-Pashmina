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
        <div className="flex flex-col gap-10">
          <img
            src="images/grpimg.jpg"
            alt=""
            className="w-full object-cover h-[500px]"
          />
          <div>
            <h3 className="font-semibold text-4xl mb-4">Our Story</h3>
            <p className="leading-6 text-lg mb-4">
              Kimdo Pashmina is an impressive family business in Kathmandu,
              Nepal.{" "}
              <span className="font-semibold">Daya Bir Sing Kanshakar</span>,
              late father of currect owner{" "}
              <span className="font-semibold">Prakash Kanshakar</span>, founded
              the social enterprise in 1959. The enterprise's goal is to create
              employment for underpriviliged women in Nepal.Prakash learned from
              a young age how to be a social entrepreneur. In the Fourties his
              father Daya already was social worker and Nepal's very first blood
              donor. Daya founded the country's earliest social service
              organisation in 1947, Paropakar Organisation. Besides an
              Orphanage, an Orphanage Middle School, and a Maternity hospital,
              Daya set up a workshop where underpriviliged women produced
              traditional Nepalese textile.
            </p>
            <p className="leading-6 text-lg mb-4">
              Kimdo Pashmina still is based on this original idea. Kimdo
              Pashmina provides work to thirty artisans, almost all women.
              Before the big earthquakes in 2015 there was work for around one
              hundred weavers. Because of the natural disaster domestic sales
              dropped dramatically, causing a huge drop in demand. Prakash is
              working hard to find new buyers so that he will be able to provide
              work for more women again. Although the workshop of Kimdo Pashmina
              is located in Kathmandu, most of the artisans are coming from
              Janakpur (Southeast Nepal) and Sindhupalchowk (Central Nepal).
            </p>
            <p className="leading-6 text-lg mb-4">
              They already had extensive weaving skills before joining the
              organisation. However Kimdo Pashmina also provides additional
              training, especially in how to use the Jacquard loom. The Jacquard
              mechanism, invented by Frenchman Joseph Marie Jacquard and first
              demonstrated in 1801, simplified the way in which complex textiles
              were woven. The mechanism involves the use of countless punch
              cards laced together. Each row of punched holes corresponded to a
              row of a textile pattern. Using this technique Prakash and his
              team create beautiful Paisley stoles. Made from 100% cashmere or a
              blend of cashmere and silk. Prakash and his wife make all designs
              and colour combinations themselves. Kimdo Pashmina works with
              Fairtrade organisation Sana Hastakala. The artisans receive a fair
              income for their textile and work in a nice and safe environment.
            </p>
          </div>
          <h3 className="font-semibold text-4xl mb-4">Our Features</h3>
          <Features />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;
