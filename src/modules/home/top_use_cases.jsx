import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import $ from "jquery";
import Image from "next/image";
export default function TopUseCases() {
  const navBar = [
    {
      imgA: "top-use-cases-e-commerce-active-icon",
      img: "top-use-cases-e-commerce-icon",
      title: "eCommerce",
    },
    {
      img: "top-use-cases-smm-icon",
      imgA: "top-use-cases-smm-active-icon",
      title: "SMM",
    },
    {
      imgA: "top-use-cases-market-research-active-icon",
      img: "top-use-cases-market-research-icon",
      title: "Market Research",
    },
    {
      imgA: "top-use-cases-nft-active-icon",
      img: "top-use-cases-nft-icon",
      title: "NFT",
    },
    {
      img: "top-use-cases-esports-icon",
      imgA: "top-use-cases-esports-active-icon",
      title: "Gaming",
    },
    {
      img: "top-use-cases-seoserp-icon",
      imgA: "top-use-cases-seoserp-active-icon",
      title: "SEO/SERP",
    },
    {
      img: "top-use-cases-adtech-icon",
      imgA: "top-use-cases-adtech-active-icon",
      title: "AdTech",
    },
  ];
  useEffect(() => {
    addSlideTopNavigation();
    $(window).resize(function () {
      addSlideTopNavigation();
    });
  }, []);
  function addSlideTopNavigation() {
    $(".topNavigation li ").each((i, e) => {
      $(e).off();
      $(e).click(() => {
        console.log($(e).clientWidht);
        $(".topNavigation .line").css({
          left: $(e).position().left,
          width: $(e).width(),
        });
      });
    });
  }
  const [tab, setTab] = useState(0);
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    arrows: false,
    dots: true,
    fade: true,
    speed: 50,
    pauseOnHover: false,
  };
  return (
    <section>
      <div className="top_use_cases_main_con top_use_cases_first_main_con container text-center">
        <h2>
          Top use <span>cases</span>
        </h2>
        <h3>Scrape data anonymously and access content in any geo-location</h3>

        <div className="tile" id="tile-1">
        <div className="overflow_x">
          <ul className="topNavigation">
            <div className="line"></div>
            {navBar.map((e, i) => {
              return (
                <li
                  onClick={() => {
                    setTab(i);
                  }}
                  className={tab == i ? "active" : ""}
                  key={e.title}
                >
                  <Image
                    src={"/images/" + e.img + ".svg"}
                    alt={e.title}
                    width={30}
                    height={20}
                  />
                  <div className="hover">
                    <Image
                      src={"/images/" + e.imgA + ".svg"}
                      alt={e.title}
                      width={30}
                      height={20}
                    />
                  </div>
                  {e.title}
                </li>
              );
            })}
          </ul>
          </div>

          <div className="tab-content text-center">
            <div
              className={
                tab == 0 ? "tab-pane active fade in" : "tab-pane fade in"
              }
              id="ecommerce"
            >
              <div className="container top_use_content_con">
                <div className="top_use_content_img_con col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div></div>
                </div>
                <Slider {...settings} className="ecommerce_inner_slider">
                  <div className="slide">
                    <img src="/images/top-use-cases-e-maps-img-clothes-and-sneakers.svg" />
                  </div>
                  <div className="slide">
                    <img src="/images/top-use-cases-e-maps-img-computer.svg" />
                  </div>
                  <div className="slide">
                    <img src="/images/top-use-cases-e-maps-img-basket-ball-cards.svg" />
                  </div>
                </Slider>
                <div className="top_use_content_text_con col-lg-8 col-md-8 col-sm-8 col-xs-12">
                  <h2>Streamline your operations to maximize success</h2>
                  <h4>
                    Optimize your pricing strategy and manage your inventory
                    efficiently by acquiring valuable insights on your
                    competition, products, and markets. Automate tasks and
                    streamline operations to save time and minimize resources.
                  </h4>
                </div>
              </div>
            </div>
            <div
              className={tab == 1 ? "tab-pane active fade in" : "tab-pane fade"}
              id="smm"
            >
              <div className="container top_use_content_con">
                <div className="top_use_content_img_con col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div></div>
                </div>
                <div className="top_use_content_text_con col-lg-8 col-md-8 col-sm-8 col-xs-12">
                  <h2>Dominate the social media landscape</h2>
                  <h4>
                    Unlock the full potential of your social media strategy by
                    staying on top of trends and knowing what your customers and
                    audiences want. Enhance your data collection and social
                    listening capabilities to stay ahead of the competition and
                    reach new markets.
                  </h4>
                  <div>
                    <li>
                      <Link href="/#!"></Link>
                    </li>
                    <li>
                      <Link href="/#!"></Link>
                    </li>
                    <li>
                      <Link href="/#!"></Link>
                    </li>
                    <li>
                      <Link href="/#!"></Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={tab == 2 ? "tab-pane active fade in" : "tab-pane fade"}
              id="market_research"
            >
              <div className="container top_use_content_con">
                <div className="top_use_content_img_con col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div></div>
                </div>
                <div className="top_use_content_text_con col-lg-8 col-md-8 col-sm-8 col-xs-12">
                  <h2>Increase and speed up your research</h2>
                  <h4>
                    Unlock global market insights, bypass IP restrictions, and
                    predict trends by swiftly gathering data with Live Proxies.
                    With a comprehensive market research, you can know your
                    customers and target audience better helping you stay ahead
                    of the competition.
                  </h4>
                </div>
              </div>
            </div>
            <div
              className={tab == 3 ? "tab-pane active fade in" : "tab-pane fade"}
              id="nft"
            >
              <div className="container top_use_content_con">
                <div className="top_use_content_img_con col-lg-3 col-md-4 col-sm-4 col-xs-12">
                  <div></div>
                </div>
                <div className="top_use_content_text_con col-lg-9 col-md-8 col-sm-8 col-xs-12">
                  <h2>Automate your NFT tasks with ease</h2>
                  <h4>
                    Get past strict proxy restrictions and automate your NFT
                    tasks from creating multiple accounts to going for limited
                    releases. Furthermore, effortlessly scrape data to collect
                    information on NFT prices, sales, and trends, as well as
                    monitor NFTs.
                  </h4>
                </div>
              </div>
            </div>
            <div
              className={tab == 4 ? "tab-pane active fade in" : "tab-pane fade"}
              id="esports"
            >
              <div className="container top_use_content_con">
                <div className="top_use_content_img_con col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div></div>
                </div>
                <div className="top_use_content_text_con col-lg-8 col-md-8 col-sm-8 col-xs-12">
                  <h2>Stay ahead of the game</h2>
                  <h4>
                    Enhance your gaming experience by bypassing geographical
                    restrictions and IP blocks while on an anonymous connection.
                    Advance in your game by completing all game levels and using
                    your software with our proxies to keep your account
                    protected.
                  </h4>
                </div>
              </div>
            </div>
            <div
              className={tab == 5 ? "tab-pane active fade in" : "tab-pane fade"}
              id="seoserp"
            >
              <div className="container top_use_content_con">
                <div className="top_use_content_img_con col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div></div>
                </div>
                <div className="top_use_content_text_con col-lg-8 col-md-8 col-sm-8 col-xs-12">
                  <h2>Seamlessly boost rankings and export search results</h2>
                  <h4>
                    Scrape SERP and build backlinks to conduct keyword research,
                    gather rankings data, and analyze competition and consumer
                    trends. Additionally, avoid bans and search keywords from
                    different geographical locations to help reach the right
                    audience.
                  </h4>
                </div>
              </div>
            </div>
            <div
              className={tab == 6 ? "tab-pane active fade in" : "tab-pane fade"}
              id="addtech"
            >
              <div className="container top_use_content_con">
                <div className="top_use_content_img_con col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div></div>
                </div>
                <div className="top_use_content_text_con col-lg-8 col-md-8 col-sm-8 col-xs-12">
                  <h2>Ensure ad quality while protecting brand image</h2>
                  <h4>
                    Verify your ads meet your expectations and are clear of
                    fraudulent or harmful activity without getting detected to
                    help protect your brand image. Maximize your ad campaigns by
                    easily testing and monitoring them with no issues.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
