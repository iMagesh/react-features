import React from "react";

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
