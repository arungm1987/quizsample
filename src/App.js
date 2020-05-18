import React, { useState } from "react";
import "./styles.css";
import data from "./config";
console.log("data", data);
export default function App() {
  const [checkedValue, setChecked] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = value => {
    console.log(value);
    if (value === checkedValue) {
      setChecked(null);
    } else {
      setChecked(value);
    }
  };
  const handleBtnClick = value => {
    console.log(value);
    if (value === "submit" || value === "showAns") {
      alert(currData.correctAns);
    } else {
      if (value === "previous") {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        } else {
          setCurrentPage(1);
        }
      } else if (value === "next") {
        if (currentPage < data.length) {
          setCurrentPage(currentPage + 1);
        } else {
          setCurrentPage(currentPage);
        }
      }
    }
    // if (value === checkedValue) {
    //   setChecked(null);
    // } else {
    //   setChecked(value);
    // }
  };
  const currData = data[currentPage - 1];
  const currOptions = currData.options.map((data, index) => {
    //return <div key={index}>{data}</div>;
    return (
      <div className="radio" key={data}>
        <label>
          <input
            type="radio"
            value={data}
            name="ans"
            checked={checkedValue === data}
            onClick={() => handleChange(data)}
          />
          {data}
        </label>
      </div>
    );
  });

  return (
    <div className="App">
      <div className="question">
        <div className="qname">
          <p>
            <span className="numb">{currData.number}.</span>
            {currData.question}
          </p>
        </div>
        <div className="radio-buttons">{currOptions}</div>
      </div>
      <div
        className="buttons"
        onClick={e => {
          handleBtnClick(e.target.name);
        }}
      >
        <button name="previous">previous</button>
        <button name="submit">submit</button>
        <button name="next">next</button>
        <button name="showAns">show answer</button>
      </div>
    </div>
  );
}
