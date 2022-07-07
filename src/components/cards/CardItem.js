import React from "react";
import { Card, CardHeader, CardImg, CardText } from "reactstrap";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <figure className="cards__item__pic-wrap text-center" data-category={props.label}>
          {/* <CardHeader>{props.label}</CardHeader> */}
          <img
            className="cards__item__img"
            alt="Who we are"
            left
            src={props.src}
          />
          <CardText className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </CardText>
        </figure>
      </li>
    </>
  );
}

export default CardItem;
