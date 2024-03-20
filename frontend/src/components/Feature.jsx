/* eslint-disable react/prop-types */
function Feature({ images, title, featureContent, dataAos }) {
  return (
    <div
      className="flex flex-col justify-center items-center gap-3"
      data-aos={dataAos}
    >
      <img src={`${images}`} alt="" />
      <div className="text-center">
        <span className="text-xl font-bold font-head">{title}</span>
        <p className="text-md">{featureContent}</p>
      </div>
    </div>
  );
}

export default Feature;
