import Link from "next/link";
import { useState } from "react";

export default function PriceHeader(props) {
  return (
    <section>
      <div className="container rotat_resid_prox_pric_main_con text-center">
        <div className="container rotat_resid_prox_pric_headline_con text-center">
          <h2>
            <span>{props.title}</span> Proxies Pricing{" "}
          </h2>
          <h3>
            Maintain optimal performance by switching to fresh IPs after a
            certain time period without changing your set of proxies.
          </h3>
        </div>
        <div className="live_proxies_plan_table_main_con">
          <div className="live_proxies_plan_table_sub_con2">
            <ul className={props.metered ? "tab-list " : "tab-list " + (!props.onlyMetered&&' active')}>
              <li
                className={props.metered?"tab-item nav-item tab-item active":"tab-item nav-item tab-item " + (props.onlyMetered&&' active')}
                data-filter="rotat_resid_meter_unmeter_one"
              >
                <label
                  className="tab-trigger"
                  onClick={() => {
                    !props.onlyMetered&& props.setToggle(true);
                  }}
                >
                  <h4>Metered{props.metered}</h4>
                </label>
              </li>
              {!props.onlyMetered && (
                <li
                className={props.metered?"tab-item nav-item tab-item ":"tab-item nav-item tab-item active"}
                  data-filter="rotat_resid_meter_unmeter_two"
                >
                  <label className="tab-trigger"  onClick={() => {
                    props.setToggle(false);
                  }}>
                    <h4>Unmetered</h4>
                  </label>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
