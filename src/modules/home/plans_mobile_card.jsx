import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PlansMobileCardTab from "./plans_mobile_card_tab";

export default function PlansMobileCard(props) {
  const [slide, setSlide] = useState(0);
  // const [metered2,setMetered2] = useState(false)
  return (
    <div className="card_plan">
      <div className="buttons_wrapper">
        <div
          onClick={() => {
            setSlide(0);
          }}
          className={slide == 0 ? "button active" : "button"}
        >
          {!props.custom?'Metered':'Custom'}
        </div>
       {!props.onlyMetered&&<div
          onClick={() => {
            setSlide(1);
          }}
          className={slide == 1 ? "button active" : "button"}
        >
          Unmetered
        </div>} 
       {!props.onlyMetered&& <div
          className={slide == 1 ? "buttons_slide active" : "buttons_slide"}
        ></div>}
      </div>
      <div className="plan_price">
        <div className="subtile">Starts from</div>

        {slide == 0&&<div className="price">
          <span>{props.metered.price}</span>/{props.metered.per}
        </div>}
        {slide == 1&&<div className="price">
          <span>{props.unmetered.price}</span>/{props.unmetered.per}
        </div>}
      </div>
          
      {slide == 0&&<PlansMobileCardTab title={"Region"}>{props.metered.region}</PlansMobileCardTab>}
      {slide == 1&&<PlansMobileCardTab title={"Region"}>{props.unmetered.region}</PlansMobileCardTab>}
      {slide == 0&&<PlansMobileCardTab title={"Bandwidth Meter"}>{props.metered.bandwidthMeter}</PlansMobileCardTab>}
      {slide == 1&&<PlansMobileCardTab title={"Bandwidth Meter"}>{props.unmetered.bandwidthMeter}</PlansMobileCardTab>}
      {slide == 0&&<PlansMobileCardTab title={"Instant Delivery"}><Image width={12} height={12} alt="true" src="/images/all-plans-checked-icon.svg" /></PlansMobileCardTab>}
      {slide == 1&&<PlansMobileCardTab title={"Instant Delivery"}><Image width={12} height={12} alt="true"  src="/images/all-plans-checked-icon.svg" /></PlansMobileCardTab>}

      {slide == 0&&<PlansMobileCardTab title={"State IPs (US only)"}>{props.metered.CityState?<Image width={12} height={12} alt="true" src="/images/all-plans-checked-icon.svg" />:'-'}</PlansMobileCardTab>}
      {slide == 1&&<PlansMobileCardTab title={"State IPs (US only)"}>{props.unmetered.CityState?<Image width={12} height={12} alt="true" src="/images/all-plans-checked-icon.svg" />:'-'}</PlansMobileCardTab>}
      <PlansMobileCardTab title={"Sticky & Rotation"}><Image width={12} height={12} alt="true" src="/images/all-plans-checked-icon.svg" /></PlansMobileCardTab>
      {slide == 0&&<PlansMobileCardTab title={"Bandwidth Rollover"}>{props.metered.bandwidthRollover?<Image width={12} height={12} alt="true" src="/images/all-plans-checked-icon.svg" />:'-'}</PlansMobileCardTab>}
      {slide == 1&&<PlansMobileCardTab title={"Bandwidth Rollover"}>{props.unmetered.bandwidthRollover?<Image width={12} height={12} alt="true" src="/images/all-plans-checked-icon.svg" />:'-'}</PlansMobileCardTab>}
      {slide == 0&&<PlansMobileCardTab title={"IP Authorization"}>{props.metered.IPauthorization}</PlansMobileCardTab>}
      {slide == 1&&<PlansMobileCardTab title={"IP Authorization"}>{props.unmetered.IPauthorization}</PlansMobileCardTab>}
      <PlansMobileCardTab title={"Dashboard Access"}><Image width={12} height={12} alt="true" src="/images/all-plans-checked-icon.svg" /></PlansMobileCardTab>
      <PlansMobileCardTab title={"API Access"}>{props.metered.apiAccess?<Image width={12} height={12} alt="true" src="/images/all-plans-checked-icon.svg" />:'-'}</PlansMobileCardTab>
      <PlansMobileCardTab title={"24/7 Support"}><Image width={12} height={12} alt="true" src="/images/all-plans-checked-icon.svg" /></PlansMobileCardTab>
      <PlansMobileCardTab title={"Dedicated Manager"}>{props.metered.DedicatedAccountManager?<Image width={12} height={12} alt="true" src="/images/all-plans-checked-icon.svg" />:'-'}</PlansMobileCardTab>
     {props.outlined&& <Link href="/contact-us"><div className={"button_get outlined"}>Contact Us</div></Link>}
     {!props.outlined&& <Link href={props.href}><div className={"button_get"}>Get Started</div></Link>}
    </div>
  );
}
