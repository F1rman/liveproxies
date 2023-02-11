import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import $ from "jquery";
import Questions from "@/components/questions";
import PriceHeader from "@/modules/pricing/priceHeader";

  

export default function RotatingMobileProxiesPricing() {

useEffect(()=>{

    var data = [
      { bandwidth: "8", days: 30, price: 100, ips: 200 },
      { bandwidth: "4", days: 45, price: 150, ips: 200 },
      { bandwidth: "10", days: 60, price: 150, ips: 200 },
      { bandwidth: "5", days: 15, price: 200, ips: 200 },
      { bandwidth: "16", days: 30, price: 250, ips: 350 },
      { bandwidth: "8", days: 45, price: 250, ips: 500 },
      { bandwidth: "32", days: 60, price: 300, ips: 750 },
      { bandwidth: "16", days: 30, price: 350, ips: 1000 },
    ];
    var data_slider = [
      { bandwidth: "8", days: 30, price: 100, ips: 200 },
      { bandwidth: "16", days: 45, price: 150, ips: 350 },
      { bandwidth: "32", days: 60, price: 200, ips: 500 },
    ];
  
    var ips = ["US", "CA", "UK", "RL", "States"];
  
    function init() {
      changeCountry();
      addLinks();
      rangeSliderChange();
  
      createCustomSelect();
    }
    init();
  
    function createCustomSelect() {
      applyDataToSelect();
      closeCustomSelect();
  
      $(".rotating_card").each((i, e) => {
        $(e)
          .find(".select")
          .click(() => {
            $(".select_items").removeClass("active");
            $(e).find(".select_items").addClass("active");
          });
  
        $(this).find(".select_items").addClass("active");
        $(e)
          .find(".select_wrapper .select_items > div")
          .click(function () {
            clearSlider();
            if ($(this).attr("data-value") == "-1") {
              $(this).parent().parent().find(".select").text('Not selected');
  
              removeCardActive();
            } else {
            var index = $(this).attr("data-value");
            var text = `<div>${data[index].ips} IPs | <span>$${data[index].price}</span>   </div><div>  ${data[index].bandwidth} GB / ${data[index].days} Days</div>`;
            $(this).parent().parent().find(".select").html(text);
            setCardActive(e);
            setPlanDetailsList(e, $(this).attr("data-value"));
          }
          $(".select_items").removeClass("active");
  
          });
      });
    }
    $(".rotating_card").each((i, e) => {
      $(e)
        .find(".buy_now")
        .click(() => {
          if ($(e).hasClass("active")) {
            return;
          }
          clearPlanDetailsList();
          clearSlider();
          setCardActive(e);
            var text = `<div>${data[0].ips} IPs | <span>$${data[0].price}</span>   </div><div>  ${data[0].bandwidth} GB / ${data[0].days} Days</div>`;
            $(e)
            .find(".select")
            .eq(0)
            .html(
              text
            );
        });
    });
  
    function setCardActive(e) {
      removeCardActive();
      $(e).addClass("active");
      setPlanDetailsList(e, 0);
  
      $(".buy_now").each((i2, e2) => {
        $(e2).text(`Choose ${ips[i2]} IPs`);
      });
      $(".buy_now").removeClass("active");
      $(e).find(".buy_now").text("Buy Now").addClass("active");
      $(".rotating_card:not(.active) .select").text(`Not selected`)
    }
  
    function setPlanDetailsList(e, index) {
      $(e).find(".hard_drive").css("display", "block");
      $(e).find(".calendar").css("display", "block");
      $(e).find(".i-ps").css("display", "block");
    
      $(e)
        .find(".gig")
        .text(data[index].bandwidth + " GB");
      $(e)
        .find(".length_days")
        .text(data[index].days + " Days");
      $(e)
        .find(".ips")
        .text(data[index].ips + " IPs");
      $(e).find(".price").text(data[index].price);
    }
    function setPlanDetailsListSlider(e, index) {
      $(e).find(".hard_drive").css("display", "block");
      $(e).find(".calendar").css("display", "block");
      $(e).find(".i-ps").css("display", "block");
    
      $(e)
        .find(".gig")
        .text(data_slider[index].bandwidth + " GB");
      $(e)
        .find(".length_days")
        .text(data_slider[index].days + " Days");
      $(e)
        .find(".ips")
        .text(data_slider[index].ips + " IPs");
      $(e).find(".price").text(data_slider[index].price);
    }
    function clearPlanDetailsList() {
      $(".gig").text("—");
      $(".ips").text("—");
      $(".length_days").text("—");
      $(".price").text(0);
      $(".hard_drive").css("display", "none");
      $(".i-ps").css("display", "none");
      $(".calendar").css("display", "none");
    }
    function clearSlider() {
      $("#states_ip").removeClass("active");
      $("#states_ip").text(`Choose States IPs`);
      $(".range-labels li").removeClass("active selected");
      $("#range").val(1);
      $(".slider .range .after").css("width", "0");
      if ($("#range").val() - 1 == 0) {
        clearPlanDetailsList();
      }
      $(".info_wrapper .hard_drive").css("display", "none");
      $(".info_wrapper .calendar").css("display", "none");
    }
    function removeCardActive() {
      $(".buy_now").removeClass("active");
      $(".rotating_card").removeClass("active");
      clearPlanDetailsList();
    }
  
    function rangeSliderChange() {
      $("#range").on("input change", (e) => {
        removeCardActive();
        clearPlanDetailsList();
        var sliderValue = $("#range").val() - 1;
        console.log(sliderValue);
        if (sliderValue > 0) {
          $(".buy_now").each((i2, e2) => {
            $(e2).text(`Choose ${ips[i2]} IPs`);
            $(e2).removeClass("active");
          });
          $("#states_ip").addClass("active");
          $("#states_ip").text(`Buy Now`);
        } else if (sliderValue == 0) {
          $("#states_ip").removeClass("active");
          $(".buy_now").each((i2, e2) => {
            $(e2).text(`Choose ${ips[i2]} IPs`);
          });
        }
        $(".range-labels li").removeClass("active selected");
        var curLabel = $(".range-labels").find(
          "li:nth-child(" + (sliderValue + 1) + ")"
        );
        curLabel.addClass("active selected");
        curLabel.prevAll().addClass("selected");
        var padding = "0";
        if (sliderValue == 2) {
          padding = "26px";
        } else if (sliderValue == 3) {
          padding = "52px";
        } else {
          padding = "0px";
        }
        $(".slider .range .after").css(
          "width",
          "calc(" + sliderValue * 33 + "% - " + padding + ")"
        );
        if ($("#range").val() - 1 == 0) {
          clearPlanDetailsList();
        } else {
          setPlanDetailsListSlider($(".rotating_slider"), $("#range").val() - 2);
        }
        $(".rotating_card:not(.active) .select").text('Not selected');
      });
    }
    $("#states_ip").click(() => {
      if ($("#states_ip").hasClass("active")) {
        return;
      }
      $("#range").val(2);
      $("#range").change();
    });
  
    $(".range-labels li").on("click", function () {
      var index = $(this).index();
  
      $("#range")
        .val(index + 1)
        .trigger("input");
    });
  
    function applyDataToSelect() {
      var html = '';
      
  
      data.map((item, i) => {
        html += `<div  data-value="${i}" class="item"><div>${item.ips} IPs | <span>$${item.price}</span>   </div><div>  ${item.bandwidth} GB / ${item.days} Days</div></div>`;
      });
  
      $(".rotating_card .select_wrapper .select_items").html(html);
      $(".rotating_card .select_wrapper .select").text("Not selected");
     
      $('.select_wrapper .select').eq(0).html(`<div>${data[0].ips} IPs | <span>$${data[0].price}</span>   </div><div>  ${data[0].bandwidth} GB / ${data[0].days} Days</div>`)
  
    }
    function changeCountry() {
      $("#changeCountry")
        .change(function () {
          $(".city").text($(this).val());
          var text = $(this).find("option:selected").text();
          var $aux = $("<select/>").append($("<option/>").text(text));
          $(this).after($aux);
          $(this).width($aux.width());
          $(".rotating_slider .select_wrapper").width($aux.width() + 60);
  
          $aux.remove();
        })
        .change();
    }
  
    function addLinks() {
      $("*[data-href]").each((i, e) => {
        $(e).click(() => {
          if (!$(e).hasClass("buy_now")) {
            location.href = $(e).attr("data-href");
          } else {
            if ($(e).hasClass("active")) {
              location.href = $(e).attr("data-href");
            }
          }
        });
      });
    }
    function closeCustomSelect() {
      $("body").click(function (event) {
        if (
          !$(event.target).closest(".rotating_card .select_wrapper").length &&
          !$(event.target).is(".rotating_card .select")
        ) {
          $(".select_items").removeClass("active");
        }
      });
    }
},[])
  return (
    <>
      <Head>
        <title>LIVE PROXIES | ROTATING RESIDENTIAL PROXIES PRICING</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="rotat_mobile_prox_pric_page_wrapper rotat_resid_prox_pric_page_wrapper home_page_wrapper custom-pricing_page_wrapper">
        <Header />
        <PriceHeader title={'Rotating Mobile'} onlyMetered/>

        
        <section className="rotating_section">
          <div className="info">
            <div className="bg_icon "></div>{" "}
            <span>
              {" "}
              Weigh the options of a metered plan with longer durations and
              traffic limits or unmetered plan with unlimited traffic but less
              IPs to optimize your proxy usage.
            </span>
          </div>
          <div className="container">
            <div className="rotatings_wrapper">
              <div className="rotating_card rotating_card_shadow active" id="card1">
                <div className="rotating_card_inner_con">
                  <div className="title blue">US | Rotating Mobile</div>
                  <div className="subtitle filter-item rotat_resid_meter_unmeter_one">
                    Metered
                  </div>
                  <div className="subtitle filter-item rotat_resid_meter_unmeter_two">
                    Unmetered
                  </div>
                  <div className="caption">
                    <span className="bold">Starts from</span>
                    {/* {} <div className="bg_icon icon_info tooltip"> */}
                    {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                    {/* </div> } */}
                  </div>
                  <div className="price_info">
                    <div className="price_plan">
                      <div className="dollar">$</div>
                      <div className="price">100</div>
                      <div className="plan">/Plan</div>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="list_info first">
                    <div className="caption">
                      <span>Origin of IPs</span>
                      {/* {} <div className="bg_icon icon_info tooltip"> */}
                      {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                      {/* </div> } */}
                    </div>
                    <div className="details_right_icon">
                      <span>United States</span>
                      <div className="bg_icon us"></div>
                    </div>
                  </div>
                  <div className="list_info ">
                    <div className="caption">
                      <span>IP Quantity</span>
                      {/* {} <div className="bg_icon icon_info tooltip"> */}
                      {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                      {/* </div> } */}
                    </div>
                    <div className="details_right_icon">
                      <span className="ips">200IPs</span>
                      <div className="bg_icon i-ps"></div>
                    </div>
                  </div>
                  <div className="list_info">
                    <div className="caption">
                      <span>Bandwidth</span>
                      {/* {} <div className="icon_info tooltip bg_icon"> */}
                      {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                      {/* </div> } */}
                    </div>
                    <div className="details_right_icon">
                      <span className="gig">5 GB</span>
                      <div className="bg_icon hard_drive"></div>
                    </div>
                  </div>
                  <div className="list_info">
                    <div className="caption">
                      <span>Plan Length</span>
                      {/* {} <div className="icon_info tooltip bg_icon"> */}
                      {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                      {/* </div> } */}
                    </div>
                    <div className="details_right_icon">
                      <span className="length_days">15 Days</span>
                      <div className="bg_icon calendar"></div>
                    </div>
                  </div>
                </div>
                <div className="select_wrapper">
                  <div className="select" tabIndex="1"></div>
                  <div className="select_items"></div>
                </div>
                <div className="promo">
                  <div className="input_with_label">
                    <label htmlFor="promo" className="">
                      Have a promo code?
                    </label>
                    <div className="input_wrapper">
                      <input type="text" placeholder="Enter code" id="promo" />
                      <div className="input_button " data-href="#!">
                        Apply
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn buy_now buy_now1 active" data-href="#!">
                  Buy Now
                </div>
                <div className="bg_icon stripe_right"></div>
              </div>
              <div className="rotating_card rotating_card_shadow">
                <div className="rotating_card_inner_con">
                  <div className="title red">CA | Rotating Mobile</div>
                  <div className="subtitle filter-item rotat_resid_meter_unmeter_one">
                    Metered
                  </div>
                  <div className="subtitle filter-item rotat_resid_meter_unmeter_two">
                    Unmetered
                  </div>
                  <div className="caption">
                    <span className="bold">Starts from</span>
                    {/* {} <div className="bg_icon icon_info tooltip"> */}
                    {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                    {/* </div> } */}
                  </div>
                  <div className="price_info">
                    <div className="price_plan">
                      <div className="dollar">$</div>
                      <div className="price">0</div>
                      <div className="plan">/Plan</div>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="list_info first">
                    <div className="caption">
                      <span>Origin of IPs</span>
                      {/* {} <div className="bg_icon icon_info tooltip"> */}
                      {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                      {/* </div> } */}
                    </div>
                    <div className="details_right_icon">
                      <span>Canada</span>
                      <div className="bg_icon ca"></div>
                    </div>
                  </div>
                  <div className="list_info ">
                    <div className="caption">
                      <span>IP Quantity</span>
                      {/* {} <div className="bg_icon icon_info tooltip"> */}
                      {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                      {/* </div> } */}
                    </div>
                    <div className="details_right_icon">
                      <span className="ips">—</span>
                      <div className="bg_icon i-ps"></div>
                    </div>
                  </div>
                  <div className="list_info">
                    <div className="caption">
                      <span>Bandwidth</span>
                      {/* {} <div className="icon_info tooltip bg_icon"> */}
                      {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                      {/* </div> } */}
                    </div>
                    <div className="details_right_icon">
                      <span className="gig">—</span>
                      <div className="bg_icon hard_drive"></div>
                    </div>
                  </div>
                  <div className="list_info">
                    <div className="caption">
                      <span>Plan Length</span>
                      {/* {} <div className="icon_info tooltip bg_icon"> */}
                      {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                      {/* </div> } */}
                    </div>
                    <div className="details_right_icon">
                      <span className="length_days">—</span>
                      <div className="bg_icon calendar"></div>
                    </div>
                  </div>
                </div>
                <div className="select_wrapper">
                  <div className="select" tabIndex="1"></div>
                  <div className="select_items"></div>
                </div>{" "}
                <div className="promo">
                  <div className="input_with_label">
                    <label htmlFor="promo" className="">
                      Have a promo code?
                    </label>
                    <div className="input_wrapper">
                      <input type="text" placeholder="Enter code" id="promo" />
                      <div className="input_button " data-href="#!">
                        Apply
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn buy_now buy_now2" data-href="#!">
                  Choose CA IPs
                </div>
                {/* {} <div className="bg_icon stripe_right"> */}
                {/* </div> } */}
              </div>
              <div className="rotating_card rotating_card_shadow">
                <div className="rotating_card_inner_con">
                  <div className="title purple">UK | Rotating Mobile</div>
                  <div className="subtitle filter-item rotat_resid_meter_unmeter_one">
                    Metered
                  </div>
                  <div className="subtitle filter-item rotat_resid_meter_unmeter_two">
                    Unmetered
                  </div>
                  <div className="caption">
                    <span className="bold">Starts from</span>
                    {/* {} <div className="bg_icon icon_info tooltip"> */}
                    {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                    {/* </div> } */}
                  </div>
                  <div className="price_info">
                    <div className="price_plan">
                      <div className="dollar">$</div>
                      <div className="price">0</div>
                      <div className="plan">/Plan</div>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="list_info first">
                    <div className="caption">
                      <span>Origin of IPs</span>
                      {/* {} <div className="bg_icon icon_info tooltip"> */}
                      {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                      {/* </div> } */}
                    </div>
                    <div className="details_right_icon">
                      <span>United Kingdom</span>
                      <div className="bg_icon uk"></div>
                    </div>
                  </div>
                  <div className="list_info ">
                    <div className="caption">
                      <span>IP Quantity</span>
                      {/* {} <div className="bg_icon icon_info tooltip"> */}
                      {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                      {/* </div> } */}
                    </div>
                    <div className="details_right_icon">
                      <span className="ips">—</span>
                      <div className="bg_icon i-ps"></div>
                    </div>
                  </div>
                  <div className="list_info">
                    <div className="caption">
                      <span>Bandwidth</span>
                      {/* {} <div className="icon_info tooltip bg_icon"> */}
                      {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                      {/* </div> } */}
                    </div>
                    <div className="details_right_icon">
                      <span className="gig">—</span>
                      <div className="bg_icon hard_drive"></div>
                    </div>
                  </div>
                  <div className="list_info">
                    <div className="caption">
                      <span>Plan Length</span>
                      {/* {} <div className="icon_info tooltip bg_icon"> */}
                      {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                      {/* </div> } */}
                    </div>
                    <div className="details_right_icon">
                      <span className="length_days">—</span>
                      <div className="bg_icon calendar"></div>
                    </div>
                  </div>
                </div>
                <div className="select_wrapper">
                  <div className="select" tabIndex="1"></div>
                  <div className="select_items"></div>
                </div>
                <div className="promo">
                  <div className="input_with_label">
                    <label htmlFor="promo" className="">
                      Have a promo code?
                    </label>
                    <div className="input_wrapper">
                      <input type="text" placeholder="Enter code" id="promo" />
                      <div className="input_button " data-href="#!">
                        Apply
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn buy_now buy_now3" data-href="#!">
                  Choose UK IPs
                </div>
                <div className="bg_icon stripe_right popular"></div>
              </div>
              <div className="rotating_card rotating_card_shadow">
                <div className="rotating_card_inner_con">
                  <div className="title green">RL | Rotating Mobile</div>
                  <div className="subtitle filter-item rotat_resid_meter_unmeter_one">
                    Metered
                  </div>
                  <div className="subtitle filter-item rotat_resid_meter_unmeter_two">
                    Unmetered
                  </div>
                  <div className="caption">
                    <span className="bold">Starts from</span>
                    {/* {} <div className="bg_icon icon_info tooltip"> */}
                    {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                    {/* </div> } */}
                  </div>
                  <div className="price_info">
                    <div className="price_plan">
                      <div className="dollar">$</div>
                      <div className="price">0</div>
                      <div className="plan">/Plan</div>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="list_info first">
                    <div className="caption">
                      <span>Origin of IPs</span>
                      {/* {} <div className="bg_icon icon_info tooltip"> */}
                      {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                      {/* </div> } */}
                    </div>
                    <div className="details_right_icon">
                      <span>Random Location</span>
                      <div className="bg_icon ww"></div>
                    </div>
                  </div>
                  <div className="list_info ">
                    <div className="caption">
                      <span>IP Quantity</span>
                      {/* {} <div className="bg_icon icon_info tooltip"> */}
                      {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                      {/* </div> } */}
                    </div>
                    <div className="details_right_icon">
                      <span className="ips">—</span>
                      <div className="bg_icon i-ps"></div>
                    </div>
                  </div>
                  <div className="list_info">
                    <div className="caption">
                      <span>Bandwidth</span>
                      {/* {} <div className="icon_info tooltip bg_icon"> */}
                      {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                      {/* </div> } */}
                    </div>
                    <div className="details_right_icon">
                      <span className="gig">—</span>
                      <div className="bg_icon hard_drive"></div>
                    </div>
                  </div>
                  <div className="list_info">
                    <div className="caption">
                      <span>Plan Length</span>
                      {/* {} <div className="icon_info tooltip bg_icon"> */}
                      {/* <div className="tooltiptext">Lorem ipsum dolor sit amet consectetur </div> */}
                      {/* </div> } */}
                    </div>
                    <div className="details_right_icon">
                      <span className="length_days">—</span>
                      <div className="bg_icon calendar"></div>
                    </div>
                  </div>
                </div>
                <div className="select_wrapper">
                  <div className="select" tabIndex="1"></div>
                  <div className="select_items"></div>
                </div>
                <div className="promo">
                  <div className="input_with_label">
                    <label htmlFor="promo" className="">
                      Have a promo code?
                    </label>
                    <div className="input_wrapper">
                      <input type="text" placeholder="Enter code" id="promo" />
                      <div className="input_button " data-href="#!">
                        Apply
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn buy_now buy_now4" data-href="#!">
                  Choose RL IPs
                </div>
                {/* {} <div className="bg_icon stripe_right"> */}
                {/* </div> } */}
              </div>
            </div>
          </div>
        </section>

        <Questions />
      </div>
      <Footer />
    </>
  );
}
