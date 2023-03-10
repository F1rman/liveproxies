import Head from "next/head";
import Link from "next/link";
import {  useState } from "react";

export default function SignIn() {
const [show,setShow] = useState(false);

  return (
    <>
      <Head>
        <title>Sign in</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>


      <div className="sign_in_page_wrapper">
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
            <div className="sign_in_reg_form text-center">
              <form action="">
                <h2>Log in to your account</h2>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="reg-form-control"
                  required
                />
                <input
                  id="password-field"
                  type={!show?"password":'text'}
                  className="reg-form-control"
                  name="password"
                  placeholder="Enter password"
                  minLength="4"
                  required
                />
                <span
                onClick={()=>{
                  setShow(!show)
                }}
                  toggle="#password-field"
                  className={!show?"password_eye_icon":'password_eye_icon password_canceled_eye_icon'}
                  id="password_eye"
                ></span>
                <Link
                  href="/reset-password"
                  className="login_forgot_pass_text_con"
                >
                  Forgot your password?
                </Link>
                <br />
                <Link href="/#!" className="login_acct_btn">
                  <button type="submit">Log In</button>
                </Link>
                <h3>OR</h3>
                <Link href="/#!" className="login_discord_btn">
                  <button type="button">Log In with Discord</button>
                </Link>
                <br />
                <Link href="/#!" className="login_google_btn">
                  <button type="button">Log In with Google</button>
                </Link>
                <br />
                <span>
                  Don???t have an account yet? <Link href="/sign-up">Sign Up</Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
