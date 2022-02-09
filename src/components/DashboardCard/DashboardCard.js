import "./DashboardCard.css";

import React from "react";

const DashboardCard = ({ lists }) => {
  // eslint-disable-next-line array-callback-return
  lists.map((list) => {
    console.log(list.meta.companyShortDesc);
  });

  // for logo = list.meta.logo.url
  return (
    <>
      {lists &&
        lists.map((list) => (
          <div key={list.uid} className="col-md-3 my-2">
            <div className="card ">
              <div className="d-flex justify-content-between top-img">
                {list.meta.banners.map((img) => (
                  <img
                    className="img p-1"
                    key={img.url}
                    src={img.url}
                    alt="banner img"
                  />
                ))}
              </div>
              <img
                className="banner-img"
                src={list.meta.logo.url}
                alt="banner img"
              />
              <div className="card-body">
                <h5 className="card-title mt-3">{list.meta.companyName}</h5>
                <p className="card-text">
                  <span>{list.addresses[0].city},</span>
                  <span className="mx-1">{list.addresses[0].country}</span>
                  <span className="mx-1">.</span>
                  <span style={{ color: "#4eb098" }}>
                    Min Qty: {list.minOrderQty}
                  </span>
                </p>
                <p className="my-2 text-secondary">
                  {list.meta.companyShortDesc.slice(10)}...
                </p>
                <button className="details">View Details</button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default DashboardCard;
