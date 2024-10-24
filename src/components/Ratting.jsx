import start from "../assets/star.svg";

const Ratting = ({ value }) => {
  const starts = Array(value).fill(start);
  return (
    <>
      {starts.map((item, index) => (
        <img src={item} key={index} />
      ))}
    </>
  );
};

export default Ratting;
