import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PlansCard from "./plans_desc";
import PlansMobile from "./plans_mobile";
import PlansMobileCard from "./plans_mobile_card";

export default function Plans() {
  const [metered1, setMetered1] = useState(true);
  const [metered2, setMetered2] = useState(false);
  const [slide, setSlide] = useState(false);
  var plansTitles = [
    { name: "Region", tooltip: true },
    { name: "Bandwidth Meter", tooltip: false },
    { name: "Instant Delivery", tooltip: false },
    { name: "City/State IPs", tooltip: true },
    { name: "Network Connection", tooltip: false },
    { name: "Sticky & Rotation Sessions", tooltip: false },
    { name: "Bandwidth Rollover", tooltip: true },
    { name: "IP Authorization", tooltip: true },
    { name: "Dashboard Access", tooltip: false },
    { name: "API Access", tooltip: false },
    { name: "24/7 Support", tooltip: false },
    { name: "Dedicated Account Manager", tooltip: false },
  ];
  var plans_data = {
    residential_rotaing: {
      metered: {
        price: "$70",
        per: "Plan",
        region: "US, CA, UK, RL",
        bandwidthMeter: "Metered",
        IPauthorization: "Optional",
        bandwidthRollover: true,
        CityState: false,
        apiAccess: false,
        DedicatedAccountManager: false,
      },
      unmetered: {
        per: "Plan",
        price: "$106",
        region: "US, CA, UK, RL",
        bandwidthMeter: "Unmetered",
        IPauthorization: "Required",
        bandwidthRollover: true,
        apiAccess: false,
        CityState: false,
        DedicatedAccountManager: false,
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
        CityState: false,
        DedicatedAccountManager: false,
        apiAccess: false,
      },
      unmetered: {
        per: "Plan",
        price: "$55",
        region: "US, CA, UK, RL",
        bandwidthMeter: "Unmetered",
        IPauthorization: "Required",
        bandwidthRollover: false,
        CityState: false,
        DedicatedAccountManager: false,
        apiAccess: false,
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
        DedicatedAccountManager: false,
        apiAccess: false,
        CityState: false,
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
        apiAccess: true,
        DedicatedAccountManager: true,
        CityState: true,
      },
    },
  };
  return (
    <section>
      <PlansMobile {...plans_data} />
      <div className="plans_wrapper mobile_hide">
        <div className="plans_wrapper_container ">
          <div className="plans_left_header">
            {plansTitles.map((e, i) => {
              return (
                <div className="item" key={i + "_plans"}>
                  <span>{e.name}</span>
                  {e.tooltip && (
                    <span className="tooltip-container">
                      <Image
                        width={14}
                        height={14}
                        alt="info"
                        src="/images/all-plans-info-icon.svg"
                      />
                      <span className="tooltip">
                        Region, The most flexible and cleanest proxy pools on
                        the internet.
                      </span>
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <div className="plans_right_body">
            <div
              onClick={() => {
                setSlide(false);
              }}
              className={
                !slide ? "arrow arrow_left" : "arrow arrow_left active"
              }
            ></div>
            <div
              onClick={() => {
                setSlide(true);
              }}
              className={
                slide ? "arrow arrow_right" : "arrow arrow_right active"
              }
            ></div>
            {
              <PlansCard
                style={{ display: slide ? "none" : "flex" }}
                href={"rotating-residential-proxies-pricing"}
                {...plans_data.residential_rotaing}
              >
                <div className="header_card">
                  <b>Residential Proxies </b>
                  ROTATING
                </div>
              </PlansCard>
            }
            {
              <PlansCard
                style={{ display: slide ? "none" : "flex" }}
                href={"static-residential-proxies-pricing"}
                {...plans_data.residential_static}
              >
                <div className="header_card">
                  <b>Residential Proxies </b>
                  STATIC
                </div>
              </PlansCard>
            }
            {
              <PlansCard
                style={{ display: slide ? "flex" : "none" }}
                href={"rotating-mobile-proxies-pricing"}
                onlyMetered
                {...plans_data.mobile_proxies}
              >
                <div className="header_card">
                  <b>Mobile Proxies  </b>
                  ROTATING
                </div>
              </PlansCard>
            }
            {
              <PlansCard
                style={{ display: slide ? "flex" : "none" }}
                outlined
                onlyMetered
                custom
                {...plans_data.all_in_one}
              >
                <div className="header_card">
                
<b>All in One</b>
Custom Solution
                </div>
              </PlansCard>
            }
          </div>
        </div>

        {/* // asd */}
      </div>
    </section>
  );
}
