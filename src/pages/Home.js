import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <h1>This is Home Page</h1>
        <p>
          Go to <Link to="/products">The list of products</Link>.
        </p>
      </div>
    </>
  );
};

export default Home;
