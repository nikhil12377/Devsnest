const Card = (props) => {
  return (
    <div className="container">
      <div className="card">
        <h1>{props.name}</h1>
        <h2>you have consumed {props.cal} cals today</h2>
      </div>
    </div>
  );
};

export default Card;
