import Image from "next/image";
import Link from "next/link";

export default function TrustPilot() {
  return (
    <section>
    <div className="container the_most_realiable_main_con text-center">
      <Link href="/#!">
        <Image width={70} height={70} alt=""
          src="/images/the-most-realiable-trust-pilot-icon.png"
          className="the_most_realiable_trust_pilot_icon"
        />
      </Link>
      <h2>
        The most <span>reliable</span> proxy network
      </h2>
      <h3>
        Here at Live, we provide unique, stable, and unblocked proxies for
        any use case or site. We work diligently to make sure our proxies
        meet your expectations.
      </h3>
      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <Image width={70} height={70} alt="" src="/images/the-most-realiable-house-ips.svg" />
        <h4>Rotating Residential IPs</h4>
        <h5 className="f1">
          Leverage your experience with our anonymous, real-peer rotating
          residential proxies.
        </h5>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <Image width={70} height={70} alt="" src="/images/the-most-realiable-static-ips.svg" />
        <h4>Static Residential IPs</h4>
        <h5 className="f2">
          Enjoy keeping the same residential IPs for 30 days or longer.
        </h5>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <Image width={70} height={70} alt="" src="/images/the-most-realiable-mobile-ips.svg" />
        <h4>Rotating Mobile IPs</h4>
        <h5 className="f3">
          Have the liberty of becoming a mobile user with our stable mobile
          IPs.
        </h5>
      </div>
    </div>
  </section>
  );
}
