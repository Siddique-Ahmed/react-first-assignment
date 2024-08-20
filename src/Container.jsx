import React from "react";
import "./App.css";

const Container = () => {
  const studentData = [
    {
      name: "Siddique",
      class: "WEB AND APP",
      rollNum: 189709,
      fatherName: "Kaleem Aqil",
    },
    {
      name: "Samar Raza",
      class: "WEB AND APP",
      rollNum: 189223,
      fatherName: "Muhammad Naveed",
    },
    {
      name: "Talha",
      class: "WEB AND APP",
      rollNum: 118823,
      fatherName: "Muhammad Arif",
    },
    {
      name: "Shehriyar",
      class: "WEB AND APP",
      rollNum: 384952,
      fatherName: "Naseer Ahmed",
    },
    {
      name: "Shahab ",
      class: "WEB AND APP",
      rollNum: 284934,
      fatherName: "Muhammad Nisar",
    },
    {
      name: "Kaleem Aqil",
      class: "WEB AND APP",
      rollNum: 239182,
      fatherName: "Abdul Rehman",
    },
    {
      name: "Arsalan",
      class: "WEB AND APP",
      rollNum: 234443,
      fatherName: "Abdul RAzzaq",
    },
  ];

  return (
    <div className="container">
      <div className="header">
        <h1>Student Data</h1>
      </div>
      <div className="items_container">
        {studentData.map((data, ind) => {
         return <div key={ind} className="items">
            <h4>
              Name: <span>{data.name}</span>
            </h4>
            <h4>
              Father Name: <span>{data.fatherName}</span>
            </h4>
            <h4>
              Roll No: <span>{data.rollNum}</span>
            </h4>
            <h4>
              Class: <span>{data.class}</span>
            </h4>
          </div>
        })}
      </div>
    </div>
  );
};

export default Container;
