import { ReactElement } from "react";

function Line({children}:{children:ReactElement}) {
    return (
      <>
      <li className="list-group-item"
      style={{backgroundColor: "lightseagreen"}}>
        {children}
      </li>
      </>
    );
  }

export default Line;
