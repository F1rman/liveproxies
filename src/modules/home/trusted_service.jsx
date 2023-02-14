import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TrustedService() {
  const prices = [[70,120],[35,97],[62]]
  const [open, setOpen] = useState(0);
  const [unmetered, setMetered] = useState(false);
    useEffect(()=>{
        setMetered(false)
    },[open])
  return (
    <section>
      <div className="honest_price_no_surprises_main_con">
        <div className="container">
          <div className="wrapper">
            <div className="col1">
              <Link href="/#!">
                <img src="/images/honest-price-what-we-offer-trust-pilot-icon.svg" />
              </Link>
              <h2>
                <span>Trusted Service</span> with full transparency
              </h2>
              <h4>
                Our provision has proven itself to thousands of satisfied users,
                and your account will inform you with all necessary details
                about your proxies at no additional cost.
              </h4>

              <Link className="underline" href="/sign-up">
                Create your account
              </Link>
            </div>
            <div className="col2">
              <div className="card">
                <div className="cardHeader">
                  <h2>What we offer</h2>
                  <p>
                    With a variety of options, select the plan that best suits
                    your needs
                  </p>
                  <div className="buttons_group">
                    <div
                      onClick={() => {
                        setOpen(0);
                      }}
                      className={open == 0 ? "button active" : "button "}
                    >
                      <h3>RESIDENTIAL</h3>
                      <h4>ROTATING</h4>
                    </div>
                    <div
                      onClick={() => {
                        setOpen(1);
                      }}
                      className={open == 1 ? "button active" : "button "}
                    >
                      <h3>RESIDENTIAL</h3>
                      <h4>STATIC</h4>
                    </div>
                    <div
                      onClick={() => {
                        setOpen(2);
                      }}
                      className={open == 2 ? "button active" : "button "}
                    >
                      <h3>MOBILE</h3>
                      <h4>ROTATING</h4>
                    </div>
                  </div>
                </div>
                <div className="cardBody">
                  <div className="buttons_wrapper">
                    <div onClick={()=>{
                        setMetered(false)
                    }} className={!unmetered?"button active":"button"}>Metered</div>
                    {open != 2 &&<div onClick={()=>{
                        setMetered(true)
                    }} className={unmetered?"button active":"button"}>Unmetered</div>}
                    {open != 2 &&<div className={unmetered?"buttons_slide active":'buttons_slide'}></div>}
                    {open == 2 &&<div className={'buttons_slide full'}></div>}
                  </div>
                  <hr />
                  <div className="plans_wrapper">
                    <div className="item">
                    <div className="image_wrapper">  
                      <Image
                        width={28}
                        height={20}
                        alt=""
                        src="/images/honest-price-what-we-offer-us-icon.svg"
                      />
                      <div className="state_wrapper">
                      <h2>United States</h2>
                      <h6>State proxies offered separately</h6>
                      </div>
                      </div>
                    <div className="item_inside">
                      <h3>Starts from</h3>
                      <div className="col">
                      <h4>${prices[open][!unmetered?0:1]}.00</h4>
                      <h5>per plan</h5>
                    </div>
                    </div>
                    </div>
                    <div className="item">
                    <div className="image_wrapper">  
                      <Image
                        width={28}
                        height={20}
                        alt=""
                        src="/images/honest-price-what-we-offer-ca-icon.svg"
                      />
                      <div className="state_wrapper">
                      <h2>Canada</h2>
                    </div>
                    </div>
                    <div className="item_inside">
                      <h3>Starts from</h3>
                      <div className="col">
                      <h4>${prices[open][!unmetered?0:1]}.00</h4>
                      <h5>per plan</h5>
                    </div>
                    </div>
                    </div>
                    <div className="item">
                    <div className="image_wrapper">  
                      <Image
                        width={28}
                        height={20}
                        alt=""
                        src="/images/honest-price-what-we-offer-gb-icon.svg"
                      />
                      <div className="state_wrapper">
                      <h2>United Kingdom</h2>
                    </div>
                    </div>
                    <div className="item_inside">
                      <h3>Starts from</h3>
                      <div className="col">
                      <h4>${prices[open][!unmetered?0:1]}.00</h4>
                      <h5>per plan</h5>
                    </div>
                    </div>
                    </div>
                    <div className="item">
                    <div className="image_wrapper">  
                      <Image
                        width={28}
                        height={20}
                        alt=""
                        src="/images/rotating-residential-proxies-ww.svg"
                      />
                      <div className="state_wrapper">
                      <h2>Random Location</h2>
                      <h6 className="mob">Arbitrary countries mixed excluding US, UK, CA</h6>
                    </div>
                    </div>
                    <div className="item_inside">
                      <h3>Starts from</h3>
                      <div className="col">
                      <h4>${prices[open][!unmetered?0:1]}.00</h4>
                      <h5>per plan</h5>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
