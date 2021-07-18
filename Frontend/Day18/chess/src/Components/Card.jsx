import "./Style.css";
const Card = ({ num }) => {
  if (
    (num >= 0 && num < 8) ||
    (num >= 16 && num < 24) ||
    (num >= 32 && num < 40) ||
    (num >= 48 && num < 56)
  ) {
    if (num % 2 === 0) {
      return <div className="card2"></div>;
    }
  } else if (num % 2 !== 0) {
    return <div className="card2"></div>;
  }
  return <div className="card"></div>;
};

export default Card;
