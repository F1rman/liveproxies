import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PlansMobileCardTab(props) {
  const [tab, setTab] = useState(false);
  return (
    <div className="nav">
        <div className={tab?"nav_item active":"nav_item"}>
          <div className="nav_header" onClick={()=>{
            setTab(!tab)
          }}>
            {props.title} <div className="nav_arrow"></div>
          </div>
          <div className="nav_body">{props.children}</div>
        </div>
        
      </div>
  );
}
