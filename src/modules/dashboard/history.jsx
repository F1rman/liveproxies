import Link from "next/link";
import { useState } from "react";
import DashboardQuestions from "./dashboard_questions";

export default function History(props) {
  return (
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
  );
}
