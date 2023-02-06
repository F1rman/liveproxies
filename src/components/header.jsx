import Link from "next/link";

export default function Header() {
return (
      <header>
      <div className="main_menubar">
        <div className="container main_inner_menubar">
          <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12 logo_con">
            <Link href="/" className="logo"></Link>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-6 hidden-xs navbar_second_column_con">
            <ul className="main_menu">
              <li className="main_menu_about_con">
                <Link href="/" className="navbar_about_btn">
                  Home
                </Link>
              </li>
              <li className="main_menu_services_con">
                <Link
                  href="/dashboard"
                  className="navbar_services_btn"
                  target="_blank"
                >
                  Dashboard
                </Link>
              </li>
              <li className="main_menu_services_con">
                <Link
                  href="https://helpcenter.liveproxies.io/hc/en-us"
                  className="navbar_services_btn"
                >
                  Help Center
                </Link>
              </li>
              <ul className="navbar-nav navbar-nav-first">
                <li className="dropdown">
                  <Link
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Tools
                    <span>
                      <img src="/images/narbar-arrow-dropdown.svg" />
                    </span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        href="/proxy-tester"
                        className="navbar_dropdown_menu_list_item"
                      >
                        <span>Proxy Tester</span>
                        <br />
                        <br />
                        <p>Verify your proxy connection</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://liveservers.io"
                        target="_blank"
                        className="navbar_dropdown_menu_list_item"
                      >
                        <span>Live Servers</span>
                        <br />
                        <br />
                        <p>Unleash your bot’s full potential</p>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav navbar-nav-second">
                <li className="dropdown">
                  <Link
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pricing
                    <span>
                      <img src="/images/narbar-arrow-dropdown.svg" />
                    </span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        href="/rotating-residential-proxies-pricing"
                        className="navbar_dropdown_menu_list_item"
                      >
                        <img src="/images/navbar-pricing-house-ips.svg" />
                        <span>Rotating Residential Proxies</span>
                        <p>Constantly refreshed residential IPs</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/static-residential-proxies-pricing"
                        className="navbar_dropdown_menu_list_item"
                      >
                        <img src="/images/navbar-pricing-static-ips.svg" />
                        <span>Static Residential Proxies</span>
                        <p>Continuous unchanging residential IPs</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/rotating-mobile-proxies-pricing"
                        className="navbar_dropdown_menu_list_item"
                      >
                        <img src="/images/navbar-pricing-mobile-ips.svg" />
                        <span>Rotating Mobile Proxies</span>
                        <p>4G/5G mobile device IPs</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/custom-pricing"
                        className="navbar_dropdown_menu_list_item"
                      >
                        <img src="/images/navbar-pricing-custom.svg" />
                        <span>All in One Custom Solution</span>
                        <p>Enterprise level tailored plans</p>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 hidden-xs navbar_third_column_con">
            <ul className="main_menu">
              <li>
                <Link href="/sign-in">Log In</Link>
              </li>
              <li>
                <Link href="/sign-up">
                  <button type="button" className="navbar_get_care_btn">
                    Sign Up
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="visible-xs mobile_menu">
          <div className="proj-menu-collapsed">
            <div className="proj-bar">
              <a className="proj-menu-toggle"></a>
            </div>
            <nav className="xsnavlist">
              <div className="mobile_view_list_con">
                <div
                  className="mobile_view_list_with_no_dropdown_con"
                  id="mobile_view_list_with_no_dropdown_get_log"
                >
                  <li className="mobile_view_list_items">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="mobile_view_list_items">
                    <Link href="/dashboard" target="_blank">
                      Dashboard
                    </Link>
                  </li>
                  <li className="mobile_view_list_items">
                    <Link href="https://helpcenter.liveproxies.io/hc/en-us">
                      Help Center
                    </Link>
                  </li>
                </div>
                <div className="panel-default xs_collapse_explore">
                  <div className="care_options">
                    <a href={'#'} data-toggle="collapse" data-target="#collapseExplore1">
                      <h6 className="care_options_text">
                        Tools{" "}
                        <img
                          src="/images/narbar-arrow-dropdown-black.svg"
                          className="care_options_arrow_down"
                        />
                      </h6>
                    </a>
                  </div>
                  <div id="collapseExplore1" className="collapse">
                    <li>
                      <Link href="/proxy-tester">Proxy Tester</Link>
                    </li>
                    <li>
                      <Link href="/https://liveservers.io" target="_blank">
                        Live Servers
                      </Link>
                    </li>
                  </div>
                </div>
                <div className="panel-default xs_collapse_explore">
                  <div className="care_options">
                    <a href={'#'} data-toggle="collapse" data-target="#collapseExplore2">
                      <h6 className="care_options_text">
                        Pricing{" "}
                        <img
                          src="/images/narbar-arrow-dropdown-black.svg"
                          className="care_options_arrow_down"
                        />
                      </h6>
                    </a>
                  </div>
                  <div id="collapseExplore2" className="collapse">
                    <li>
                      <Link href="/rotating-residential-proxies-pricing">
                        <img src="/images/navbar-pricing-house-ips.svg" />
                        Rotating Residential Proxies
                      </Link>
                    </li>
                    <li>
                      <Link href="/static-residential-proxies-pricing">
                        <img src="/images/navbar-pricing-static-ips.svg" />
                        Static Residential Proxies
                      </Link>
                    </li>
                    <li>
                      <Link href="/rotating-mobile-proxies-pricing">
                        <img src="/images/navbar-pricing-mobile-ips.svg" />
                        Rotating Mobile Proxies
                      </Link>
                    </li>
                    <li>
                      <Link href="/custom-pricing">
                        <img src="/images/navbar-pricing-custom.svg" />
                        All in One Custom Solution
                      </Link>
                    </li>
                  </div>
                </div>
                <div
                  className="mobile_view_list_with_no_dropdown_con"
                  id="mobile_view_list_with_no_dropdown_get_log"
                >
                  <li className="mobile_view_list_items">
                    <Link href="/sign-in">Log In</Link>
                  </li>
                  <li className="mobile_view_list_items">
                    <Link href="/sign-up">Sign Up</Link>
                  </li>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>)


}