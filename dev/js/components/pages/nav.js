import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const page1cls = location.pathname === "/" ? "active" : "";
    const page2cls = location.pathname.match(/^\/Page2/) ? "active" : "";
    const page3cls = location.pathname.match(/^\/Page3/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={page1cls}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Page1</IndexLink>
              </li>
              <li className={page2cls}>
                <Link to="Page2" onClick={this.toggleCollapse.bind(this)}>Page2</Link>
              </li>
              <li className={page3cls}>
                <Link to="Page3" onClick={this.toggleCollapse.bind(this)}>Page3</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}