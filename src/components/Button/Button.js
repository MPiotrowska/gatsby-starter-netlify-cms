import React from "react";
import { Link } from 'gatsby'
import "../Button/Button.scss"


export const Button = (props) => {
  return (
    <div className={'columns'}>
      <div className={'column is-12 has-text-centered buttonOverwrite'}>
        <Link className={'btn buttonOverwrite'} to={props.href} >
          {props.text}
        </Link>
      </div>
    </div>
  );
};
