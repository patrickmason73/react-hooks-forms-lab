import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const[name, setName]=useState("");
  const[categoryType, setCategoryType]=useState("Produce");

  
  function handleSubmit(event) {
      event.preventDefault()
      onItemFormSubmit({
        id: uuid(),
        name: name,
        category: categoryType
      })
  }

  function handleName(event) {
    setName(event.target.value)
  }

  function handleCategory(event) {
    setCategoryType(event.target.value)
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" id="newItemText" onChange={handleName} value={name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory} value={categoryType}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onClick={handleSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
