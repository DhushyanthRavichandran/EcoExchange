import React, { useState } from "react";
import cardData from "../data/cardData";

export const AddPopup = ({ ontouch }) => {
  const [image, setImage] = useState("");
  const [formData, setFormData] = useState({
    image: image,
    itemName: "",
    location: "",
    freeOrBorrowOrWanted: "Free",
    foodOrNoFood: "Food",
    availability: "Available",
    addedBy: "Volunteering",
    description: "",
    quantity: 1,
    pickupInstruction: "",
  });

  function handleImageClick(e) {
    const file = e.target.files[0];
    console.log(file.name);
    setImage(URL.createObjectURL(file));
    setFormData(prevData => ({
      ...prevData,
      image: URL.createObjectURL(file)
    }));
  }

  function handlepopClose() {
    ontouch();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit() {
    const newCardData = {
      ...formData,
      image: image,
    };
    cardData.unshift(newCardData);
    console.log(cardData); // To verify the updated cardData
    ontouch();
  }

  return (
    <div>
      <div className="addpopup-wrapper">
        <button className="close-button" onClick={handlepopClose}>
          x
        </button>
        Add image:{" "}
        <input className="upload" type="file" onChange={handleImageClick} />
        {/* {image && <img src={URL.createObjectURL(image)} />} */}
        Item name:{" "}
        <input
          type="text"
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
        />
        Location:{" "}
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <div className="whole-radio">
          <div className="individual-radio">
            How do you offer:
            <label>
              <input
                type="radio"
                name="freeOrBorrowOrWanted"
                value="Free"
                checked={formData.freeOrBorrowOrWanted === "Free"}
                onChange={handleChange}
              />
              Free
            </label>
            <label>
              <input
                type="radio"
                name="freeOrBorrowOrWanted"
                value="Wanted"
                checked={formData.freeOrBorrowOrWanted === "Wanted"}
                onChange={handleChange}
              />
              Wanted
            </label>
            <label>
              <input
                type="radio"
                name="freeOrBorrowOrWanted"
                value="Borrow"
                checked={formData.freeOrBorrowOrWanted === "Borrow"}
                onChange={handleChange}
              />
              Borrow
            </label>
          </div>
          <div className="individual-radio">
            Is it a food or non-food:
            <label>
              <input
                type="radio"
                name="foodOrNoFood"
                value="Food"
                checked={formData.foodOrNoFood === "Food"}
                onChange={handleChange}
              />
              Food
            </label>
            <label>
              <input
                type="radio"
                name="foodOrNoFood"
                value="Non-Food"
                checked={formData.foodOrNoFood === "Non-Food"}
                onChange={handleChange}
              />
              Non Food
            </label>
          </div>
          <div className="individual-radio">
            Why are you doing this:
            <label>
              <input
                type="radio"
                name="addedBy"
                value="Volunteering"
                checked={formData.addedBy === "Volunteering"}
                onChange={handleChange}
              />
              Volunteering
            </label>
            <label>
              <input
                type="radio"
                name="addedBy"
                value="Personal"
                checked={formData.addedBy === "Personal"}
                onChange={handleChange}
              />
              Excess of food
            </label>
          </div>
        </div>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        Quantity:{" "}
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
        Any pickup instruction:{" "}
        <textarea
          name="pickupInstruction"
          value={formData.pickupInstruction}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};
