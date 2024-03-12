import React from "react";

const FunComp = ({person}) => {
    // const {firstName,lastName,age,eyeColor}=props.person;
  return (
    <>

      {/* <h1>FirstName is {props.person.firstName}</h1>
      <h1>LastName is {props.person.lastName}</h1> */}
      {/* <h2>First Name {firstName}</h2>
      <h2>Last Name {lastName}</h2>
      <h2>Age {age}</h2>
      <h2>EyeColor {eyeColor}</h2> */}

      <h3>FN {person.firstName}</h3>
      <h3>LN {person.lastName}</h3>
      <h3>Age {person.age}</h3>
      <h3>EC {person.eyeColor}</h3>
      
    </>

  );
};

export default FunComp;
