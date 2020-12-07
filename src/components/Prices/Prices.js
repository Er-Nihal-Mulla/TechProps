import React from "react";

const Prices = () => {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza1.jpg" alt="pizza" />
              </div>
              <h1 className="price__heading">JS</h1>
              <p className="price__text">
              JavaScript was initially created to “make web pages alive”.
              </p>
              <p className="price_rs">$50.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza2.jpg" alt="pizza" />
              </div>
              <h1 className="price__heading">React Js</h1>
              <p className="price__text">
              React is a JavaScript library for building user interfaces.
              </p>
              <p className="price_rs">$25.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza3.jpeg" alt="pizza" />
              </div>
              <h1 className="price__heading">Node Js</h1>
              <p className="price__text">
              Node.js is an open-source and cross-platform JavaScript runtime environment.
              </p>
              <p className="price_rs">$150.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza4.jpg" alt="pizza" />
              </div>
              <h1 className="price__heading">express Js</h1>
              <p className="price__text">
              Fast, unopinionated, minimalist web framework for Node.js.
              </p>
              <p className="price_rs">$22.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza5.png" alt="pizza" />
              </div>
              <h1 className="price__heading">mongodb</h1>
              <p className="price__text">
              MongoDB is a document database designed for ease of development and scaling.
              </p>
              <p className="price_rs">$22.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza6.jpg" alt="pizza" />
              </div>
              <h1 className="price__heading">HTML & CSS3</h1>
              <p className="price__text">
              Learn how to create state-of-the-art websites using modern CSS3 and HTML5 techniques. 
              Take your existing HTML skills to the next level and start building sites like the pros.
              </p>
              <p className="price_rs">$22.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;