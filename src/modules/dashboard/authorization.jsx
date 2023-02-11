import Image from "next/image";
import { useEffect, useState } from "react";
import DashboardQuestions from "./dashboard_questions";
import $ from "jquery";

export default function Authorization(props) {
  const [value, setValue] = useState();
  const [ips, setIps] = useState([
    "192.168.1.123",
    "192.168.12.123",
    "192.228.20.111",
  ]);

  return (
    <div className="home-section" id="FACTURATION">
      <div className="home-content" id="dashboard">
        <div className="ip_authorization_main_con">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 ip_authorization_main_sub_con1">
            <h1>IP Authorization</h1>
            <h2>Add Your Instance IP Address</h2>
            <br />
            <form>
              <input
                type="text"
                placeholder="000.000.00.000"
                required
                min="0"
                maxength="14"
                value={value}
                onChange={(e) => {
                  setValue(
                    e.target.value
                      .replace(/[^\d]/g, "")
                      .replace(/\d{3}(?!$|(?:\$))/g, "$&.")
                  );
                }}
              />
              <div
                onClick={() => {
                  if (value) {
                    setIps([...ips, value]);
                    setValue("");
                  }
                }}
              >
                <button type="button">Add</button>
              </div>
            </form>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 ip_authorization_main_sub_con2">
            <h1>Your Authorized IPs</h1>
            <h2>Review IP Lists</h2>
            <br />
            <div className="ip_authorization_inner_sub_con2">
              <div className="ip_authorization_main_inner_con1">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <h3>IP Address</h3>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <h3>Status</h3>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <h3>Action</h3>
                </div>
              </div>
              {ips.map((e) => {
                return (
                  <div
                    key={e}
                    className="col-lg-4 col-md-4 col-sm-4 col-xs-4 ip_authorization_main_inner_con2"
                    id="sectiontohide4"
                  >
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <h4>{e}</h4>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <h5>
                        <Image
                          width={12}
                          height={12}
                          alt="remove"
                          src="/images/dashboard-ip-authorization-check-icon.svg"
                        />
                        Selected
                      </h5>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <h6
                        onClick={() => {
                          var filteredArray = ips.filter(function (e2) {
                            return e2 !== e;
                          });
                          setIps(filteredArray);
                        }}
                      >
                        <Image
                          width={12}
                          height={12}
                          alt="remove"
                          src="/images/dashboard-ip-authorization-delete-icon.svg"
                        />
                        Delete
                      </h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <DashboardQuestions />
      </div>
    </div>
  );
}
