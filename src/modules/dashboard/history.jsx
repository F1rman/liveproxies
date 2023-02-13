import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DashboardQuestions from "./dashboard_questions";

export default function History(props) {
  const items = [
    {
      PlanName: "UK | Static Residential",
      Bandwidth: "Unmetered",
      RolloverGB: "—",
      IPQuantity: "200 IPs",
      Status: 0,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "Dec 31, 2022",
    },
    {
      PlanName: "US | Rotating Residential",
      Bandwidth: "Unmetered",
      RolloverGB: "—",
      IPQuantity: "200 IPs",
      Status: 1,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "Dec 31, 2022",
    },
    {
      PlanName: "US | Rotating Mobile",
      Bandwidth: "8GB",
      RolloverGB: "—",
      IPQuantity: "200 IPs",
      Status: 1,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "Dec 31, 2022",
    },
    {
      PlanName: "US | Rotating Mobile",
      Bandwidth: "8GB",
      RolloverGB: "2.0 GB",
      IPQuantity: "200 IPs",
      Status: 2,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "Dec 31, 2022",
    },
    {
      PlanName: "US | Rotating Mobile",
      Bandwidth: "8GB",
      RolloverGB: "1.5 GB",
      IPQuantity: "200 IPs",
      Status: 2,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "Dec 31, 2022",
    },
    {
      PlanName: "US | Rotating Mobile",
      Bandwidth: "8GB",
      RolloverGB: "6.5 GB",
      IPQuantity: "200 IPs",
      Status: 2,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "Dec 31, 2022",
    },
    {
      PlanName: "US | Rotating Mobile",
      Bandwidth: "8GB",
      RolloverGB: "3.55 GB",
      IPQuantity: "500 IPs",
      Status: 2,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "Dec 31, 2022",
    },
    {
      PlanName: "US | Rotating Mobile",
      Bandwidth: "8GB",
      RolloverGB: "—",
      IPQuantity: "500 IPs",
      Status: 2,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "—",
    },
    {
      PlanName: "US | Rotating Mobile",
      Bandwidth: "8GB",
      RolloverGB: "5.2 GB",
      IPQuantity: "500 IPs",
      Status: 2,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "—",
    },
    {
      PlanName: "US | Rotating Mobile",
      Bandwidth: "8GB",
      RolloverGB: "1.0 GB",
      IPQuantity: "500 IPs",
      Status: 2,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "Dec 31, 2022",
    },
    {
      PlanName: "UK | Static Residential",
      Bandwidth: "Unmetered",
      RolloverGB: "—",
      IPQuantity: "200 IPs",
      Status: 0,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "Dec 31, 2022",
    },
    {
      PlanName: "US | Rotating Residential",
      Bandwidth: "Unmetered",
      RolloverGB: "—",
      IPQuantity: "200 IPs",
      Status: 1,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "Dec 31, 2022",
    },
    {
      PlanName: "US | Rotating Mobile",
      Bandwidth: "8GB",
      RolloverGB: "—",
      IPQuantity: "200 IPs",
      Status: 1,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "Dec 31, 2022",
    },
    {
      PlanName: "US | Rotating Mobile",
      Bandwidth: "8GB",
      RolloverGB: "2.0 GB",
      IPQuantity: "200 IPs",
      Status: 2,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "Dec 31, 2022",
    },
    {
      PlanName: "US | Rotating Mobile",
      Bandwidth: "8GB",
      RolloverGB: "1.5 GB",
      IPQuantity: "200 IPs",
      Status: 2,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "Dec 31, 2022",
    },
    {
      PlanName: "US | Rotating Mobile",
      Bandwidth: "8GB",
      RolloverGB: "6.5 GB",
      IPQuantity: "200 IPs",
      Status: 2,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "Dec 31, 2022",
    },
    {
      PlanName: "US | Rotating Mobile",
      Bandwidth: "8GB",
      RolloverGB: "3.55 GB",
      IPQuantity: "500 IPs",
      Status: 2,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "Dec 31, 2022",
    },
    {
      PlanName: "US | Rotating Mobile",
      Bandwidth: "8GB",
      RolloverGB: "—",
      IPQuantity: "500 IPs",
      Status: 2,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "—",
    },
    {
      PlanName: "US | Rotating Mobile",
      Bandwidth: "8GB",
      RolloverGB: "5.2 GB",
      IPQuantity: "500 IPs",
      Status: 2,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "—",
    },
    {
      PlanName: "US | Rotating Mobile",
      Bandwidth: "8GB",
      RolloverGB: "1.0 GB",
      IPQuantity: "500 IPs",
      Status: 2,
      Length: "30 Days",
      
      StartDate: "Dec 01, 2022",
      PurchaseDate: "Dec 01, 2022",
      ExpiryDate: "Dec 31, 2022",
    },
  ];
  return (
    <div className="home-section" id="CHIFFRAGE">
      <div className="home-content" id="dashboard">
        <div className="sales-boxes">
          <div className="order_hist_buy_more_prox_con">
            <h2>Buy More Proxies</h2>
            <span>
              <Link
                href="/rotating-residential-proxies-pricing"
                target="_blank"
              >
                Rotating Residential
                <Image
                  width={7}
                  height={7}
                  alt={""}
                  src="/images/dashboard-overview-active-buy-standby-arrow-up-right.svg"
                />
              </Link>
            </span>
            <span>
              <Link href="/static-residential-proxies-pricing" target="_blank">
                Static Residential
                <Image
                  width={7}
                  height={7}
                  alt={""}
                  src="/images/dashboard-overview-active-buy-standby-arrow-up-right.svg"
                />
              </Link>
            </span>
            <span>
              <Link href="/rotating-mobile-proxies-pricing" target="_blank">
                Rotating Mobile
                <Image
                  width={7}
                  height={7}
                  alt={""}
                  src="/images/dashboard-overview-active-buy-standby-arrow-up-right.svg"
                />
              </Link>
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
              <div className="items_wrapper">
              {items.map((e) => {
                return (
                  <div
                    key={e}
                    className="order_hist_order_hist_inner_detail_con order_hist_order_hist_inner_detail_con2"
                  >
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                      <h4>{e.PlanName}</h4>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                      <h4>{e.Bandwidth}</h4>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                      <h4>{e.RolloverGB}</h4>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                      <h4>{e.IPQuantity}</h4>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                    {e.Status==2&&<span className="Expired">Expired</span>}
                    {e.Status==1&&<span className="Standby">Standby</span>}
                    {e.Status==0&&<span className="active">Active</span>}
                      
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                      <h4>{e.Length}</h4>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                      <h4>{e.StartDate}</h4>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                      <h4>{e.PurchaseDate}</h4>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                      <h4>{e.ExpiryDate}</h4>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                      <a href="#!">
                        <Image
                          width={10}
                          height={13}
                          alt="invoice"
                          src="/images/dashboard-order-history-pdf-invoice-icon.svg"
                        />
                        <span>View</span>
                      </a>
                    </div>
                  </div>
                );
              })}

              
              
            </div>
        </div>
          </div>
          <div className="recent-sales box">
            <DashboardQuestions />
          </div>
        </div>
      </div>
    </div>
  );
}
