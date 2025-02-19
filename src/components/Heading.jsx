import Tagline from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} md:text-center max-w-[50rem] mx-auto mb-12 lg:mb-20`}
    >
      {tag && (
        <Tagline className="mb-4 justify-center items-center">{tag}</Tagline>
      )}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
