import Link from "next/link";

export default function SimpleManagementDashboard() {
  return (
    <section>
    <div className="simple_manage_dash_main_con text-center">
      <div className="container simple_manage_dash_con">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 simple_manage_dash_sub_con1">
          <h2>
            Simple management <span>dashboard</span>
          </h2>
          <h3>
            Get access to your private proxies and view your proxy analytics
            with ease.
          </h3>
          <Link href="/dashboard/">
            Enter dashboard
            <img src="/images/simple-management-dashbaord-arrow-up-right.svg" />
          </Link>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 simple_manage_dash_sub_con2">
          <div></div>
        </div>
      </div>
    </div>
  </section>
  );
}
