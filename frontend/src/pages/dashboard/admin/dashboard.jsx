import React from "react";
import { IoAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const dashboard = () => {
  return (
    <div className="section-container relative  bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% ">
      <div className="flex flex-col w-full lg:flex-row">
      <Link to='/dashboard/createHacker'>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-center justify-center mt-20">Create Hacker</h2>
                  
                </div>
              </div>
              </Link>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
      </div>
    </div>
  );
};

export default dashboard;
