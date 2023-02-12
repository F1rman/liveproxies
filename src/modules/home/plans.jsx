import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Plans() {
  const [metered1,setMetered1] = useState(true)
  const [metered2,setMetered2] = useState(false)
  return (
    <section className="mobile_hide">
      <div className="live_proxies_plan_table_main_con">
        <div className="live_proxies_plan_table_con_scroll container">
          <div className="live_proxies_plan_table_con">
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 live_proxies_plan_table_sub_con1">
              <div>
                <h3>
                  Region
                  <span className="tooltip-container">
                    <Image width={14} height={14} alt="info" src="/images/all-plans-info-icon.svg" />
                    <span className="tooltip">
                      Region, The most flexible and cleanest proxy pools on the
                      internet.
                    </span>
                  </span>
                </h3>
              </div>
              <div>
                <h3>Bandwidth Meter</h3>
              </div>
              <div>
                <h3>Instant Delivery</h3>
              </div>
              <div>
                <h3>
                  City/State IPs
                  <span className="tooltip-container">
                                        <Image width={14} height={14} alt="info" src="/images/all-plans-info-icon.svg" />

                    <span className="tooltip">
                      City/State IPs, The most flexible and cleanest proxy pools
                      on the internet.
                    </span>
                  </span>
                </h3>
              </div>
              <div>
                <h3>Network Connection</h3>
              </div>
              <div>
                <h3>Sticky & Rotation Sessions</h3>
              </div>
              <div>
                <h3>
                  Bandwidth Rollover
                  <span className="tooltip-container">
                                        <Image width={14} height={14} alt="info" src="/images/all-plans-info-icon.svg" />

                    <span className="tooltip">
                      Bandwidth Rollover, The most flexible and cleanest proxy
                      pools on the internet.
                    </span>
                  </span>
                </h3>
              </div>
              <div>
                <h3>
                  IP Authorization
                  <span className="tooltip-container">
                                        <Image width={14} height={14} alt="info" src="/images/all-plans-info-icon.svg" />

                    <span className="tooltip">
                      IP Authorization, The most flexible and cleanest proxy
                      pools on the internet.
                    </span>
                  </span>
                </h3>
              </div>
              <div>
                <h3>Dashboard Access</h3>
              </div>
              <div>
                <h3>API Access</h3>
              </div>
              <div>
                <h3>24/7 Support</h3>
              </div>
              <div>
                <h3>Dedicated Account Manager</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 live_proxies_plan_table_sub_con2">
              <div className="box">
                <input
                  type="radio"
                  className="tab-toggle"
                  name="tab-toggle-rotating"
                  id="tab1"
                  onChange={(e) => {
                    setMetered1(e.target.value)
                  }}
                  checked={metered1}
                />
                <input
                  type="radio"
                  className="tab-toggle"
                  name="tab-toggle-rotating"
                  id="tab2"
                  onChange={(e) => {
                    setMetered1(!e.target.value)
                  }}
                  checked={!metered1}
                />
                <ul className="tab-list">
                  <li className="tab-item">
                    <label className="tab-trigger" htmlFor="tab1">
                      <h4>Metered</h4>
                    </label>
                  </li>
                  <li className="tab-item">
                    <label className="tab-trigger" htmlFor="tab2">
                      <h4>Unmetered</h4>
                    </label>
                  </li>
                </ul>
                <div className="tab-container">
                  <div className="tab-content">
                    <div className="live_proxies_plan_table_sub_con4 text-center">
                      <div>
                        <h1>
                          RESIDENTIAL PROXIES
                          <br />
                          <span>ROTATING</span>
                        </h1>
                      </div>
                      <div>
                        <h2></h2>
                      </div>
                      <div>
                        <h4>Starts from</h4>
                        <h5>
                          $70<span>/Plan</span>
                        </h5>
                      </div>
                      <div>
                        <h3>US, CA, UK, RL</h3>
                      </div>
                      <div>
                        <h3>Metered</h3>
                      </div>
                      <div>
                        <h3>
                          <img src="/images/all-plans-checked-icon.svg" />
                        </h3>
                      </div>
                      <div>
                        <span></span>
                      </div>
                      <div>
                        <h3>HTTP/S</h3>
                      </div>
                      <div>
                        <h3>
                          <img src="/images/all-plans-checked-icon.svg" />
                        </h3>
                      </div>
                      <div>
                        <h3>
                          <img src="/images/all-plans-checked-icon.svg" />
                        </h3>
                      </div>
                      <div>
                        <h3>Optional</h3>
                      </div>
                      <div>
                        <h3>
                          <img src="/images/all-plans-checked-icon.svg" />
                        </h3>
                      </div>
                      <div>
                        <span></span>
                      </div>
                      <div>
                        <h3>
                          <img src="/images/all-plans-checked-icon.svg" />
                        </h3>
                      </div>
                      <div>
                        <span></span>
                      </div>
                      <div>
                        <button type="button">
                          <Link href="/rotating-residential-proxies-pricing">Get Started</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div className="live_proxies_plan_table_sub_con4 text-center">
                      <div>
                        <h1>
                          RESIDENTIAL PROXIES
                          <br />
                          <span>ROTATING</span>
                        </h1>
                      </div>
                      <div>
                        <h2></h2>
                      </div>
                      <div>
                        <h4>Starts from</h4>
                        <h5>
                          $106<span>/Plan</span>
                        </h5>
                      </div>
                      <div>
                        <h3>US, RL</h3>
                      </div>
                      <div>
                        <h3>Unmetered</h3>
                      </div>
                      <div>
                        <h3>
                          <img src="/images/all-plans-checked-icon.svg" />
                        </h3>
                      </div>
                      <div>
                        <span></span>
                      </div>
                      <div>
                        <h3>HTTP/S</h3>
                      </div>
                      <div>
                        <h3>
                          <img src="/images/all-plans-checked-icon.svg" />
                        </h3>
                      </div>
                      <div>
                        <h3>
                          <img src="/images/all-plans-checked-icon.svg" />
                        </h3>
                      </div>
                      <div>
                        <h3>Required</h3>
                      </div>
                      <div>
                        <h3>
                          <img src="/images/all-plans-checked-icon.svg" />
                        </h3>
                      </div>
                      <div>
                        <span></span>
                      </div>
                      <div>
                        <h3>
                          <img src="/images/all-plans-checked-icon.svg" />
                        </h3>
                      </div>
                      <div>
                        <span></span>
                      </div>
                      <div>
                        <button type="button">
                          <Link href="/static-residential-proxies-pricing">Get Started</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 live_proxies_plan_table_sub_con3">
              <div className="box">
                <input
                  type="radio"
                  className="tab-toggle"
                  name="tab-toggle-static"
                  id="tab3"
                  onChange={(e) => {
                    setMetered2(e.target.value)
                  }}
                  checked={metered2}
                />
                <input
                  type="radio"
                  className="tab-toggle"
                  name="tab-toggle-static"
                  id="tab4"
                  onChange={(e) => {
                    setMetered2(!e.target.value)
                  }}
                  checked={!metered2}
                />
                <ul className="tab-list">
                  <li className="tab-item">
                    <label className="tab-trigger" htmlFor="tab3">
                      <h4>Metered</h4>
                    </label>
                  </li>
                  <li className="tab-item">
                    <label className="tab-trigger" htmlFor="tab4">
                      <h4>Unmetered</h4>
                    </label>
                  </li>
                </ul>
                <div className="tab-container">
                  <div className="tab-content">
                    <div className="live_proxies_plan_table_sub_con4 text-center">
                      <div>
                        <h1>
                          RESIDENTIAL PROXIES
                          <br />
                          <span>STATIC</span>
                        </h1>
                      </div>
                      <div>
                        <h2></h2>
                      </div>
                      <div>
                        <h4>Starts from</h4>
                        <h5>
                          $82<span>/Plan</span>
                        </h5>
                      </div>
                      <div>
                        <h3>US, CA, UK, RL</h3>
                      </div>
                      <div>
                        <h3>Metered</h3>
                      </div>
                      <div>
                        <h3>
                          <img src="/images/all-plans-checked-icon.svg" />
                        </h3>
                      </div>
                      <div>
                        <span></span>
                      </div>
                      <div>
                        <h3>HTTP/S</h3>
                      </div>
                      <div>
                        <h3>
                          <img src="/images/all-plans-checked-icon.svg" />
                        </h3>
                      </div>
                      <div>
                        <h3>
                          <img src="/images/all-plans-checked-icon.svg" />
                        </h3>
                      </div>
                      <div>
                        <h3>Optional</h3>
                      </div>
                      <div>
                        <h3>
                          <img src="/images/all-plans-checked-icon.svg" />
                        </h3>
                      </div>
                      <div>
                        <span></span>
                      </div>
                      <div>
                        <h3>
                          <img src="/images/all-plans-checked-icon.svg" />
                        </h3>
                      </div>
                      <div>
                        <span></span>
                      </div>
                      <div>
                        <button type="button">
                          <Link href="/sign-up.html">Get Started</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div className="live_proxies_plan_table_sub_con4 text-center">
                      <div>
                        <h1>
                          RESIDENTIAL PROXIES
                          <br />
                          <span>STATIC</span>
                        </h1>
                      </div>
                      <div>
                        <h2></h2>
                      </div>
                      <div>
                        <h4>Starts from</h4>
                        <h5>
                          $55<span>/Plan</span>
                        </h5>
                      </div>
                      <div>
                        <h3>US</h3>
                      </div>
                      <div>
                        <h3>Unmetered</h3>
                      </div>
                      <div>
                        <h3>
                          <img src="/images/all-plans-checked-icon.svg" />
                        </h3>
                      </div>
                      <div>
                        <span></span>
                      </div>
                      <div>
                        <h3>HTTP/S</h3>
                      </div>
                      <div>
                        <h3>
                          <img src="/images/all-plans-checked-icon.svg" />
                        </h3>
                      </div>
                      <div>
                        <span></span>
                      </div>
                      <div>
                        <h3>Required</h3>
                      </div>
                      <div>
                        <h3>
                          <img src="/images/all-plans-checked-icon.svg" />
                        </h3>
                      </div>
                      <div>
                        <span></span>
                      </div>
                      <div>
                        <h3>
                          <img src="/images/all-plans-checked-icon.svg" />
                        </h3>
                      </div>
                      <div>
                        <span></span>
                      </div>
                      <div>
                        <button type="button">
                          <Link href="/static-residential-proxies-pricing">Get Started</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 live_proxies_plan_table_sub_con4 text-center">
              <div>
                <h1>
                  MOBILE PROXIES
                  <br />
                  <span>ROTATING</span>
                </h1>
              </div>
              <div>
                <h2>Metered</h2>
              </div>
              <div>
                <h4>Starts from</h4>
                <h5>
                  $90<span>/Plan</span>
                </h5>
              </div>
              <div>
                <h3>US, CA, UK, RL</h3>
              </div>
              <div>
                <h3>Metered</h3>
              </div>
              <div>
                <h3>
                  <img src="/images/all-plans-checked-icon.svg" />
                </h3>
              </div>
              <div>
                <span></span>
              </div>
              <div>
                <h3>HTTP/S</h3>
              </div>
              <div>
                <h3>
                  <img src="/images/all-plans-checked-icon.svg" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src="/images/all-plans-checked-icon.svg" />
                </h3>
              </div>
              <div>
                <h3>Optional</h3>
              </div>
              <div>
                <h3>
                  <img src="/images/all-plans-checked-icon.svg" />
                </h3>
              </div>
              <div>
                <span></span>
              </div>
              <div>
                <h3>
                  <img src="/images/all-plans-checked-icon.svg" />
                </h3>
              </div>
              <div>
                <span></span>
              </div>
              <div>
                <button type="button">
                  <Link href="/rotating-mobile-proxies-pricing">Get Started</Link>
                </button>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 live_proxies_plan_table_sub_con5 text-center">
              <div>
                <h1>
                  ALL IN ONE
                  <br />
                  <span>CUSTOM SOLUTION</span>
                </h1>
              </div>
              <div>
                <h2>Custom</h2>
              </div>
              <div>
                <h4>Starts from</h4>
                <h5>
                  $5K<span>/Month</span>
                </h5>
              </div>
              <div>
                <h3>US, CA, UK, RL</h3>
              </div>
              <div>
                <h3>Optional</h3>
              </div>
              <div>
                <h3>
                  <img src="/images/all-plans-checked-icon.svg" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src="/images/all-plans-checked-icon.svg" />
                </h3>
              </div>
              <div>
                <h3>HTTP/S</h3>
              </div>
              <div>
                <h3>
                  <img src="/images/all-plans-checked-icon.svg" />
                </h3>
              </div>
              <div>
                <span></span>
              </div>
              <div>
                <h3>Optional</h3>
              </div>
              <div>
                <h3>
                  <img src="/images/all-plans-checked-icon.svg" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src="/images/all-plans-checked-icon.svg" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src="/images/all-plans-checked-icon.svg" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src="/images/all-plans-checked-icon.svg" />
                </h3>
              </div>
              <div>
                <button type="button">
                  <Link href="/contact-us">Contact Us</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
