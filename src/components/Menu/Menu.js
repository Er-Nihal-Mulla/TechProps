import React from "react";

const Menu = () => {
  return (
    <div id="menu" className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="/img/unity.png" alt="Pizza" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>Our Awesome Team</h3>
            <h1>India's V-Tech Company</h1>
            <p>
              Mr. Nihal Mulla
            </p><br></br>
             <p>
              Mr. Sachin Rana
            </p>
            <div className="about__btn">
              <a href="/" className="btn btn-smart1">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
