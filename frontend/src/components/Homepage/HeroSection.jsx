import { useReducer } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const images = ["images/hero4.jpg", "images/hero2.jpg"];

const initialState = {
  currentImage: 0,
  contentType: "women",
};

function reducer(state, action) {
  switch (action.type) {
    case "IncreaseImage":
      return {
        ...state,
        currentImage: (state.currentImage + 1) % images.length,
        contentType: state.contentType === "women" ? "men" : "women",
      };

    default:
      return state;
  }
}

function HeroSection() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <section id="hero" className="relative w-full">
      <div
        className={`h-[85vh] p-10 md:h-[86vh] bg-cover ${
          state.contentType === "women" ? "bg-right" : "bg:left"
        }  md:bg-top  flex flex-col justify-center items-start md:p-20 gap-5 mx-auto `}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),url(${
            images[state.currentImage]
          })`,
        }}
      >
        <div
          className={`container relative flex flex-col justify-between items-start gap-6 mx-auto  `}
        >
          <div
            className={`flex flex-col justify-start items-start md: ${
              state.contentType === "women" ? "items-start" : "items-end"
            }
           gap-4 w-full`}
          >
            <div className="md:w-1/2" data-aos="fade-up">
              <h1
                className="font-head text-6xl md:text-7xl font-semibold text-background my-5 "
                data-aos="fade-up"
              >
                {state.contentType === "women"
                  ? `Elevate Your
                  Fashion with
                  Kimdo Pashmina`
                  : "Upgrade Your Style with Kimdo's Unique Collection"}
              </h1>
              <Link
                to={`${
                  state.contentType === "women"
                    ? "/WomenProduct"
                    : "/MenProduct"
                }`}
              >
                <Button>
                  SHOP FOR {state.contentType === "women" ? "HER" : "HIM"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-6 right-12   group"
        onClick={() => dispatch({ type: "IncreaseImage" })}
      >
        <i className="fa-solid fa-arrow-right text-background text-3xl border h-14 w-14 flex justify-center  items-center rounded-full group-hover:bg-primary"></i>
      </button>
    </section>
  );
}

export default HeroSection;
