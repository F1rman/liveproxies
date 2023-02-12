import { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import Chart1 from "chart.js/auto";
import "chartjs-adapter-date-fns";

export default function Chart(props) {
  const customTooltip = {
    mode: "index",
    enabled: false,
    custom: function (model) {
      const tooltip = document.getElementById("tooltip");
      $("body").mousemove((e) => {
        if (model.opacity === 0) {
          tooltip.style.opacity = 0;
          return;
        }

        if (model.body) {
          const title =
            "<strong>" +
            chartData[model.dataPoints[0].index].y +
            " <span>GB</span></strong>";

          tooltip.innerHTML = title;

          tooltip.style.left = "auto";
          tooltip.style.right = "auto";

          const pos = this._chart.canvas.getBoundingClientRect();

          tooltip.style.left =
            pos.left + model.caretX - $("#tooltip").width() + 10 + "px";

          tooltip.style.top = -50 + e.pageY + "px";
          tooltip.style.opacity = 1;
        }
      });
    },
  };

  var options = {
    responsive: true,
    animation: {
      easing: "easeInOutQuad",
      duration: 1000,
    },

    hover: {
      mode: "nearest",
      intersect: false,
    },
    scales: {
      y: {
        grid: {
          color: "rgba(222,222,222,0.5)",
          drawBorder: false,
          zeroLineWidth: 0,
          zeroLineColor: "rgba(222,222,222,0.5)",
        },
        ticks: {
          padding: 15,
          fontFamily:'GothamPro',
          stepSize: 5,  
          callback: (e) => {
            return e + " GB";
          },
          fontColor: "#9d9b9b",
          autoSkip: true,
          fontStyle: "",
          fontSize: 9,
        },
      },

      x: {
        type: "time",
       
        grid: {
          color: "rgba(0, 0, 0, 0)",
          drawBorder: false,
          zeroLineWidth: 0,
          lineWidth: 1,
          zeroLineColor: "rgba(222,222,222,0.0)",
        },
        ticks: {
        padding: 15,
          fontColor: "#9d9b9b",
          fontFamily:'GothamPro',
          align: "inner",
          autoSkip: true,
          fontStyle: "",
          fontSize: 9,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },

    plugins: {
      legend: false,
    },
    tooltips: customTooltip,
  };
  var ctx;
  var gradient;
  var gradientd;
  useEffect(() => {
    ctx = document.getElementById("myChart").getContext("2d");
    gradient = ctx.createLinearGradient(0, 0, 0, 450);
    gradientd = ctx.createLinearGradient(0, 0, 0, 450);
    gradient.addColorStop(0, "rgba(31, 107, 211, 0.8)");
    gradient.addColorStop(0.64, "rgba(23, 175, 255, 0)");
    gradient.addColorStop(1, "rgba(23, 175, 255, 0)");
    gradientd.addColorStop(0, "rgba(242, 202, 80, 0.5)");
    gradientd.addColorStop(0.64, "rgba(242, 202, 80, 0.25)");
    gradientd.addColorStop(1, "rgba(242, 202, 80, 0)");
  });

  function dayEarlier(day) {
    let time = new Date(new Date().getTime() - day * 24 * 60 * 60 * 1000);
    return time;
  }

  const data = () => {
    return {
      labels: [
        dayEarlier(7),
        dayEarlier(6),
        dayEarlier(5),
        dayEarlier(4),
        dayEarlier(3),
        dayEarlier(2),
        dayEarlier(1),
      ],
      datasets: [
        {
          data: [10, 12, 8, 4, 7, 14, 19],
          fill: "start",
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 450);
            gradient.addColorStop(0, "rgba(31, 107, 211, 0.8)");
            gradient.addColorStop(0.7, "rgba(23, 175, 255, 0)");
            return gradient;
          },
          borderColor: "#1f6bd3",
          borderWidth: 1,
          pointRadius: 10,
          pointHoverRadius: 8,
          toolTipContent: null,
          pointBorderColor: "rgba(0,0,0,0.00001)",
          pointHoverBorderColor: "rgba(255,255,255,1)",
          pointHoverBorderWidth: 3,
          pointBackgroundColor: "rgba(0,0,0,0.00001)",
          pointHoverBackgroundColor: "#1f6bd3",
        },
      ],
    };
  };

  var plugins = [
    {
      afterDraw: (chart) => {
        if (chart.tooltip?._active?.length) {
          let x = chart.tooltip._active[0].element.x;
          let y = chart.tooltip._active[0].element.y;
          var gradienTooltip = ctx.createLinearGradient(0, y + 10, 0, 275);
          gradienTooltip.addColorStop(0, "#122d5f");
          gradienTooltip.addColorStop(0.8, "rgba(18, 45, 95, 0.1)");
          gradienTooltip.addColorStop(1, "rgba(18, 45, 95, 0)");
          ctx.lineWidth = 1;
          ctx.strokeStyle = gradienTooltip;
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x, y + 10);
          ctx.lineTo(x, 275);
          ctx.stroke();
          ctx.restore();
        }
      },
    },
  ];

  return (
    <div className="card charts cards_graph">
      <div className="header_chart">
        <div className="title_wrapper">
          <div className="title">Bandwidth Usage</div>
          <a  className="link" href="#!" onClick={()=>{
            props.setTab(3)
          }}>
            View Usage Analytics
          </a>
        </div>
        <div className="select_wrapper">
          <select>
            <option value="Past 7 days">Past 24 hours</option>
            <option value="Past 7 days">Past 3 days</option>
            <option value="Past 7 days">Past 7 days</option>
            <option value="Past 7 days">Past 30 days</option>
          </select>
        </div>
      </div>
      <div className="chart_wrapper">
        <div className="aspect-ratio">
          <Line
            id="myChart"
            data={data()}
            options={options}
            plugins={plugins}
          />
          <div id="tooltip"></div>
        </div>
      </div>
    </div>
  );
}
