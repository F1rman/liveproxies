import $ from "jquery";
import { useEffect } from "react";

export default function HomeAnalitycs(props) {
  useEffect(() => {
    
      gradientCircle();
      gradientCircle2();

    function gradientCircle() {
      var count = $(".c1");
      $({ Counter: 0 }).animate(
        { Counter: 8.27 },
        {
          duration: 1000,
          easing: "swing",
          step: function () {
            count.html(this.Counter.toFixed(2));
          },
        }
      );

      var s = Snap(".animated");
      var progress = s.select("#progress");
      var one100procent = "251.2";
      progress.attr({ strokeDasharray: "0, " + one100procent });
      Snap.animate(
        0,
        200.2,
        function (value) {
          progress.attr({ "stroke-dasharray": value + "," + one100procent });
        },
        1000
      );
    }
    function gradientCircle2() {
      var count = $(".c2");
      $({ Counter: 0 }).animate(
        { Counter: 20 },
        {
          duration: 1000,
          easing: "swing",
          step: function () {
            count.html(this.Counter.toFixed(0));
          },
        }
      );

      var s = Snap(".animated2");
      var progress = s.select("#progress2");
      var one100procent = "251.2";
      progress.attr({ strokeDasharray: "0, " + one100procent });
      Snap.animate(
        0,
        100.2,
        function (value) {
          progress.attr({ "stroke-dasharray": value + "," + one100procent });
        },
        1000
      );
    }
  }, []);

  return (
    <div className="card analitycs">
      <div className="item_wrapper">
        <div className="title_wrapper">
          <div className="title">Bandwidth</div>
          <div className="type_select">
            <div className="btn_type active">GB</div>
            <div className="btn_type">MB</div>
          </div>
        </div>
        <div className="chart_wrapper">
          <div className="svg_wrapper bandwidth">
            <svg
              className="animated"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#17afff" />
                  <stop offset="100%" stopColor="#1f6bd3" />
                </linearGradient>
              </defs>

              <path
                strokeLinecap="round"
                stroke="#f0f1f2"
                strokeWidth="8"
                fill="none"
                d="M50 10
                                   a 30 30 0 0 1 0 80
                                   a 30 30 0 0 1 0 -80"
              ></path>
              <path
                id="progress"
                strokeLinecap="round"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="none"
                d="M50 10
                                 a 30 30 0 0 1 0 80
                                 a 30 30 0 0 1 0 -80"
              ></path>

              <text
                className="count c1"
                x="45"
                y="42"
                textLength="35px"
                textAnchor="middle"
                dy="7"
              ></text>
              <text
                className="count_gb"
                x="70"
                y="42"
                textLength="13px"
                textAnchor="middle"
                dy="7"
              >
                GB
              </text>
              <text
                className="remain"
                x="50"
                y="53"
                textLength="25px"
                textAnchor="middle"
                dy="7"
              >
                Remain
              </text>
            </svg>

            <text
              id="count"
              x="50"
              y="50"
              textAnchor="middle"
              dy="7"
              fontSize="20"
            ></text>
            {/* <!-- <text className="gb_svg" x="100" y="50" textAnchor="middle" dy="7" fontSize="20">GB</text> -->
                                    <!-- <text className="gb_svg" x="50" y="50" textAnchor="middle" dy="7" fontSize="20">Remain</text> --> */}
          </div>
          <div className="spent">
            <div className="info">
              <div className="dot blue"></div>
              <span>Spent</span>
            </div>
            <div className="info">
              <div className="dot "></div>
              <span>Limit</span>
            </div>
          </div>
        </div>
      </div>
      <div className="item_wrapper time">
        <div className="title_wrapper">
          <div className="title">Time</div>
          <div className="type_select">
            <div className="btn_type active">D</div>
            <div className="btn_type">H</div>
          </div>
        </div>
        <div className="chart_wrapper">
          <div className="svg_wrapper bandwidth">
            <svg
              className="animated2"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#18bf66" />
                  <stop offset="100%" stopColor="#55cec7" />
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                stroke="#f0f1f2"
                strokeWidth="8"
                fill="none"
                d="M50 10
                                     a 30 30 0 0 1 0 80
                                     a 30 30 0 0 1 0 -80"
              ></path>
              <path
                id="progress2"
                strokeLinecap="round"
                stroke="url(#gradient2)"
                strokeWidth="8"
                fill="none"
                d="M50 10
                                       a 30 30 0 0 1 0 80
                                       a 30 30 0 0 1 0 -80"
              ></path>

              <text
                className="count c2"
                x="38"
                y="42"
                textLength="18px"
                textAnchor="middle"
                dy="7"
              ></text>
              <text
                className="count_gb"
                x="60"
                y="42"
                textLength="24px"
                textAnchor="middle"
                dy="7"
              >
                &nbsp;DAYS
              </text>
              <text
                className="remain"
                x="50"
                y="53"
                textLength="14px"
                textAnchor="middle"
                dy="7"
              >
                Left
              </text>
            </svg>

            <text
              id="count"
              x="50"
              y="50"
              textAnchor="middle"
              dy="7"
              fontSize="20"
            ></text>
            {/* <!-- <text className="gb_svg" x="100" y="50" textAnchor="middle" dy="7" fontSize="20">GB</text> -->
                                    <!-- <text className="gb_svg" x="50" y="50" textAnchor="middle" dy="7" fontSize="20">Remain</text> --> */}
          </div>
        </div>
      </div>

      <div className="item_wrapper location">
        <div className="title">Location</div>
        <div className="loc">
          <div className="bg_image ca"></div>
          <div className="name">Canada</div>
        </div>
        <div className="usage">
          <div className="title">
            Bandwidth Usage{" "}
            <span>
              <b> 8.27 GB</b> / 20 GB
            </span>
          </div>
          <div className="progres_bar">
            <div className="progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
