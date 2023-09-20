import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  return (
    <div data-testid="card-wrapper" className='card text-center cardarea'>
      <div className='card-header'>{props.header}</div>
      <div className='card-body'>
        <Link to={props.toLink} className='card-title btn'>
          {props.title}
        </Link>
      </div>
    </div>
  );
};

export default Card;
