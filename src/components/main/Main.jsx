import { data } from "../../helpers/data";
import Card from "./Card";
import "./Main.scss";
const Main = () => {
  console.log(data);
  return (
    <div className="card-container">
      {data.map((card) => (
        // <Card card={card}/>
        <Card {...card} key={card.id} />
      ))}
    </div>
  );
};
export default Main;
