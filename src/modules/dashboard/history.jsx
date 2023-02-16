import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DashboardQuestions from "./dashboard_questions";

export default function History(props) {
  const header_titles = [
    "Plan Name",
    "Bandwidth",
    "Rollover GB",
    "IP Quantity",
    "Status",
    "Length",
    "Start Date",
    "Purchase Date",
    "Expiry Date",
    "Reciept",
  ];
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
              <h2>Order history</h2>
              <div className="table_history_scroll">
            <div className="table_history">
              <div className="table_header">
                {header_titles.map((item, i) => (
                  <div key={item + i} className="item">
                   {item}
                  </div>
                ))}
              </div>
              <div className="items_wrapper">
                {items.map((e,i) => {
                  return (
                    <div
                      key={e+i}
                      className="table_row"
                    >
                      <div className="item">
                        {e.PlanName}
                      </div>
                      <div className="item">
                        {e.Bandwidth}
                      </div>
                      <div className="item">
                        {e.RolloverGB}
                      </div>
                      <div className="item">
                        {e.IPQuantity}
                      </div>
                      <div className="item">
                        {e.Status == 2 && (
                          <span className="status Expired">Expired</span>
                        )}
                        {e.Status == 1 && (
                          <span className="status Standby">Standby</span>
                        )}
                        {e.Status == 0 && (
                          <span className="status active">Active</span>
                        )}
                      </div>
                      <div className="item">
                        {e.Length}
                      </div>
                      <div className="item">
                        {e.StartDate}
                      </div>
                      <div className="item">
                        {e.PurchaseDate}
                      </div>
                      <div className="item">
                        {e.ExpiryDate}
                      </div>
                      <div className="item">
                          <Image
                            width={10}
                            height={13}
                            alt="invoice"
                            src="/images/dashboard-order-history-pdf-invoice-icon.svg"
                          />
                          <span onClick={()=>{
                            console.log('download')
                          }}>View</span>
                      </div>
                    </div>
                  );
                })}
              </div>
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
