import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-20">
        <h1 className="text-5xl font-semibold tracking-wider animate__animated animate__bounce text-info">
          Thanks For Purchasing
        </h1>
        <Link to="/">
          <button className="bg-danger text-primary px-10 py-2 shadow-xl rounded my-5 animate__animated animate__bounce uppercase">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
