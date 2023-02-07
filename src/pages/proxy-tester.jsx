import Footer from "@/components/footer";
import Header from "@/components/header";
import Questions from "@/components/questions";
import Link from "next/link";
import { useState } from "react";

export default function ProxyTester() {
  return (
    <div className="proxy_tester_page_wrapper home_page_wrapper">
      <Header />
      <section>
        <div className="hero_img">
          <div className="hero_img_inner_con container">
            <h2>
              Proxy <span>Tester</span>
            </h2>
            <h3>
              The most advanced and accurate free proxy tester application is
              now available by Live Proxies.
            </h3>
            <Link href="/#!">
              <button type="button">Download</button>
            </Link>
            <h4>
              <img src="/images/proxy-tester-hero-windows-icon.svg" />
              Windows (1.0 Mb)
            </h4>
            <div className="hero_img_desktop_con"></div>
          </div>
        </div>
      </section>

      <Questions />
      <Footer />
    </div>
  );
}
