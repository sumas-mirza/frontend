import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="discriptionbox-navigator">
        <div className="discriptionbox-nav-box">Discription</div>
        <div className="discriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="discriptionbox-discription">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          officiis dicta nulla et magni eius nam, veniam esse omnis quam, minima
          laborum, ipsam corporis magnam consequuntur quis voluptas perspiciatis
          voluptatem in repellendus earum tempore!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sint
          eligendi autem quo est, id numquam similique dicta omnis, doloremque,
          quaerat quibusdam?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
