import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 relative">
            <img
              src={person}
              className="max-w-[460px] max-h-[473px] rounded-lg shadow-2xl"
            />
            <img
              src={parts}
              className="max-w-[327px] max-h-[332px] absolute right-6 top-1/2 rounded-lg  border-8 border-white shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 mt-16 space-y-5">
            <h3 className="text-3xl text-orange-600 font-semibold">About Us</h3>
            <h1 className="text-5xl font-bold w-4/5">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable.
            </p>
            <p className="py-2">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which do not look even slightly
              believable.
            </p>
            <button className="btn btn-error text-white">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
