import Footer from "@/components/footer";
import Header from "@/components/header";
import Questions from "@/components/questions";
import SimpleManagementDashboard from "@/modules/home/simple_management_dashboard";
import GetSolutions from "@/modules/home/get_solution";
import LiveToday from "@/modules/home/live_today";
import Plans from "@/modules/home/plans";
import UtilizeFavouriteApp from "@/modules/home/utilize_favorite_app";
import WhyLiveProxies from "@/modules/home/why_live_proxies";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HomeHeader from "@/modules/home/home_header";
import TrustPilot from "@/modules/home/trust_pilot";
import TopUseCases from "@/modules/home/top_use_cases";

export default function Home() {
  return (
    <>
      <Head>
        <title>LIVE PROXIES</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeHeader />
	  <TrustPilot />
      <TopUseCases />

      <section>
        <div className="honest_price_no_surprises_main_con">
          <div className="container">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 honest_price_no_surprises_main_text_con">
              <div className="honest_price_no_surprises_main_text_inner_con">
                <Link href="/#!">
                  <img src="/images/honest-price-what-we-offer-trust-pilot-icon.svg" />
                </Link>
                <h2>
                  <span>Trusted Service</span> with full transparency
                </h2>
                <h4>
                  Our provision has proven itself to thousands of satisfied
                  users, and your account will inform you with all necessary
                  details about your proxies at no additional cost.
                </h4>
                <Link href="/sign-up.html">Create your account</Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 honest_price_no_surprises_main_img_con">
              <div className="sliderContainer">
                <div className="progress_bar_main_con">
                  <h1>What we offer</h1>
                  <h2>
                    With a variety of options, select the plan that best suits
                    your needs
                  </h2>
                  <div className="progressBarContainer">
                    <div>
                      <h3>Residential</h3>
                      <h4>Rotating</h4>
                      <span data-slick-index="0" className="progressBar"></span>
                    </div>
                    <div>
                      <h3>Residential</h3>
                      <h4>Static</h4>
                      <span data-slick-index="1" className="progressBar"></span>
                    </div>
                    <div>
                      <h3>Mobile</h3>
                      <h4>Rotating</h4>
                      <span data-slick-index="2" className="progressBar"></span>
                    </div>
                  </div>
                </div>
                <div className="slider single-item">
                  <div className="slide1">
                    <div className="what_we_offer_meter_unmeter_con top_use_cases_main_con container text-center">
                      <div className="tile" id="tile-1">
                        <ul
                          className="nav metered_resid_rotate_nav-tabs metered_unmetered_nav-tabs text-center nav-justified"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <Link
                              className="nav-link case_trends_bigger_chart_stats_btn_selectors active"
                              id="metered-tab"
                              data-toggle="tab"
                              href="#metered"
                            >
                              Metered
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link case_trends_bigger_chart_stats_btn_selectors"
                              id="unmetered-tab"
                              data-toggle="tab"
                              href="#unmetered"
                            >
                              Unmetered
                            </Link>
                          </li>
                          <div className="top_use_cases_slider"></div>
                        </ul>
                        <div className="tab-content text-center">
                          <div className="tab-pane active" id="metered">
                            <div className="container top_use_content_con">
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-us-icon.svg" />
                                <h2>United States</h2>
                                <h6>State proxies offered separately</h6>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$70.00</h4>
                                <h5>per plan</h5>
                              </div>
                              <span></span>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-ca-icon.svg" />
                                <h2>Canada</h2>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$70.00</h4>
                                <h5>per plan</h5>
                              </div>
                              <span></span>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-gb-icon.svg" />
                                <h2>United Kingdom</h2>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$70.00</h4>
                                <h5>per plan</h5>
                              </div>
                              <span></span>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-ww-icon.svg" />
                                <h2>Random Location</h2>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$70.00</h4>
                                <h5>per plan</h5>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="unmetered">
                            <div className="container top_use_content_con">
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-us-icon.svg" />
                                <h2>United States</h2>
                                <h6>State proxies offered separately</h6>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$120.00</h4>
                                <h5>per plan</h5>
                              </div>
                              <span></span>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-ca-icon.svg" />
                                <h2>Canada</h2>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$120.00</h4>
                                <h5>per plan</h5>
                              </div>
                              <span></span>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-gb-icon.svg" />
                                <h2>United Kingdom</h2>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$120.00</h4>
                                <h5>per plan</h5>
                              </div>
                              <span></span>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-ww-icon.svg" />
                                <h2>Random Location</h2>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$120.00</h4>
                                <h5>per plan</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide2">
                    <div className="what_we_offer_meter_unmeter_con top_use_cases_main_con container text-center">
                      <div className="tile" id="tile-1">
                        <ul
                          className="nav metered_resid_static_nav-tabs metered_unmetered_nav-tabs text-center nav-justified"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <Link
                              className="nav-link active"
                              id="metered-tab"
                              data-toggle="tab"
                              href="#metered_resid_static"
                            >
                              Metered
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              id="unmetered-tab"
                              data-toggle="tab"
                              href="#unmetered_resid_static"
                            >
                              Unmetered
                            </Link>
                          </li>
                          <div className="top_use_cases_slider"></div>
                        </ul>
                        <div className="tab-content text-center">
                          <div
                            className="tab-pane active"
                            id="metered_resid_static"
                          >
                            <div className="container top_use_content_con">
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-us-icon.svg" />
                                <h2>United States</h2>
                                <h6>State proxies offered separately</h6>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$35.00</h4>
                                <h5>per plan</h5>
                              </div>
                              <span></span>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-ca-icon.svg" />
                                <h2>Canada</h2>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$35.00</h4>
                                <h5>per plan</h5>
                              </div>
                              <span></span>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-gb-icon.svg" />
                                <h2>United Kingdom</h2>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$35.00</h4>
                                <h5>per plan</h5>
                              </div>
                              <span></span>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-ww-icon.svg" />
                                <h2>Random Location</h2>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$35.00</h4>
                                <h5>per plan</h5>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="unmetered_resid_static"
                          >
                            <div className="container top_use_content_con">
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-us-icon.svg" />
                                <h2>United States</h2>
                                <h6>State proxies offered separately</h6>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$97.00</h4>
                                <h5>per plan</h5>
                              </div>
                              <span></span>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-ca-icon.svg" />
                                <h2>Canada</h2>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$97.00</h4>
                                <h5>per plan</h5>
                              </div>
                              <span></span>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-gb-icon.svg" />
                                <h2>United Kingdom</h2>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$97.00</h4>
                                <h5>per plan</h5>
                              </div>
                              <span></span>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-ww-icon.svg" />
                                <h2>Random Location</h2>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$97.00</h4>
                                <h5>per plan</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide3">
                    <div className="what_we_offer_meter_unmeter_con top_use_cases_main_con container text-center">
                      <div className="tile" id="tile-1">
                        <ul
                          className="nav metered_mobile_rotat_nav-tabs metered_unmetered_nav-tabs text-center nav-justified"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <Link
                              className="nav-link active"
                              id="metered-tab"
                              data-toggle="tab"
                              href="#metered_mobile_rotat"
                            >
                              Metered
                            </Link>
                          </li>
                          <div className="top_use_cases_slider"></div>
                        </ul>
                        <div className="tab-content text-center">
                          <div
                            className="tab-pane active"
                            id="metered_mobile_rotat"
                          >
                            <div className="container top_use_content_con">
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-us-icon.svg" />
                                <h2>United States</h2>
                                <h6>State proxies offered separately</h6>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$62.00</h4>
                                <h5>per plan</h5>
                              </div>
                              <span></span>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-ca-icon.svg" />
                                <h2>Canada</h2>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$62.00</h4>
                                <h5>per plan</h5>
                              </div>
                              <span></span>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-gb-icon.svg" />
                                <h2>United Kingdom</h2>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$62.00</h4>
                                <h5>per plan</h5>
                              </div>
                              <span></span>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 what_we_offer_meter_unmeter_flag_con">
                                <img src="/images/honest-price-what-we-offer-ww-icon.svg" />
                                <h2>Random Location</h2>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-9 what_we_offer_meter_unmeter_price_con">
                                <h3>Starts from</h3>
                                <h4>$62.00</h4>
                                <h5>per plan</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyLiveProxies />
	  <Plans />
      <GetSolutions />
      <SimpleManagementDashboard />
      <UtilizeFavouriteApp />
      <Questions />
      <LiveToday />
      <Footer />
    </>
  );
}
