import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SideBar(props) {
  const [not, setNot] = useState(true);
  useEffect(() => {
    if (props.tab == 2) {
      setNot(false);
    }
  }, [props.tab]);
  return (
    <div className="sidebar col-lg-2 col-md-3 col-sm-3 col-xs-3">
      <Link href="/" className="logo"></Link>
      <div className="dashboard_sidebar_logo_con"></div>
      <ul className="nav-links">
        <h5>MANAGE</h5>
        <li>
          <div
            onClick={() => {
              props.setTab(0);
            }}
            className={
              props.tab == 0
                ? "active show_live_servers_con"
                : " show_live_servers_con"
            }
          >
            <div className="dashboard_sidebar_icons_con1">
              <Image
                alt="dashboard-overview-icon.svg"
                width={17}
                height={19}
                src="/images/dashboard-overview-icon.svg"
              />
            </div>
            <span className="links_name">Overview</span>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              props.setTab(1);
            }}
            className={
              props.tab == 1
                ? "active hide_live_servers_con"
                : " hide_live_servers_con"
            }
          >
            <div className="dashboard_sidebar_icons_con2">
              <Image
                alt="dashboard-order-history-icon.svg"
                width={18}
                height={20}
                src="/images/dashboard-order-history-icon.svg"
              />
            </div>
            <span className="links_name">Order History</span>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              props.setTab(2);
            }}
            className={
              props.tab == 2
                ? "active hide_live_servers_con"
                : " hide_live_servers_con"
            }
          >
            <div className="dashboard_sidebar_icons_con3">
              <Image
                alt="dashboard-notifications-icon.svg"
                width={18}
                height={20}
                src="/images/dashboard-notifications-icon.svg"
              />
            </div>
            {not && (
              <span className="dashboard_sidebar_notifica_number_con">3</span>
            )}
            <span className="links_name">Notifications</span>
          </div>
        </li>
        <br />
        <br />
        <h5>USER</h5>
        <li>
          <div
            onClick={() => {
              props.setTab(3);
            }}
            className={
              props.tab == 3
                ? "active hide_live_servers_con"
                : " hide_live_servers_con"
            }
          >
            <div className="dashboard_sidebar_icons_con4">
              <Image
                alt="dashboard-usage-analytics-icon.svg"
                width={24}
                height={17}
                src="/images/dashboard-usage-analytics-icon.svg"
              />
            </div>
            <span className="links_name">Usage Analytics</span>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              props.setTab(4);
            }}
            className={
              props.tab == 4
                ? "active hide_live_servers_con"
                : " hide_live_servers_con"
            }
          >
            <div className="dashboard_sidebar_icons_con5">
              <Image
                alt="dashboard-ip-authorization-icon.svg"
                width={18}
                height={20}
                src="/images/dashboard-ip-authorization-icon.svg"
              />
            </div>
            <span className="links_name">IP Authorization</span>
          </div>
        </li>
        <li>
          <div className={"dashboard_support_con"}>
            <div className="dashboard_sidebar_icons_con6">
              <Image
                alt="dashboard-support-icon.svg"
                width={18}
                height={18}
                src="/images/dashboard-support-icon.svg"
              />
            </div>
            <Link
              href="https://helpcenter.liveproxies.io/hc/en-us"
              target="_blank"
            >
              <span className="links_name">Support</span>
            </Link>
          </div>
        </li>
        <li>
          <div className="dashboard_logout_con">
            <div className="dashboard_sidebar_icons_con7">
              <Image
                alt=""
                width={16}
                height={17}
                src="/images/dashboard-logout-icon.svg"
              />
            </div>
            <Link href="/sign-in">
              <span className="links_name">Log Out</span>
            </Link>
          </div>
        </li>
        <div className="dashboard_live_servers_con">
          <h5>LIVE SERVERS</h5>
          <Link href="https://liveservers.io" target="_blank">
            <div></div>
          </Link>
          <button type="button">
            <Link href="https://liveservers.io" target="_blank">
              GET LIVE SERVERS
            </Link>
          </button>
        </div>
        <div className="dashboard_social_icons_con">
          <a href="#!"></a>
          <a href="#!"></a>
          <a href="#!"></a>
          <h6>© 2023 Live Proxies</h6>
        </div>
      </ul>
    </div>
  );
}
