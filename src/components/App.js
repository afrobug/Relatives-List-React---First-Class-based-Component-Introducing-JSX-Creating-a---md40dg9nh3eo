import React, {Component, useState} from "react";
import '../styles/App.css';

class DiwaliShoppingList extends Component {
  render() {
    const relatives = ["Amit", "Rita", "Rahul", "Kavya"];

    return (
      <div>
        <h2>Relatives to Visit</h2>
        <ol key="relativeList">
          {relatives.map((relative, index) => (
            <li key={`relativeListItem${index + 1}`}>{relative}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default DiwaliShoppingList;
