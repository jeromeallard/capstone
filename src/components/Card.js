import "./Card.css";

const lorem = "Lorem ipsum dolor sit amet, consectetur.";

const Card = ({ data }) => {
  return (
    <>
      <div className="card">
        <div className="imgBx" style={{ background: `url(${data.image}) no-repeat center / cover` }}></div>
        <div className="content">
        <div className="pd white">
            <h5>{data.name}</h5>
            <p>{data.description ? data.description : lorem}</p>
            <span className="price">
            <span>{`${data.price}`}</span>
          </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
