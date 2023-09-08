import Card from "./Card";

const Specials = ({ data }) => {
  return (
    <section id="special" className="container mb-3">
      <h2>This Week's Specials!</h2>
      <div className="special-body">
        {data.map((element, index) => {
          return <Card key={index} data={element} />;
        })}
      </div>
    </section>
  );
};

export default Specials;
