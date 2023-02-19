import Link from "next/link";
import { useState } from "react";

export default function DashboardQuestions(props) {
  const faq = [
    {
      title: "Can I purchase and use different proxy plans on a single account?",
      description:
        "Yes, it is possible to utilize multiple, different proxy plans on a single account.",
    },
    {
      title: "Can all available geolocations be used in the same plan?",
      description:
        "No, each plan can only be used for one of the pre-selected geolocations: US, CA, UK, and RL (mixed pool, excluding US, UK, and CA).",
    },
    {
      title: "How can I get proxies specific to a certain state or city?",
      description:
        "We only offer state-specific proxies for the United States. These proxies are rotating-residential and are available on a per-state basis per plan.",
    },
    {
      title: "Do you provide ISP/DC proxies?",
      description:
        "No, we do not currently support ISP/DC proxies.",
    },
    {
      title: "What payment methods are supported?",
      description:
        "We work with Stripe and accept several different payment forms, such as Google Pay, Apple Pay, AMEX, VISA, and Mastercard. PayPal, Zelle, and wire transfers are available upon request.",
    },
    {
      title: "Why is having a Discord account and joining the Live Discord server essential?",
      description:
        "By joining our private Discord server, which already has 14K+ members, you can reach out quickly to resolve any issues, receive instant notifications, real-time support, and many more.",
    },
    {
      title: "Can I resell Live Proxies?",
      description:
        "No, reselling is not allowed and we do not provide a reseller API.",
    },
    {
      title: "Do you have an affiliate program?",
      description:
        "No, we do not have an affiliate program at this time.",
    },
  ];
  const [open, setOpen] = useState(-1);

  return (
    <div className="overview_live_proxies_faqs_main_con">
      <div className="  overview_live_proxies_faqs_con">
        <h2>Frequently asked questions</h2>
        {faq.map((item, i) => {
          return (
            <div
              key={item.title}
              onClick={(e) => {
                if (i == open) {
                  setOpen(-1);
                } else {
                  setOpen(i);
                }
              }}
              className={
                open == i
                  ? "overview_live_proxies_faqs_module active"
                  : "overview_live_proxies_faqs_module "
              }
            >
              <div className={"overview_live_proxies_faqs_head"}>
                <p>{item.title}</p>
              </div>
              <div
                style={{ display: open == i ? "block" : "none" }}
                className={
                  open == i
                    ? "overview_live_proxies_faqs_body active"
                    : "overview_live_proxies_faqs_body"
                }
              >
              {item.description}
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
