import React from 'react'
import Link from 'gatsby-plugin-transition-link'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import TransitionLink from 'gatsby-plugin-transition-link'


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
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
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <AniLink className="navbar-item" paintDrip hex="#ff4400" to="/" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </AniLink>

            {/* Hamburger menu */}
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
              <AniLink className="navbar-item" paintDrip hex="#ff4400" to="/test">
                Test
              </AniLink>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
