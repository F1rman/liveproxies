import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DashboardQuestions from "./dashboard_questions";

export default function Notification(props) {
  const [more, openMore] = useState(false);
  const [aNot, removeANot] = useState(true);
  const [reminder, setReminder] = useState(true);
  const [promo, setPromo] = useState(true);
  const [email, setEmail] = useState(true);
  const [notifications, setItems] = useState([
    {
      img: "/dashboard-notifications-email-alerts-money-icon.svg",
      text: "You have successfully purchased a <b>UK | Residential plan</b> on Dec 05, 2022",
      date: "Dec 07, 2022",
    },
    {
      img: "/dashboard-notifications-email-alerts-time-icon.svg",
      text: "US | Rotating Mobile has expired on Dec 05, 2022",
      date: "Dec 05, 2022",
      button: true,
    },
  ]);
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
           onChange={() => {
            }}
          />
          <label className="checkbox" htmlFor="">
            <h4>Payment receipt and financial related</h4>
          </label>
          <input
            className="checkbox-input"
            id="email_alerts2"
            type="checkbox"
            defaultChecked
            value={reminder}
            onChange={() => {
              setReminder(!reminder)
            }}
          />
          <label className="checkbox" htmlFor="email_alerts2">
            <h4>Plan expiration reminders</h4>
          </label>
          <input
            className="checkbox-input active"
            id="email_alerts3"
            type="checkbox"
            value={email}
            onChange={() => {
              setEmail(!email)
            }}
          />
          <label className="checkbox" htmlFor="email_alerts3">
            <h4>Expired plan notification emails</h4>
          </label>
          <input
            className="checkbox-input"
            id="email_alerts4"
            type="checkbox"
            value={promo}
            onChange={() => {
              setPromo(!promo)
            }}
          />
          <label className="checkbox" htmlFor="email_alerts4">
            <h4>Promotion and discount code</h4>
          </label>
        </div>
        {aNot && (
          <main>
            <div className="title">Admin Notifications (1)</div>
            <div className="items">
              <div className="item">
                <Image
                  width={18}
                  height={18}
                  alt=""
                  src="/images/dashboard-notifications-email-alerts-user-icon.svg"
                />
                <div className="content">
                    <h2 
                     > Hello, we truly appreciate the patient and some feedbacks.
                    We all at Live Proxies wish you a wonderful holiday and {more && (
                      <span>
                        {" "}
                        thank you for trusting us!.
                      </span>
                    )}
                    <a
                      onClick={() => {
                        openMore(!more);
                      }}
                      className="moreless-button"
                      href="#"
                    >
                      {!more ? "...More" : " Less"}
                    </a></h2> 
                    <h3>Dec 07, 2022</h3>
                  </div>
                    
                  
                  <div className="close_wraper">
                <Image
                  width={12}
                  height={12}
                  alt="close"
                  src="/images/dashboard-notifications-email-alerts-close-icon.svg"
                  onClick={() => {
                    removeANot(false);
                  }}
                />
              </div>
              </div>
            </div>
          </main>
        )}
       {notifications.length != 0&& <main>
          <div className="title">Notifications ({notifications.length})</div>
          <div className="items">
            {notifications.map((e) => {
              return (
                <div key={e.text} className={'item'}>
                  <Image
                    width={18}
                    height={18}
                    alt=""
                    src={"/images/" + e.img}
                  />
                  <div className="content">
                    <h2 dangerouslySetInnerHTML={{ __html: e.text }} /> 
                    <h3>{e.date}</h3>
                  </div>
                  {e.button && (
                    <Link
                        href="/rotating-mobile-proxies-pricing"
                        target="_blank"
                      >
                    <button type="button">
                     
                        Buy Again
                    </button>
                    </Link>
                  )}
                  <div className="close_wraper">
                  <Image
                    width={12}
                    height={12}
                    alt="close"
                    src="/images/dashboard-notifications-email-alerts-close-icon.svg"
                    onClick={() => {
                          var filteredArray = notifications.filter(function (e2) {
                            return e2 !== e;
                          });
                          setItems(filteredArray);
                        }}
                    className="notification_you_have_close_icon"
                  />
                  </div>
                 
                </div>
              );
            })}
          </div>
        </main>}
      </div>
    </div>
  );
}
