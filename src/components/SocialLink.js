import React from "react";
import instagram from '../img/social/instagram.svg'

export const SocialLink = (props) => {
  return (
    <a
      className={`navbar-item ${props.className}`}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="icon">
        <img src={props.src} alt={props.alt} {...props} />
      </span>
    </a>
  );
};
