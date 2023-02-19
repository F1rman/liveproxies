import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function RefundPolicy() {
  return (
    <div className="privasy">
      <Header />
      <main className="jss1 ">
        <div className="jss10">
          <div className="MuiBox-root jss38 jss14">
            <h3 className="MuiTypography-root jss13 MuiTypography-h3">
              <b>Refund</b> Policy
            </h3>
          </div>
        </div>
        <div className="jss11 container">
          <div
            className="MuiContainer-root jss3 MuiContainer-maxWidthLg"
            width="1200px"
          >
            <div className="MuiPaper-root jss8 MuiPaper-elevation1 MuiPaper-rounded">
              <div className="jss7">
                <h1>Refund Policy</h1>
                <p>
                  Since the Website offers non-tangible, irrevocable goods we do
                  not provide refunds after the product is purchased, which you
                  acknowledge prior to purchasing any product on the Website.
                  Please make sure that you&apos;ve carefully read service
                  description before making a purchase.
                </p>
                <h2>Contacting us</h2>
                <p>
                  If you would like to contact us concerning any matter relating
                  to this Refund Policy, you may send an email to <Link href="https://liveproxies.io/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="4d39282c200d21243b283d3f223524283e632422">[email&nbsp;protected]</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
