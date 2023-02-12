import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DashboardQuestions from "./dashboard_questions";

export default function Analytics(props) {
  const [tab, setTab] = useState(false);
  const [val, setVal] = useState("Past 24 hours");
  return (
    <div className="home-section" id="INDICATEURS">
      <div className="home-content" id="dashboard">
        <div className="usage_analytics_gen_con">
          <div className="usage_analytics_main_con">
            <h2>Usage Analytics</h2>
            <div className="usage_analytics_download_sort_con">
              <a href="#!">
                <Image
                  width={31}
                  height={31}
                  alt="icon"
                  src="/images/dashboard-usage-analytics-download-icon.svg"
                />
              </a>
              <a href="#!">
                <Image
                  width={31}
                  height={31}
                  alt="icon"
                  src="/images/dashboard-usage-analytics-sort-icon.svg"
                />
                <select id="usade_analytics_filter_con">
                  <option value="AL">Filter 1</option>
                  <option value="AK">Filter 2</option>
                  <option value="AZ">Filter 3</option>
                  <option value="WY">Filter 4</option>
                  <option value="WY">Filter 5</option>
                </select>
              </a>
            </div>
            <div className="creatfaqs_languages dropdown">
              <div className="faqs_languages container">
                <div
                  onClick={() => {
                    setTab(!tab);
                  }}
                  className={
                    tab
                      ? "faqs_languages_dropdown open"
                      : "faqs_languages_dropdown"
                  }
                >
                  <div className="faqs_languages_caption">{val}</div>
                  <Image
                    width={12}
                    height={12}
                    alt="icon"
                    src="/images/contact-us-arrow-down-icon.svg"
                  />
                  <div className="faqs_languages_list">
                    <div
                      onClick={() => {
                        setVal("Past 24 hours");
                      }}
                      className="faqs_languages_item"
                    >
                      Past 24 hours
                    </div>
                    <div
                      onClick={() => {
                        setVal("Past 3 days");
                      }}
                      className="faqs_languages_item"
                    >
                      Past 3 days
                    </div>
                    <div
                      onClick={() => {
                        setVal("Past 7 days");
                      }}
                      className="faqs_languages_item"
                    >
                      Past 7 days
                    </div>
                    <div
                      onClick={() => {
                        setVal("Past 30 days");
                      }}
                      className="faqs_languages_item"
                    >
                      Past 30 days
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="usage_analytics_toggle_main_con">
              <div className="usage_analytics_toggle_con1">
                <input type="checkbox" />
                <Image
                  width={12}
                  height={12}
                  alt="icon"
                  src="/images/dashboard-usage-analytics-calendar-icon.svg"
                />
                <h5>Date</h5>
              </div>
              <div className="usage_analytics_toggle_con1 usage_analytics_toggle_con2">
                <input type="checkbox" onChange={() => {}} defaultChecked />
                <Image
                  width={12}
                  height={12}
                  alt="icon"
                  src="/images/dashboard-usage-analytics-globe-icon.svg"
                />
                <h5>Location</h5>
              </div>
              <div className="usage_analytics_toggle_con1 usage_analytics_toggle_con3">
                <input type="checkbox" />
                <Image
                  width={12}
                  height={12}
                  alt="icon"
                  src="/images/dashboard-usage-analytics-box-icon.svg"
                />
                <h5>Domain</h5>
              </div>
              <div className="usage_analytics_toggle_con1 usage_analytics_toggle_con4">
                <input type="checkbox" />
                <Image
                  width={12}
                  height={12}
                  alt="icon"
                  src="/images/dashboard-usage-analytics-source-icon.svg"
                />
                <h5>Instance IP address</h5>
                <span className="tooltip-container">
                  <Image
                    width={12}
                    height={12}
                    alt="icon"
                    src="/images/dashboard-usage-analytics-info-icon.svg"
                  />
                  <span className="tooltip">Instance IP address</span>
                </span>
              </div>
              <div className="usage_analytics_toggle_con1 usage_analytics_toggle_con5">
                <input type="checkbox" />
                <Image
                  width={12}
                  height={12}
                  alt="icon"
                  src="/images/dashboard-usage-analytics-errors-icon.svg"
                />
                <h5>Errors</h5>
                <span className="tooltip-container">
                  <Image
                    width={12}
                    height={12}
                    alt="icon"
                    src="/images/dashboard-usage-analytics-info-icon.svg"
                  />
                  <span className="tooltip">Errors</span>
                </span>
              </div>
            </div>
          </div>
          <div className="usage_analytics_figure_stats_main_con">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 usage_analytics_figure_stats_sub_con1">
              <h5>Number of Request</h5>
              <span className="tooltip-container">
                <Image
                  width={12}
                  height={12}
                  alt="icon"
                  src="/images/dashboard-usage-analytics-info-icon.svg"
                />
                <span className="tooltip">Number of Request</span>
              </span>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 usage_analytics_figure_stats_sub_con1">
              <h5>Successful Request</h5>
              <span className="tooltip-container">
                <Image
                  width={12}
                  height={12}
                  alt="icon"
                  src="/images/dashboard-usage-analytics-info-icon.svg"
                />
                <span className="tooltip">Successful Request</span>
              </span>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 usage_analytics_figure_stats_sub_con1">
              <h5>Connectivity %</h5>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 usage_analytics_figure_stats_sub_con1">
              <h5>Bandwidth</h5>
            </div>
          </div>
          <div className="usage_analytics_figure_stats_main_con usage_analytics_figure_stats_main_con2">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 usage_analytics_figure_stats_sub_con1">
              <h5>5</h5>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 usage_analytics_figure_stats_sub_con1">
              <h5>3</h5>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 usage_analytics_figure_stats_sub_con1">
              <h5>70%</h5>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 usage_analytics_figure_stats_sub_con1">
              <h5>15,049 GB</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
