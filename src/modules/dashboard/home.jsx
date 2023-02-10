import Link from "next/link";
import { useState } from "react";
import DashboardQuestions from "./dashboard_questions";
import $ from "jquery";
import Chart from "./home_chart";
import HomeAnalitycs from "./home_analitycs";
import HomeCardPlan from "./home_card_plan";

export default function Home(props) {
  const [tab, setTab] = useState(0);

  return (
    <div className="home-section" id="HOME">
      <div className="home-content" id="dashboard">
        <div className="sales-boxes">
          <div className="recent-sales box col-lg-7 col-md-12 col-sm-12 col-xs-12">
            <div className="box_welcome_con">
              <h2>Welcome!</h2>
            </div>
            <div className="dashboard">
              <div className="content_wrapper">
                <div className="content">
                  <div className="center_content">
                    <HomeAnalitycs />
                    <Chart />
                  </div>
                </div>
              </div>
            </div>
            <div className="dash_overview_proxy_lists_con">
              <h2>Proxy Lists</h2>
              <h3>CA | Rotating Residential</h3>
              <textarea placeholder="Proxies will appear here…"></textarea>
              <a href="#!">
                <button type="button">View Proxies</button>
              </a>
              <a href="#!">
                <button type="button">Export as…</button>
              </a>
              <a href="#!">
                <button type="button">Clear</button>
              </a>
              <a href="#!">
                <button type="button">Copy</button>
              </a>
            </div>
            <DashboardQuestions />
          </div>
          <div className="top-sales box col-lg-5 col-md-12 col-sm-12 col-xs-12">
            <div className="dashboard_overview_active_buy_standby_con">
              <h3>Active Plan</h3>
              <a href="#!">
                Buy standby plan
                <img src="/images/dashboard-overview-active-buy-standby-arrow-up-right.svg" />
              </a>
            </div>

            <HomeCardPlan index={0} tab={tab} setTab={setTab} />
            <HomeCardPlan index={1} tab={tab} setTab={setTab} />
            <HomeCardPlan index={2} tab={tab} setTab={setTab} />
            <HomeCardPlan index={3} tab={tab} setTab={setTab} />

            <div className="dashboard_overview_active_buy_standby_plan_inner_main_con">
              <div className="dashboard_overview_active_buy_standby_plan_main_con dashboard_overview_active_buy_standby_plan_main_con1">
                <h2>Standby Plan (2)</h2>
                <a href="#!">
                  <div className="dashboard_overview_active_buy_standby_plan_con">
                    <h3>US | Static Residential</h3>
                    <span>
                      <img src="/images/dashboard-overview-active-plan-detail-pause-icon.svg" />{" "}
                      On hold
                    </span>
                    <h4>Unmetered</h4>
                  </div>
                </a>
              </div>
              <div className="dashboard_overview_active_buy_standby_plan_main_con dashboard_overview_active_buy_standby_plan_main_con2">
                <a href="#!">
                  <div className="dashboard_overview_active_buy_standby_plan_con">
                    <h3>US | Rotating Mobile</h3>
                    <span>
                      <img src="/images/dashboard-overview-active-plan-detail-pause-icon.svg" />{" "}
                      On hold
                    </span>
                    <h4>Metered</h4>
                  </div>
                </a>
              </div>
              <div className="dashboard_overview_active_buy_standby_plan_main_con dashboard_overview_active_buy_standby_plan_main_con3">
                <a href="#!">
                  <div className="dashboard_overview_active_buy_standby_plan_con">
                    <h3>US | Static Residential</h3>
                    <span>
                      <img src="/images/dashboard-overview-active-plan-detail-pause-icon.svg" />{" "}
                      On hold
                    </span>
                    <h4>Unmetered</h4>
                  </div>
                </a>
              </div>
              <a
                href="#!"
                onClick={() => {
                  props.setTab(1);
                }}
                id="aCHIFFRAGEV"
              >
                <button type="button">View order history</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
