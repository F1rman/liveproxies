import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PlansMobileCard from "./plans_mobile_card";

export default function PlansMobile() {
  const [slide, setSlide] = useState(0);
  // const [metered2,setMetered2] = useState(false)
  var plans = {
    residential_rotaing: {
      metered: {
        price: "$70",
        per: "Plan",
        region: "US, CA, UK, RL",
        bandwidthMeter: "Metered",
        IPauthorization: "Optional",
        bandwidthRollover: true,
        CityState:false,
        apiAccess:false,
        DedicatedAccountManager:false,

      },
      unmetered: {
        per: "Plan",
        price: "$106",
        region: "US, RL",
        bandwidthMeter: "Unmetered",
        IPauthorization: "Required",
        bandwidthRollover: true,
        apiAccess:false,
        CityState:false,
        DedicatedAccountManager:false,
      },
    },
    residential_static: {
      metered: {
        per: "Plan",
        price: "$82",
        region: "US, CA, UK, RL",
        bandwidthMeter: "Metered",
        IPauthorization: "Optional",
        bandwidthRollover: true,
        CityState:false,
        DedicatedAccountManager:false,
        apiAccess:false,
      },
      unmetered: {
        per: "Plan",
        price: "$55",
        region: "US",
        bandwidthMeter: "Unmetered",
        IPauthorization: "Required",
        bandwidthRollover: false,
        CityState:false,
        DedicatedAccountManager:false,
        apiAccess:false,
      },
    },
    mobile_proxies: {
      metered: {
        per: "Plan",
        price: "$90",
        region: "US, CA, UK, RL",
        bandwidthMeter: "Metered",
        IPauthorization: "Optional",
        bandwidthRollover: true,
        DedicatedAccountManager:false,
        apiAccess:false,
        CityState:false,
      },
    },
    all_in_one: {
      metered: {
        per: "Month",
        price: "$5K",
        region: "US, CA, UK, RL",
        bandwidthMeter: "Optional",
        IPauthorization: "Optional",
        bandwidthRollover: false,
        apiAccess:true,
        DedicatedAccountManager:true,
        CityState:true,
      },
    },
  };
  return (
    <section className="mobile_show plans_section">
      <div className="plans_header">
        <div
          onClick={() => {
            setSlide(0);
          }}
          className={
            slide == 0 ? "arrow arrow_left" : "arrow arrow_left active"
          }
        ></div>
        <div
          onClick={() => {
            setSlide(1);
          }}
          className={
            slide == 1 ? "arrow arrow_right" : "arrow arrow_right active"
          }
        ></div>
        <div className="slides_wrapper">
          {slide == 0 && (
            <div className="text_wrapper">
              <b> RESIDENTIAL PROXIES </b>
              ROTATING
            </div>
          )}
          {slide == 0 && (
            <div className="text_wrapper">
              <b>RESIDENTIAL PROXIES </b>
              STATIC
            </div>
          )}
          {slide == 1 && (
            <div className="text_wrapper">
              <b> MOBILE PROXIES </b>
              ROTATING
            </div>
          )}
          {slide == 1 && (
            <div className="text_wrapper">
              <b>ALL IN ONE</b>
              CUSTOM SOLUTION
            </div>
          )}
        </div>
      </div>
      <div className="plans_body">
        {slide == 0 && <PlansMobileCard href={'rotating-residential-proxies-pricing'} {...plans.residential_rotaing}  />}
        {slide == 0 && <PlansMobileCard href={'static-residential-proxies-pricing'} {...plans.residential_static} />}
        {slide == 1 && <PlansMobileCard href={'rotating-mobile-proxies-pricing'} onlyMetered {...plans.mobile_proxies}/>}
        {slide == 1 && <PlansMobileCard outlined onlyMetered custom {...plans.all_in_one}/>}
      </div>
    </section>
  );
}
