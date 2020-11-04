import React from "react";
import { Link } from "gatsby";

import instagram from "../../img/social/instagram.svg"

import facebook from "../../img/social/facebook.svg";
import '../../components/Navbar/navbar.scss'
// import "../styles/index-page.scss"

import { SocialLink } from "../../components/SocialLink";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
              <span>Temple Café</span>
            </Link>
            {/* Hamburger menu  */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/product">
              Catering
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <SocialLink
                href="https://www.instagram.com/temple_cafe_chalkwell/"
                src={instagram}
                alt="Instagram"
                className="inverse"
                style={{ width: "1.5em", height: "1.5em" }}
              />
              <SocialLink
                href="https://www.facebook.com/templecafechalkwellpark/"
                src={facebook}
                alt="Facebook"
                className="inverse"
                style={{ width: "1.5em", height: "1.5em" }}
              />
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
