import Link from "next/link";
import { useState } from "react";
import DashboardQuestions from "./dashboard_questions";

export default function Home(props) {
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
                    <div className="card analitycs">
                      <div className="item_wrapper">
                        <div className="title_wrapper">
                          <div className="title">Bandwidth</div>
                          <div className="type_select">
                            <div className="btn_type active">GB</div>
                            <div className="btn_type">MB</div>
                          </div>
                        </div>
                        <div className="chart_wrapper">
                          <div className="svg_wrapper bandwidth">
                            <svg
                              className="animated"
                              width="100"
                              height="100"
                              viewbox="0 0 100 100"
                            >
                              <defs>
                                <linearGradient
                                  id="gradient"
                                  x1="0%"
                                  y1="0%"
                                  x2="0%"
                                  y2="100%"
                                >
                                  <stop offset="0%" stopColor="#17afff" />
                                  <stop offset="100%" stopColor="#1f6bd3" />
                                </linearGradient>
                              </defs>

                              <path
                                stroke-linecap="round"
                                stroke="#f0f1f2"
                                stroke-width="8"
                                fill="none"
                                d="M50 10
                                   a 30 30 0 0 1 0 80
                                   a 30 30 0 0 1 0 -80"
                              ></path>
                              <path
                                id="progress"
                                stroke-linecap="round"
                                stroke="url(#gradient)"
                                stroke-width="8"
                                fill="none"
                                d="M50 10
                                 a 30 30 0 0 1 0 80
                                 a 30 30 0 0 1 0 -80"
                              ></path>

                              <text
                                className="count c1"
                                x="45"
                                y="42"
                                textLength="35px"
                                text-anchor="middle"
                                dy="7"
                              ></text>
                              <text
                                className="count_gb"
                                x="70"
                                y="42"
                                textLength="13px"
                                text-anchor="middle"
                                dy="7"
                              >
                                GB
                              </text>
                              <text
                                className="remain"
                                x="50"
                                y="53"
                                textLength="25px"
                                text-anchor="middle"
                                dy="7"
                              >
                                Remain
                              </text>
                            </svg>

                            <text
                              id="count"
                              x="50"
                              y="50"
                              text-anchor="middle"
                              dy="7"
                              font-size="20"
                            ></text>
                            {/* <!-- <text className="gb_svg" x="100" y="50" text-anchor="middle" dy="7" font-size="20">GB</text> -->
                                    <!-- <text className="gb_svg" x="50" y="50" text-anchor="middle" dy="7" font-size="20">Remain</text> --> */}
                          </div>
                          <div className="spent">
                            <div className="info">
                              <div className="dot blue"></div>
                              <span>Spent</span>
                            </div>
                            <div className="info">
                              <div className="dot "></div>
                              <span>Limit</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item_wrapper time">
                        <div className="title_wrapper">
                          <div className="title">Time</div>
                          <div className="type_select">
                            <div className="btn_type active">D</div>
                            <div className="btn_type">H</div>
                          </div>
                        </div>
                        <div className="chart_wrapper">
                          <div className="svg_wrapper bandwidth">
                            <svg
                              className="animated2"
                              width="100"
                              height="100"
                              viewbox="0 0 100 100"
                            >
                              <defs>
                                <linearGradient
                                  id="gradient2"
                                  x1="0%"
                                  y1="0%"
                                  x2="0%"
                                  y2="100%"
                                >
                                  <stop offset="0%" stopColor="#18bf66" />
                                  <stop offset="100%" stopColor="#55cec7" />
                                </linearGradient>
                              </defs>
                              <path
                                stroke-linecap="round"
                                stroke="#f0f1f2"
                                stroke-width="8"
                                fill="none"
                                d="M50 10
                                     a 30 30 0 0 1 0 80
                                     a 30 30 0 0 1 0 -80"
                              ></path>
                              <path
                                id="progress2"
                                stroke-linecap="round"
                                stroke="url(#gradient2)"
                                stroke-width="8"
                                fill="none"
                                d="M50 10
                                       a 30 30 0 0 1 0 80
                                       a 30 30 0 0 1 0 -80"
                              ></path>

                              <text
                                className="count c2"
                                x="38"
                                y="42"
                                textLength="18px"
                                text-anchor="middle"
                                dy="7"
                              ></text>
                              <text
                                className="count_gb"
                                x="60"
                                y="42"
                                textLength="24px"
                                text-anchor="middle"
                                dy="7"
                              >
                                &nbsp;DAYS
                              </text>
                              <text
                                className="remain"
                                x="50"
                                y="53"
                                textLength="14px"
                                text-anchor="middle"
                                dy="7"
                              >
                                Left
                              </text>
                            </svg>

                            <text
                              id="count"
                              x="50"
                              y="50"
                              text-anchor="middle"
                              dy="7"
                              font-size="20"
                            ></text>
                            {/* <!-- <text className="gb_svg" x="100" y="50" text-anchor="middle" dy="7" font-size="20">GB</text> -->
                                    <!-- <text className="gb_svg" x="50" y="50" text-anchor="middle" dy="7" font-size="20">Remain</text> --> */}
                          </div>
                        </div>
                      </div>

                      <div className="item_wrapper location">
                        <div className="title">Location</div>
                        <div className="loc">
                          <div className="bg_image ca"></div>
                          <div className="name">Canada</div>
                        </div>
                        <div className="usage">
                          <div className="title">
                            Bandwidth Usage{" "}
                            <span>
                              <b> 8.27 GB</b> / 20 GB
                            </span>
                          </div>
                          <div className="progres_bar">
                            <div className="progress"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card charts cards_graph">
                      <div className="header_chart">
                        <div className="title_wrapper">
                          <div className="title">Bandwidth Usage</div>
                          <a className="link" href="#!" id="aINDICATEURSV">
                            View Usage Analytics
                          </a>
                        </div>
                        <div className="select_wrapper">
                          <select>
                            <option value="Past 7 days">Past 24 hours</option>
                            <option value="Past 7 days">Past 3 days</option>
                            <option value="Past 7 days">Past 7 days</option>
                            <option value="Past 7 days">Past 30 days</option>
                          </select>
                        </div>
                      </div>
                      <div className="chart_wrapper">
                        <div className="aspect-ratio">
                          <canvas id="myChart"></canvas>
                          <div id="tooltip"></div>
                        </div>
                      </div>
                    </div>
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
            <div className="dashboard_overview_active_plan_detail_main_con active">
              <div className="dashboard_overview_active_plan_detail_con1">
                <h2>CA | Rotating Residential</h2>
                <span>
                  <img src="/images/dashboard-overview-active-plan-detail-play-icon.svg" />
                  ACTIVE
                </span>
                <h3>Metered</h3>
              </div>
              <div className="dashboard_overview_active_plan_detail_con2">
                <div className="dashboard_overview_active_plan_detail_sub_con">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-ips-qty-icon.svg" />{" "}
                    IP Quantity
                  </h2>
                  <h3>500 IPs</h3>
                </div>
                <div className="dashboard_overview_active_plan_detail_sub_con">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-hard-drive-icon.svg" />{" "}
                    Bandwidth
                  </h2>
                  <h3>20 GB</h3>
                </div>
                <div className="dashboard_overview_active_plan_detail_sub_con">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-calendar-icon.svg" />{" "}
                    Plan Length
                  </h2>
                  <h3>30 Days</h3>
                </div>
              </div>
              <div className="dashboard_overview_active_plan_detail_con3">
                <div className="dashboard_overview_active_plan_detail_sub_con">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-money-icon.svg" />{" "}
                    Paid on <span>Dec 01, 2022</span>
                  </h2>
                  <h3>$300.00</h3>
                </div>
                <div className="dashboard_overview_active_plan_detail_sub_con dashboard_overview_active_plan_detail_sub_h3">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-time-icon.svg" />{" "}
                    Ends on <span>Dec 31, 2022, 23:59 PM EST</span>
                  </h2>
                  <h3>20 Days left</h3>
                </div>
              </div>
            </div>
            <div className="dashboard_overview_active_plan_detail_main_con dashboard_overview_active_plan_detail_main_con2">
              <div className="dashboard_overview_active_plan_detail_con1">
                <h2>US | Static Residential</h2>
                <span>
                  <img src="/images/dashboard-overview-active-plan-detail-play-icon.svg" />
                  ACTIVE
                </span>
                <h3>Metered</h3>
              </div>
              <div className="dashboard_overview_active_plan_detail_con2">
                <div className="dashboard_overview_active_plan_detail_sub_con">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-ips-qty-icon.svg" />{" "}
                    IP Quantity
                  </h2>
                  <h3>500 IPs</h3>
                </div>
                <div className="dashboard_overview_active_plan_detail_sub_con">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-hard-drive-icon.svg" />{" "}
                    Bandwidth
                  </h2>
                  <h3>20 GB</h3>
                </div>
                <div className="dashboard_overview_active_plan_detail_sub_con">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-calendar-icon.svg" />{" "}
                    Plan Length
                  </h2>
                  <h3>30 Days</h3>
                </div>
              </div>
              <div className="dashboard_overview_active_plan_detail_con3">
                <div className="dashboard_overview_active_plan_detail_sub_con">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-money-icon.svg" />{" "}
                    Paid on <span>Dec 01, 2022</span>
                  </h2>
                  <h3>$300.00</h3>
                </div>
                <div className="dashboard_overview_active_plan_detail_sub_con dashboard_overview_active_plan_detail_sub_h3">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-time-icon.svg" />{" "}
                    Ends on <span>Dec 31, 2022, 23:59 PM EST</span>
                  </h2>
                  <h3>20 Days left</h3>
                </div>
              </div>
            </div>
            <div className="dashboard_overview_active_plan_detail_main_con dashboard_overview_active_plan_detail_main_con2">
              <div className="dashboard_overview_active_plan_detail_con1">
                <h2>US | Static Residential</h2>
                <span>
                  <img src="/images/dashboard-overview-active-plan-detail-play-icon.svg" />
                  ACTIVE
                </span>
                <h3>Metered</h3>
              </div>
              <div className="dashboard_overview_active_plan_detail_con2">
                <div className="dashboard_overview_active_plan_detail_sub_con">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-ips-qty-icon.svg" />{" "}
                    IP Quantity
                  </h2>
                  <h3>500 IPs</h3>
                </div>
                <div className="dashboard_overview_active_plan_detail_sub_con">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-hard-drive-icon.svg" />{" "}
                    Bandwidth
                  </h2>
                  <h3>20 GB</h3>
                </div>
                <div className="dashboard_overview_active_plan_detail_sub_con">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-calendar-icon.svg" />{" "}
                    Plan Length
                  </h2>
                  <h3>30 Days</h3>
                </div>
              </div>
              <div className="dashboard_overview_active_plan_detail_con3">
                <div className="dashboard_overview_active_plan_detail_sub_con">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-money-icon.svg" />{" "}
                    Paid on <span>Dec 01, 2022</span>
                  </h2>
                  <h3>$300.00</h3>
                </div>
                <div className="dashboard_overview_active_plan_detail_sub_con dashboard_overview_active_plan_detail_sub_h3">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-time-icon.svg" />{" "}
                    Ends on <span>Dec 31, 2022, 23:59 PM EST</span>
                  </h2>
                  <h3>20 Days left</h3>
                </div>
              </div>
            </div>
            <div className="dashboard_overview_active_plan_detail_main_con dashboard_overview_active_plan_detail_main_con2">
              <div className="dashboard_overview_active_plan_detail_con1">
                <h2>US | Static Residential</h2>
                <span>
                  <img src="/images/dashboard-overview-active-plan-detail-play-icon.svg" />
                  ACTIVE
                </span>
                <h3>Metered</h3>
              </div>
              <div className="dashboard_overview_active_plan_detail_con2">
                <div className="dashboard_overview_active_plan_detail_sub_con">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-ips-qty-icon.svg" />{" "}
                    IP Quantity
                  </h2>
                  <h3>500 IPs</h3>
                </div>
                <div className="dashboard_overview_active_plan_detail_sub_con">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-hard-drive-icon.svg" />{" "}
                    Bandwidth
                  </h2>
                  <h3>20 GB</h3>
                </div>
                <div className="dashboard_overview_active_plan_detail_sub_con">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-calendar-icon.svg" />{" "}
                    Plan Length
                  </h2>
                  <h3>30 Days</h3>
                </div>
              </div>
              <div className="dashboard_overview_active_plan_detail_con3">
                <div className="dashboard_overview_active_plan_detail_sub_con">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-money-icon.svg" />{" "}
                    Paid on <span>Dec 01, 2022</span>
                  </h2>
                  <h3>$300.00</h3>
                </div>
                <div className="dashboard_overview_active_plan_detail_sub_con dashboard_overview_active_plan_detail_sub_h3">
                  <h2>
                    <img src="/images/dashboard-overview-active-plan-detail-time-icon.svg" />{" "}
                    Ends on <span>Dec 31, 2022, 23:59 PM EST</span>
                  </h2>
                  <h3>20 Days left</h3>
                </div>
              </div>
            </div>
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
              <a href="#!" id="aCHIFFRAGEV">
                <button type="button">View order history</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
