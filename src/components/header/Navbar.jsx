import React, { useState } from "react";
import "./navbar.css";
import { AddPopup } from "./AddPopup";
export const Navbar = ({search}) => {


  const [add,setAdd]=useState(false);
  function handleCloseClick(){
    setAdd(!add)
  }

 function handleChange(e) {
    search(e.target.value);
    
  }
  return (
    <div>
    <div class="search-bar">
      <input
        onChange={handleChange}
        type="text"
        placeholder="search "
       
      />
      <button>
        <span class="material-symbols-outlined">location_on</span>
      </button>
      <button>
        <span class="material-symbols-outlined">chat_bubble</span>
      </button>
      <button onClick={handleCloseClick}>
        <span class="material-symbols-outlined">add</span>
      </button>
      <button>
        <span class="material-symbols-outlined">account_circle</span>
      </button>
      <select className="custom-select">
        <option>
          Goals <i className="fas fa-caret-down"></i>
        </option>
        <option>Community</option>
        <option>About Us</option>
      </select>
     
    </div>
       {add && <AddPopup ontouch={handleCloseClick}/> } 
    </div>
  );
};
