import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Header from "../";

describe(`Integration tests for Header component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <Header />
      </Router>,
      div
    );
  });

  test("show BurgerMenu icon when screen width is lower than 768px", () => {
    window.innerWidth = 767;
    const wrapper = shallow(<Header />);
    const icon = <i className="fas fa-bars" />;
    expect(window.innerWidth).toEqual(767);
    expect(wrapper.contains(icon)).toBe(true);
  });

  test("BurgerMenu icon should not be displayed when screen width is higher than 767px", () => {
    window.innerWidth = 768;
    const wrapper = shallow(<Header />);
    const icon = <i className="fas fa-bars" />;
    expect(window.innerWidth).toEqual(768);
    expect(wrapper.contains(icon)).toBe(false);
  });

  test("Nav items should not be shown when screen width is smaller than 768px", () => {
    window.innerWidth = 767;
    const wrapper = shallow(<Header />);
    const icon = <li key="home" />;
    expect(window.innerWidth).toEqual(767);
    expect(wrapper.contains(icon)).toBe(false);
  });

  test("Nav items displayed when screen width is higher than 767px", () => {
    window.innerWidth = 768;
    const wrapper = shallow(<Header />);
    const icon = <a>HOME</a>;
    expect(window.innerWidth).toEqual(768);
    expect(wrapper.contains(icon)).toBe(true);
  });
});
