import Link from "next/link";
import { useState } from "react";

export default function PriceHeader(props) {
   
  return (
    <section>
    <div className="container rotat_resid_prox_pric_main_con text-center">
      <div className="container rotat_resid_prox_pric_headline_con text-center">
        <h2>
         
         <span>{props.title}</span> Proxies Pricing
        </h2>
        <h3>
        Maintain optimal performance by switching to fresh IPs after a certain time period without changing your set of proxies.
        </h3>
      </div>
      <div className="live_proxies_plan_table_main_con">
        <div className="live_proxies_plan_table_sub_con2">
          <input
            type="radio"
            className="tab-toggle"
            name="tab-toggle-rotating"
            id="tab1"
            onChange={() => {}}
            checked
          />
          
          <input
            type="radio"
            className="tab-toggle"
            name="tab-toggle-rotating"
            id="tab2"
          />
          <ul className="tab-list">
            <li
              className="tab-item nav-item tab-item active"
              data-filter="rotat_resid_meter_unmeter_one"
            >
              <label className="tab-trigger" htmlFor="tab1">
                <h4>Metered</h4>
              </label>
            </li>
            {!props.onlyMetered&&<li
              className="tab-item nav-item tab-item"
              data-filter="rotat_resid_meter_unmeter_two"
            >
              <label className="tab-trigger" htmlFor="tab2">
                <h4>Unmetered</h4>
              </label>
            </li>}
          </ul>
        </div>
      </div>
    </div>
  </section> 
  );
}
