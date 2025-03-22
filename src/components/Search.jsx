import React from "react";

export default function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/14024358/pexels-photo-14024358.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Lara</span>
        </div>
      </div>
    </div>
  );
}
