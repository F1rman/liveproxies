import Footer from "@/components/footer";
import Header from "@/components/header";
import Questions from "@/components/questions";
import Link from "next/link";
import { useState } from "react";

export default function ResetPassword() {
  const [success, setSuccess] = useState(false);
  return (
    <div className="reset_password_page_wrapper sign_in_page_wrapper">
      <div className="sign_in_main_con">
        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 sign_in_sub_con1">
          <div>
            <span className="sign_in_logo_text_con">
              <span className="sign_in_logo_text_inner_con1">
                <img src="/images/sign-in-check-icon.svg" />
                <h5>Access proxies</h5>
              </span>
              <span className="sign_in_logo_text_inner_con2">
                <img src="/images/sign-in-check-icon.svg" />
                <h5>Analyze usage stats</h5>
              </span>
              <span className="sign_in_logo_text_inner_con3">
                <img src="/images/sign-in-check-icon.svg" />
                <h5>Set reminders</h5>
              </span>
            </span>
          </div>
        </div>
        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 sign_in_sub_con2">
          {!success ? (
            <div className="sign_in_reg_form text-center">
              <form action="">
                <h2>Forgot password?</h2>
                <h4>We’ll send you a link to reset your password.</h4>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="reg-form-control"
                  required
                />
                <br />
                <a
                  href="#"
                  onClick={() => {
                    setSuccess(true);
                  }}
                  className="login_acct_btn"
                >
                  <button type="submit">Reset password</button>
                </a>
                <span>
                  <Link href="/sign-in">Back to Log In</Link>
                </span>
              </form>
            </div>
          ) : (
              <div className="sign_in_reg_form text-center">
                <form action="">
                  <h2>Success!</h2>
                  <h4>
                    You’ll receive an email with a reset link shortly if an
                    account exists with that email.
                  </h4>
                  <a href="#" className="login_acct_btn">
                    <button type="button">Go to Live Proxies</button>
                  </a>
                  <br />
                  <h5>
                    <Link href="/sign-in">Log In</Link>{" "}
                  </h5>
                </form>
              </div>
          )}
        </div>
      </div>
    </div>
  );
}
