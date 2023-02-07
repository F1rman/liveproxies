import DashboardQuestions from "@/modules/dashboard/dashboard_questions";
import SideBar from "@/modules/dashboard/sidebar";
import Link from "next/link";
import { useState } from "react";

export default function Dashboard(props) {
  const [tab, setTab] = useState(0);

  return (
    <div className="dashboard_page_wrapper home_page_wrapper">
      <div className="dashboard_gene_main_con">
        <header className="col-lg-10 col-md-9 col-sm-9 col-xs-9">
          <nav className="navbar">
            <span></span>
            <h4>
              Your IP address: <div>193.274.672.123</div>
            </h4>
          </nav>
        </header>
        <SideBar setTab={setTab} tab={tab} />

        <div className="home-section-con col-lg-10 col-md-9 col-sm-9 col-xs-9">
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
                                        <stop
                                          offset="0%"
                                          stop-color="#17afff"
                                        />
                                        <stop
                                          offset="100%"
                                          stop-color="#1f6bd3"
                                        />
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
                                        <stop
                                          offset="0%"
                                          stop-color="#18bf66"
                                        />
                                        <stop
                                          offset="100%"
                                          stop-color="#55cec7"
                                        />
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
                                <a
                                  className="link"
                                  href="#!"
                                  id="aINDICATEURSV"
                                >
                                  View Usage Analytics
                                </a>
                              </div>
                              <div className="select_wrapper">
                                <select>
                                  <option value="Past 7 days">
                                    Past 24 hours
                                  </option>
                                  <option value="Past 7 days">
                                    Past 3 days
                                  </option>
                                  <option value="Past 7 days">
                                    Past 7 days
                                  </option>
                                  <option value="Past 7 days">
                                    Past 30 days
                                  </option>
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
          <div className="home-section" id="CHIFFRAGE">
            <div className="home-content" id="dashboard">
              <div className="sales-boxes">
                <div className="order_hist_buy_more_prox_con">
                  <h2>Buy More Proxies</h2>
                  <span>
                    <a
                      href="/rotating-residential-proxies-pricing.html"
                      target="_blank"
                    >
                      Rotating Residential
                      <img src="/images/dashboard-overview-active-buy-standby-arrow-up-right.svg" />
                    </a>
                  </span>
                  <span>
                    <a
                      href="/static-residential-proxies-pricing.html"
                      target="_blank"
                    >
                      Static Residential
                      <img src="/images/dashboard-overview-active-buy-standby-arrow-up-right.svg" />
                    </a>
                  </span>
                  <span>
                    <a
                      href="/rotating-mobile-proxies-pricing.html"
                      target="_blank"
                    >
                      Rotating Mobile
                      <img src="/images/dashboard-overview-active-buy-standby-arrow-up-right.svg" />
                    </a>
                  </span>
                </div>
                <div className="order_hist_order_hist_detail_main_con">
                  <div className="order_hist_order_hist_detail_con">
                    <h2>Order history</h2>
                    <div className="order_hist_order_hist_inner_detail_con">
                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <h3>Plan Name</h3>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h3>Bandwidth</h3>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h3>Rollover GB</h3>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h3>IP Quantity</h3>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h3>Status</h3>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h3>Length</h3>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h3>Start Date</h3>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h3>Purchase Date</h3>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h3>Expiry Date</h3>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h3>Reciept</h3>
                      </div>
                    </div>
                    <div className="order_hist_order_hist_inner_detail_con order_hist_order_hist_inner_detail_con2">
                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <h4>CA | Rotating Residential</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>8GB</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>3.55 GB</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>500 IPs</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <span>Active</span>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>30 Days</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Dec 01, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Dec 01, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Dec 31, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <a href="#!">
                          <img src="/images/dashboard-order-history-pdf-invoice-icon.svg" />
                          <span>View</span>
                        </a>
                      </div>
                    </div>
                    <div className="order_hist_order_hist_inner_detail_con order_hist_order_hist_inner_detail_con3">
                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <h4>UK | Static Residential</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Unmetered</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>—</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>200 IPs</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <span>Standby</span>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>30 Days</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Dec 05, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Dec 05, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>—</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <a href="#!">
                          <img src="/images/dashboard-order-history-pdf-invoice-icon.svg" />
                          <span>View</span>
                        </a>
                      </div>
                    </div>
                    <div className="order_hist_order_hist_inner_detail_con order_hist_order_hist_inner_detail_con2 order_hist_order_hist_inner_detail_con3">
                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <h4>US | Rotating Residential</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Unmetered</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>—</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>200 IPs</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <span>Standby</span>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>30 Days</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Dec 12, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Dec 12, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>—</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <a href="#!">
                          <img src="/images/dashboard-order-history-pdf-invoice-icon.svg" />
                          <span>View</span>
                        </a>
                      </div>
                    </div>
                    <div className="order_hist_order_hist_inner_detail_con order_hist_order_hist_inner_detail_con3 order_hist_order_hist_inner_detail_con4">
                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <h4>US | Rotating Mobile</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>8GB</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>—</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>200 IPs</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <span>Expired</span>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>30 Days</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Nov 04, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Nov 04, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Dec 05, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <a href="#!">
                          <img src="/images/dashboard-order-history-pdf-invoice-icon.svg" />
                          <span>View</span>
                        </a>
                      </div>
                    </div>
                    <div className="order_hist_order_hist_inner_detail_con order_hist_order_hist_inner_detail_con2 order_hist_order_hist_inner_detail_con4">
                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <h4>US | Rotating Mobile</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>8GB</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>2.0 GB</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>200 IPs</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <span>Expired</span>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>30 Days</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Nov 04, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Nov 04, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Dec 05, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <a href="#!">
                          <img src="/images/dashboard-order-history-pdf-invoice-icon.svg" />
                          <span>View</span>
                        </a>
                      </div>
                    </div>
                    <div className="order_hist_order_hist_inner_detail_con order_hist_order_hist_inner_detail_con3 order_hist_order_hist_inner_detail_con4">
                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <h4>US | Rotating Mobile</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>8GB</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>1.5 GB</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>200 IPs</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <span>Expired</span>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>30 Days</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Nov 04, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Nov 04, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Dec 05, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <a href="#!">
                          <img src="/images/dashboard-order-history-pdf-invoice-icon.svg" />
                          <span>View</span>
                        </a>
                      </div>
                    </div>
                    <div className="order_hist_order_hist_inner_detail_con order_hist_order_hist_inner_detail_con2 order_hist_order_hist_inner_detail_con4">
                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <h4>US | Rotating Mobile</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>8GB</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>6.5 GB</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>200 IPs</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <span>Expired</span>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>30 Days</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Nov 04, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Nov 04, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Dec 05, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <a href="#!">
                          <img src="/images/dashboard-order-history-pdf-invoice-icon.svg" />
                          <span>View</span>
                        </a>
                      </div>
                    </div>
                    <div className="order_hist_order_hist_inner_detail_con order_hist_order_hist_inner_detail_con3 order_hist_order_hist_inner_detail_con4">
                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <h4>US | Rotating Mobile</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>8GB</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>—</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>200 IPs</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <span>Expired</span>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>30 Days</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Nov 04, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Nov 04, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Dec 05, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <a href="#!">
                          <img src="/images/dashboard-order-history-pdf-invoice-icon.svg" />
                          <span>View</span>
                        </a>
                      </div>
                    </div>
                    <div className="order_hist_order_hist_inner_detail_con order_hist_order_hist_inner_detail_con2 order_hist_order_hist_inner_detail_con4">
                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <h4>US | Rotating Mobile</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>8GB</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>5.2 GB</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>200 IPs</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <span>Expired</span>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>30 Days</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Nov 07, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Nov 04, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Dec 05, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <a href="#!">
                          <img src="/images/dashboard-order-history-pdf-invoice-icon.svg" />
                          <span>View</span>
                        </a>
                      </div>
                    </div>
                    <div className="order_hist_order_hist_inner_detail_con order_hist_order_hist_inner_detail_con3 order_hist_order_hist_inner_detail_con4">
                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <h4>US | Rotating Mobile</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>8GB</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>1.0 GB</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>200 IPs</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <span>Expired</span>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>30 Days</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Nov 12, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Nov 04, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <h4>Dec 05, 2022</h4>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <a href="#!">
                          <img src="/images/dashboard-order-history-pdf-invoice-icon.svg" />
                          <span>View</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="recent-sales box" >
                <DashboardQuestions />

              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section" id="PLANNING">
          <div className="home-content" id="dashboard">
            <div className="checkbox-container">
              <h2>Email Alerts</h2>
              <h3>Which emails would you like to receive?</h3>
              <input
                className="checkbox-input active"
                id=""
                type="checkbox"
                checked
              />
              <label className="checkbox" for="">
                <h4>Payment receipt and financial related</h4>
              </label>
              <input
                className="checkbox-input"
                id="email_alerts2"
                type="checkbox"
                checked
              />
              <label className="checkbox" for="email_alerts2">
                <h4>Plan expiration reminders</h4>
              </label>
              <input
                className="checkbox-input active"
                id="email_alerts3"
                type="checkbox"
              />
              <label className="checkbox" for="email_alerts3">
                <h4>Expired plan notification emails</h4>
              </label>
              <input
                className="checkbox-input"
                id="email_alerts4"
                type="checkbox"
              />
              <label className="checkbox" for="email_alerts4">
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
        <div className="home-section" id="INDICATEURS">
          <div className="home-content" id="dashboard">
            <div className="usage_analytics_gen_con">
              <div className="usage_analytics_main_con">
                <h2>Usage Analytics</h2>
                <div className="usage_analytics_download_sort_con">
                  <a href="#!">
                    <img src="/images/dashboard-usage-analytics-download-icon.svg" />
                  </a>
                  <a href="#!">
                    <img src="/images/dashboard-usage-analytics-sort-icon.svg" />
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
                    <div className="faqs_languages_dropdown">
                      <div className="faqs_languages_caption">
                        Past 24 hours
                      </div>
                      <img src="/images/contact-us-arrow-down-icon.svg" />
                      <div className="faqs_languages_list">
                        <div className="faqs_languages_item">Past 24 hours</div>
                        <div className="faqs_languages_item">Past 3 days</div>
                        <div className="faqs_languages_item">Past 7 days</div>
                        <div className="faqs_languages_item">Past 30 days</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="usage_analytics_toggle_main_con">
                  <div className="usage_analytics_toggle_con1">
                    <input type="checkbox" />
                    <img src="/images/dashboard-usage-analytics-calendar-icon.svg" />
                    <h5>Date</h5>
                  </div>
                  <div className="usage_analytics_toggle_con1 usage_analytics_toggle_con2">
                    <input type="checkbox" onChange={() => {}} checked />
                    <img src="/images/dashboard-usage-analytics-globe-icon.svg" />
                    <h5>Location</h5>
                  </div>
                  <div className="usage_analytics_toggle_con1 usage_analytics_toggle_con3">
                    <input type="checkbox" />
                    <img src="/images/dashboard-usage-analytics-box-icon.svg" />
                    <h5>Domain</h5>
                  </div>
                  <div className="usage_analytics_toggle_con1 usage_analytics_toggle_con4">
                    <input type="checkbox" />
                    <img src="/images/dashboard-usage-analytics-source-icon.svg" />
                    <h5>Instance IP address</h5>
                    <span className="tooltip-container">
                      <img src="/images/dashboard-usage-analytics-info-icon.svg" />
                      <span className="tooltip">Instance IP address</span>
                    </span>
                  </div>
                  <div className="usage_analytics_toggle_con1 usage_analytics_toggle_con5">
                    <input type="checkbox" />
                    <img src="/images/dashboard-usage-analytics-errors-icon.svg" />
                    <h5>Errors</h5>
                    <span className="tooltip-container">
                      <img src="/images/dashboard-usage-analytics-info-icon.svg" />
                      <span className="tooltip">Errors</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="usage_analytics_figure_stats_main_con">
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 usage_analytics_figure_stats_sub_con1">
                  <h5>Number of Request</h5>
                  <span className="tooltip-container">
                    <img src="/images/dashboard-usage-analytics-info-icon.svg" />
                    <span className="tooltip">Number of Request</span>
                  </span>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 usage_analytics_figure_stats_sub_con1">
                  <h5>Successful Request</h5>
                  <span className="tooltip-container">
                    <img src="/images/dashboard-usage-analytics-info-icon.svg" />
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
        <div className="home-section" id="FACTURATION">
          <div className="home-content" id="dashboard">
            <div className="ip_authorization_main_con">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 ip_authorization_main_sub_con1">
                <h1>IP Authorization</h1>
                <h2>Add Your Instance IP Address</h2>
                <br />
                <form>
                  <input
                    type="text"
                    placeholder="000.000.00.000"
                    required
                    min="0"
                    maxlength="14"
                    id="review_card_number_input"
                  />
                  <a href="#!">
                    <button type="submit">Add</button>
                  </a>
                </form>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 ip_authorization_main_sub_con2">
                <h1>Your Authorized IPs</h1>
                <h2>Review IP Lists</h2>
                <br />
                <div className="ip_authorization_inner_sub_con2">
                  <div className="ip_authorization_main_inner_con1">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <h3>IP Address</h3>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <h3>Status</h3>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <h3>Action</h3>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-4 col-sm-4 col-xs-4 ip_authorization_main_inner_con2"
                    id="sectiontohide4"
                  >
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <h4>192.168.12.123</h4>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <h5>
                        <img src="/images/dashboard-ip-authorization-check-icon.svg" />
                        Selected
                      </h5>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <h6 onclick="toggle_div_fun4('sectiontohide4');">
                        <img src="/images/dashboard-ip-authorization-delete-icon.svg" />
                        Delete
                      </h6>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-4 col-sm-4 col-xs-4 ip_authorization_main_inner_con3"
                    id="sectiontohide5"
                  >
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <h4>192.228.20.111</h4>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <h5>
                        <img src="/images/dashboard-ip-authorization-check-icon.svg" />
                        Selected
                      </h5>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <h6 onclick="toggle_div_fun5('sectiontohide5');">
                        <img src="/images/dashboard-ip-authorization-delete-icon.svg" />
                        Delete
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DashboardQuestions />
          </div>
        </div>
      </div>
    </div>
  );
}
