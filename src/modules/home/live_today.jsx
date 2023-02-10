import Link from "next/link";

export default function LiveToday() {
  return (
    <section>
      <div className="get_your_live_today_main_con text-center">
        <div className="container get_your_live_today_con">
          <h2>
            Get your <span>Live today</span>
          </h2>
          <h3>You simply won’t find a better solution.</h3>
          <Link href="/sign-up">Create your account</Link>
        </div>
      </div>
    </section>
  );
}
