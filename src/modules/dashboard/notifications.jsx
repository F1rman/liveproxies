import Link from "next/link";
import { useState } from "react";
import DashboardQuestions from "./dashboard_questions";

export default function Notification(props) {
  return (
    


<div className="home-section" id="PLANNING">
          <div className="home-content" id="dashboard">
            <div className="checkbox-container">
              <h2>Email Alerts</h2>
              <h3>Which emails would you like to receive?</h3>
              <input
                className="checkbox-input active"
                type="checkbox"
                checked
                onChange={()=>{}}
              />
              <label className="checkbox" htmlFor="">
                <h4>Payment receipt and financial related</h4>
              </label>
              <input
                className="checkbox-input"
                id="email_alerts2"
                type="checkbox"
                checked
                onChange={()=>{}}
              />
              <label className="checkbox" htmlFor="email_alerts2">
                <h4>Plan expiration reminders</h4>
              </label>
              <input
                className="checkbox-input active"
                id="email_alerts3"
                type="checkbox"
              />
              <label className="checkbox" htmlFor="email_alerts3">
                <h4>Expired plan notification emails</h4>
              </label>
              <input
                className="checkbox-input"
                id="email_alerts4"
                type="checkbox"
              />
              <label className="checkbox" htmlFor="email_alerts4">
                <h4>Promotion and discount code</h4>
              </label>
            </div>
            <main>
              <ul>
                <h1>Admin Notifications (1)</h1>
                <li id="sectiontohide3">
                  <label>
                    <span>
                      <img src="/images/dashboard-notifications-email-alerts-user-icon.svg" />
                      <h2>
                        <span>
                          Hello, we truly appreciate the patient and some
                          feedbacks. We all at LiveProxies wish you a wonderful
                          holiday and
                          <span id="moreless-button-con">
                            <span className="moretext">
                              {" "}
                              thank you for trusting us!.
                            </span>
                          </span>
                          <a className="moreless-button" href="#!">
                            ...More
                          </a>
                        </span>
                      </h2>
                      <h3>Dec 07, 2022</h3>
                      <img
                        src="/images/dashboard-notifications-email-alerts-close-icon.svg"
                        onclick="toggle_div_fun3('sectiontohide3');"
                      />
                    </span>
                  </label>
                </li>
              </ul>
            </main>
            <main>
              <ul>
                <h1>Notifications (2)</h1>
                <li id="sectiontohide1">
                  <label>
                    <span>
                      <img src="/images/dashboard-notifications-email-alerts-money-icon.svg" />
                      <h2>
                        You have successfully purchased a{" "}
                        <span>UK | Residential plan</span> on Dec 05, 2022
                      </h2>
                      <h3>Dec 07, 2022</h3>
                      <img
                        src="/images/dashboard-notifications-email-alerts-close-icon.svg"
                        onclick="toggle_div_fun1('sectiontohide1');"
                        className="notification_you_have_close_icon"
                      />
                    </span>
                  </label>
                </li>
                <li id="sectiontohide2">
                  <label>
                    <span className="notification_divider_line_con"></span>
                    <span>
                      <img
                        src="/images/dashboard-notifications-email-alerts-close-icon.svg"
                        onclick="toggle_div_fun2('sectiontohide2');"
                      />
                      <h2>US | Rotating Mobile has expired on Dec 05, 2022</h2>
                      <h3>Dec 05, 2022</h3>
                      <button type="button">
                        <a
                          href="/rotating-mobile-proxies-pricing.html"
                          target="_blank"
                        >
                          Buy Again
                        </a>
                      </button>
                      <img src="/images/dashboard-notifications-email-alerts-time-icon.svg" />
                    </span>
                  </label>
                </li>
              </ul>
            </main>
          </div>
        </div>


  );
}