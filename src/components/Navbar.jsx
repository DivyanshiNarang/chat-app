import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/14024358/pexels-photo-14024358.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="user image"
        />
        <span>Lara</span>
        <button>Logout</button>
      </div>
    </div>
  );
}
