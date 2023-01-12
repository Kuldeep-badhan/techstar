import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <div className="main">
          <h1>TechStar.</h1>
          <p>Solution to all your problems</p>
        </div>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            sunt eos atque quia molestias esse eum animi aut velit asperiores.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, at
            laborum explicabo reiciendis tempore totam molestiae qui repudiandae
            ab saepe, repellendus aspernatur minus id. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Recusandae eligendi alias dolorum
            error dicta quisquam dignissimos dolore, rem sed laudantium.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
                animationDelay:"0.3s"
            }}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>
            <div style={{
                animationDelay:"0.5s"
            }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>
            <div style={{
                animationDelay:"0.7s"
            }}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>
            <div style={{
                animationDelay:"0.9s"
            }}>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
