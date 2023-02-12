import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container footer_main_con">
        <div className=" footer_main_sub_con_wrapper">
        <div className=" footer_main_sub_con1">
          <Image
            alt="logo"
            width={150}
            height={37}
            src="/images/logo.svg"
            className="footer_logo"
          />
          <ul>
            <li>
              <Link href="/#!">
                <Image
                  alt="soc"
                  width={24}
                  height={24}
                  src="/images/footer-twitter-icon.svg"
                />
              </Link>
            </li>
            <li>
              <Link href="/#!">
                <Image
                  alt="soc"
                  width={24}
                  height={24}
                  src="/images/footer-youtube-icon.svg"
                />
              </Link>
            </li>
            <li>
              <Link href="/#!">
                <Image
                  alt="soc"
                  width={24}
                  height={24}
                  src="/images/footer-discord-icon.svg"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer_sub_con1 col">
          <h4 className="footer_marixon_name">Overview</h4>
          <ul>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/proxy-tester">Proxy Tester</Link>
            </li>
            <li>
              <Link href="https://liveservers.io" target="_blank">
                Live Servers
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer_sub_con2 col">
          <h4 className="footer_marixon_name">Pricing</h4>
          <ul>
            <li>
              <Link href="/rotating-residential-proxies-pricing">
                Rotating Residential Proxies
              </Link>
            </li>
            <li>
              <Link href="/static-residential-proxies-pricing">
                Static Residential Proxies
              </Link>
            </li>
            <li>
              <Link href="/rotating-mobile-proxies-pricing">
                Rotating Mobile Proxies
              </Link>
            </li>
            <li>
              <Link href="/custom-pricing">All in One Custom Solution</Link>
            </li>
          </ul>
        </div>
        <div className="footer_sub_con3 col">
          <h4>Legal</h4>
          <ul>
            <li>
              <Link href="/#!">Refund Policy</Link>
            </li>
            <li>
              <Link href="/#!">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/#!">Terms of Use</Link>
            </li>
          </ul>
        </div>
        <div className="footer_sub_con4 col">
          <h4>Support</h4>
          <ul>
            <li>
              <Link href="https://helpcenter.liveproxies.io/hc/en-us">
                Help Center
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer_sub_con5 col">
          <h4>Company</h4>
          <ul>
            {/* <li>
              <Link href="/#!">About</Link>
            </li> */}
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
        </div>
        <div className="container footer_copyright_con text-center">
          <h5>© 2023 Live Proxies. All Rights Reserved.</h5>
        </div>
      </div>
    </footer>
  );
}
