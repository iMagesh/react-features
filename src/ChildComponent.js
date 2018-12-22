import React from "react";

// export default props => {
//   return (
//     <div>
//       <h2 className={props.className}>{props.name}</h2>
//       <p>{props.age}</p>
//     </div>
//   );
// };

export default ({ className = "", ...props }) => {
  let classNames = ["btn", className].join(" ");

  return (
    <div>
      <h2 className={classNames}>{props.name}</h2>
      <p>{props.age}</p>
    </div>
  );
};
