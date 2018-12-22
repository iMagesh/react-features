import React from "react";

// destructuring example for object and array
// let person = { name: "Magesh", bio: "coder and mentor", company: "Hash14" };
// let { name, bio, company } = person;

//array
// let things = ["one", "two"];
// let [first, second] = things;

export default props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
    </div>
  );
};

// export default ({ name, age }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{age}</p>
//     </div>
//   );
// };

// export default ({ name, ...rest }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{rest.age}</p>
//     </div>
//   );
// };
