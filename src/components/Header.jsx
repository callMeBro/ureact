import React from "react";
import './Header.css'
import healthAndBeautyImg from "../assets/healthandbeauty.jpg";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  return (
    <header>
      <img src={healthAndBeautyImg} alt="Health and Beauty" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

// import healthAndBeautyImg from "../assets/healthandbeauty.jpg";

// // Fallback list in case CORE_CONCEPTS is not used
// const reactDescriptions = ["Fundamental", "Crucial", "Core"];

// // Utility function to generate a random integer up to max (inclusive)
// function genRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }

// // Header component
// export default function Header() {
//   return (
//     <header>
//       <img src={healthAndBeautyImg} alt="Health and Beauty" />
//       <h1>React Essentials</h1>
//       <p>
//         {reactDescriptions[genRandomInt(2)]} React concepts you will need for
//         almost any app you are going to build!
//       </p>
//     </header>
//   );
// }
