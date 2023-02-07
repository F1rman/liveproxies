import Link from "next/link";
import { useState } from "react";

export default function DashboardQuestions(props) {
  const [open, setOpen] = useState(0);
  function collapse(e, i) {
    console.log(e, i);
    e.preventDefault();
    if (open == i) {
      setOpen(0);
    } else {
      setOpen(i);
    }
  }
  return (
    <div className="overview_live_proxies_faqs_main_con">
      <div className="  overview_live_proxies_faqs_con">
        <h2>Frequently asked questions</h2>
        <div
          onClick={(e) => {
            collapse(e, 1);
          }}
          className={
            open == 1
              ? "overview_live_proxies_faqs_module active"
              : "overview_live_proxies_faqs_module "
          }
        >
          <div className={"overview_live_proxies_faqs_head"}>
            <p>What are the PRIVATE Live Proxies?</p>
          </div>
          <div
            style={{ display: open == 1 ? "block" : "none" }}
            className={
              open == 1
                ? "overview_live_proxies_faqs_body active"
                : "overview_live_proxies_faqs_body"
            }
          >
            Technically it&apos;s possible, but you won&apos;t find this option
            on your dashboard. To match your custom solution requirements, you
            must open a ticket on our Discord server or email us.
          </div>
        </div>
        <div
          onClick={(e) => {
            collapse(e, 2);
          }}
          className={
            open == 2
              ? "overview_live_proxies_faqs_module active"
              : "overview_live_proxies_faqs_module "
          }
        >
          <div className={"overview_live_proxies_faqs_head"}>
            <p>How can I join the Live Proxies Discord server?</p>
          </div>
          <div
            style={{ display: open == 2 ? "block" : "none" }}
            className={
              open == 2
                ? "overview_live_proxies_faqs_body active"
                : "overview_live_proxies_faqs_body"
            }
          >
            Technically it&apos;s possible, but you won&apos;t find this option
            on your dashboard. To match your custom solution requirements, you
            must open a ticket on our Discord server or email us.
          </div>
        </div>
        <div
          onClick={(e) => {
            collapse(e, 3);
          }}
          className={
            open == 3
              ? "overview_live_proxies_faqs_module active"
              : "overview_live_proxies_faqs_module "
          }
        >
          <div className={"overview_live_proxies_faqs_head"}>
            <p>Do you guys offer no data-limited plans?</p>
          </div>
          <div
            style={{ display: open == 3 ? "block" : "none" }}
            className={
              open == 3
                ? "overview_live_proxies_faqs_body active"
                : "overview_live_proxies_faqs_body"
            }
          >
            Technically it&apos;s possible, but you won&apos;t find this option
            on your dashboard. To match your custom solution requirements, you
            must open a ticket on our Discord server or email us.
          </div>
        </div>
        <div
          onClick={(e) => {
            collapse(e, 4);
          }}
          className={
            open == 4
              ? "overview_live_proxies_faqs_module active"
              : "overview_live_proxies_faqs_module "
          }
        >
          <div className={"overview_live_proxies_faqs_head"}>
            <p>Do you ever plan on making ISP or DC proxies?</p>
          </div>
          <div
            style={{ display: open == 4 ? "block" : "none" }}
            className={
              open == 4
                ? "overview_live_proxies_faqs_body active"
                : "overview_live_proxies_faqs_body"
            }
          >
            Technically it&apos;s possible, but you won&apos;t find this option
            on your dashboard. To match your custom solution requirements, you
            must open a ticket on our Discord server or email us.
          </div>
        </div>
        <div
          onClick={(e) => {
            collapse(e, 5);
          }}
          className={
            open == 5
              ? "overview_live_proxies_faqs_module active"
              : "overview_live_proxies_faqs_module "
          }
        >
          <div className={"overview_live_proxies_faqs_head"}>
            <p>Are those residential proxies only?</p>
          </div>
          <div
            style={{ display: open == 5 ? "block" : "none" }}
            className={
              open == 5
                ? "overview_live_proxies_faqs_body active"
                : "overview_live_proxies_faqs_body"
            }
          >
            Technically it&apos;s possible, but you won&apos;t find this option
            on your dashboard. To match your custom solution requirements, you
            must open a ticket on our Discord server or email us.
          </div>
        </div>
        
        <div
          onClick={(e) => {
            collapse(e, 6);
          }}
          className={
            open == 6
              ? "overview_live_proxies_faqs_module active"
              : "overview_live_proxies_faqs_module "
          }
        >
          <div className={"overview_live_proxies_faqs_head"}>
            <p>Can I filter the proxies by state, city, and ISP carrier?</p>
          </div>
          <div
            style={{ display: open == 6 ? "block" : "none" }}
            className={
              open == 6
                ? "overview_live_proxies_faqs_body active"
                : "overview_live_proxies_faqs_body"
            }
          >
            Technically it&apos;s possible, but you won&apos;t find this option
            on your dashboard. To match your custom solution requirements, you
            must open a ticket on our Discord server or email us.
          </div>
        </div>

        <div
          onClick={(e) => {
            collapse(e, 7);
          }}
          className={
            open == 7
              ? "overview_live_proxies_faqs_module active"
              : "overview_live_proxies_faqs_module "
          }
        >
          <div className={"overview_live_proxies_faqs_head"}>
            <p>What are the best use cases for Live Proxies?</p>
          </div>
          <div
            style={{ display: open == 7 ? "block" : "none" }}
            className={
              open == 7
                ? "overview_live_proxies_faqs_body active"
                : "overview_live_proxies_faqs_body"
            }
          >
            Technically it&apos;s possible, but you won&apos;t find this option
            on your dashboard. To match your custom solution requirements, you
            must open a ticket on our Discord server or email us.
          </div>
        </div>
        <div
          onClick={(e) => {
            collapse(e, 8);
          }}
          className={
            open == 8
              ? "overview_live_proxies_faqs_module active"
              : "overview_live_proxies_faqs_module "
          }
        >
          <div className={"overview_live_proxies_faqs_head"}>
            <p>What are the websites Live Proxies works best?</p>
          </div>
          <div
            style={{ display: open == 8 ? "block" : "none" }}
            className={
              open == 8
                ? "overview_live_proxies_faqs_body active"
                : "overview_live_proxies_faqs_body"
            }
          >
            Technically it&apos;s possible, but you won&apos;t find this option
            on your dashboard. To match your custom solution requirements, you
            must open a ticket on our Discord server or email us.
          </div>
        </div>
        
      </div>
    </div>
  );
}
