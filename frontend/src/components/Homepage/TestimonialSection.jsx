import { useContactContext } from "../../context/contactcontext";
import Testimonial from "../Testimonial";

function TestimonialSection() {
  const { featuredContacts } = useContactContext();
  if (featuredContacts.length === 0) {
    return;
  }
  return (
    <section className="my-20" data-aos="fade-down">
      <div className="container mx-auto px-16">
        <span className="font-head text-3xl font-semibold text-center">
          Testimonials
        </span>
        <div className="flex justify-center gap-14  md:gap-4 my-10 flex-wrap md:justify-between items-center">
          {featuredContacts.map((message) => {
            return <Testimonial key={message._id} message={message} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
