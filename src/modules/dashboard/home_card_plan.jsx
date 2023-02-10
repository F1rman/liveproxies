export default function HomeCardPlan(props) {
  return (
    <div
      onClick={() => {
        props.setTab(props.index);
      }}
      className={
        props.index == props.tab
          ? "dashboard_overview_active_plan_detail_main_con  active " + (props.index!=0&&' dashboard_overview_active_plan_detail_main_con2')
          : "dashboard_overview_active_plan_detail_main_con " + (props.index!=0&&' dashboard_overview_active_plan_detail_main_con2')
      }
    >
      <div className="dashboard_overview_active_plan_detail_con1">
        <h2>US | Static Residential</h2>
        <span>
          <img src="/images/dashboard-overview-active-plan-detail-play-icon.svg" />
          ACTIVE
        </span>
        <h3>Metered</h3>
      </div>
      <div className="dashboard_overview_active_plan_detail_con2">
        <div className="dashboard_overview_active_plan_detail_sub_con">
          <h2>
            <img src="/images/dashboard-overview-active-plan-detail-ips-qty-icon.svg" />{" "}
            IP Quantity
          </h2>
          <h3>500 IPs</h3>
        </div>
        <div className="dashboard_overview_active_plan_detail_sub_con">
          <h2>
            <img src="/images/dashboard-overview-active-plan-detail-hard-drive-icon.svg" />{" "}
            Bandwidth
          </h2>
          <h3>20 GB</h3>
        </div>
        <div className="dashboard_overview_active_plan_detail_sub_con">
          <h2>
            <img src="/images/dashboard-overview-active-plan-detail-calendar-icon.svg" />{" "}
            Plan Length
          </h2>
          <h3>30 Days</h3>
        </div>
      </div>
      <div className="dashboard_overview_active_plan_detail_con3">
        <div className="dashboard_overview_active_plan_detail_sub_con">
          <h2>
            <img src="/images/dashboard-overview-active-plan-detail-money-icon.svg" />{" "}
            Paid on <span>Dec 01, 2022</span>
          </h2>
          <h3>$300.00</h3>
        </div>
        <div className="dashboard_overview_active_plan_detail_sub_con dashboard_overview_active_plan_detail_sub_h3">
          <h2>
            <img src="/images/dashboard-overview-active-plan-detail-time-icon.svg" />{" "}
            Ends on <span>Dec 31, 2022, 23:59 PM EST</span>
          </h2>
          <h3>20 Days left</h3>
        </div>
      </div>
    </div>
  );
}
