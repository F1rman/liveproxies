import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function GetSolutions() {
    var settings = {
        accessibility:false,
        slidesToShow:7, 
        autoplay:true,
        autoplaySpeed:0,
        speed:3000,
        dots: false,
        prevArrow: false,
        nextArrow: false, 
        pauseOnHover:false,
        cssEase: 'linear',
        ltr:true,
        infinite:true,
        variableWidth: true, 
        centerMode: true, 
        rtl:false,
        
      };
      var settings2 = {
        accessibility:false,
        slidesToShow:7, 
        autoplay:true,
        autoplaySpeed:0,
        speed:3000,
        dots: false,
        prevArrow: false,
        nextArrow: false, 
        pauseOnHover:false,
        cssEase: 'linear',
        ltr:true,
        infinite:true,
        variableWidth: true, 
        centerMode: true, 
        rtl:true,
        
      };
  return (
    <section>
        <div className="we_combined_the_main_con text-center">
          <div className="container we_combined_the_con">
            <h2>
              Get the results you need with a <span>solution</span> you can
              trust
            </h2>
            <div className="we_combined_wrapper">
            <div className="we_combined_the_sub_con1">
              <img src="/images/we-combined-the-quality-dedicated-i-ps.svg" />
              <h4>Dedicated IPs</h4>
              <h5>100% Private</h5>
            </div>
            <div className="we_combined_the_sub_con2">
              <img src="/images/we-combined-the-quality-uptime.svg" />
              <h4>High Uptime</h4>
              <h5>Proven Experience</h5>
            </div>
            <div className="we_combined_the_sub_con3">
              <img src="/images/we-combined-the-quality-unlimited.svg" />
              <h4>No Concurrency Limit</h4>
              <h5>Unlimited Threads</h5>
            </div>
            <div className="we_combined_the_sub_con4">
              <img src="/images/we-combined-the-quality-happy.svg" />
              <h4>10,000+</h4>
              <h5>Happy Users</h5>
            </div>
          </div>
          </div>
          <Slider className="gallery" {...settings}>
            <span>
              <img src="/images/we-combined-the-quality-target-logo.svg" />
            </span>
            <span>
              <img src="/images/we-combined-the-quality-ebay-logo.svg" />
            </span>
            <span>
              <img src="/images/we-combined-the-quality-snkrs-mobile-logo.svg" />
            </span>
            <span>
              <img src="/images/we-combined-the-quality-ticket-master-logo.svg" />
            </span>
            <span>
              <img src="/images/we-combined-the-quality-amazon-logo.svg" />
            </span>
            <span>
              <img src="/images/we-combined-the-quality-foot-locker-logo.svg" />
            </span>
            <span>
              <img src="/images/we-combined-the-quality-supreme-logo.svg" />
            </span>
            <span>
              <img src="/images/we-combined-the-quality-facebook-logo.svg" />
            </span>
          </Slider>

          <Slider  className="galleryleft" {...settings2}>
            <span>
              <img src="/images/we-combined-the-quality-live-nation-logo.svg" />
            </span>
            <span>
              <img src="/images/we-combined-the-quality-twitch-logo.svg" />
            </span>
            <span>
              <img src="/images/we-combined-the-quality-linkedin-logo.svg" />
            </span>
            <span>
              <img src="/images/we-combined-the-quality-walmart-logo.svg" />
            </span>
            <span>
              <img src="/images/we-combined-the-quality-youtube-logo.svg" />
            </span>
            <span>
              <img src="/images/we-combined-the-quality-google-logo.svg" />
            </span>
            <span>
              <img src="/images/we-combined-the-quality-shopify-logo.svg" />
            </span>
            <span>
              <img src="/images/we-combined-the-quality-craigslist-logo.svg" />
            </span>
          </Slider>
          </div>
      </section>
  );
}
