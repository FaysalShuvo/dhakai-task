import "./DashboardCard.css";

import React from "react";

const DashboardCard = ({ lists }) => {
  console.log("data", lists);
  lists.map((item) => {
    console.log(item.meta);
  });
  return (
    <>
      {lists &&
        lists.map((list) => (
          <div key={list.uid} className="col-md-3 my-2">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card  cap" />
              <div className="card-body">
                <h5 className="card-title">{list.meta.companyName}</h5>
                <p className="card-text">Some quick example text</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default DashboardCard;
