import { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import Chart1 from "chart.js/auto";
import "chartjs-adapter-date-fns";

export default function Chart(props) {
  const customTooltip = (context) => {
    // Tooltip Element
    let tooltipEl = document.getElementById('chartjs-tooltip');

    // Create element on first render
    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'chartjs-tooltip';
        tooltipEl.innerHTML = '<table></table>';
        document.body.appendChild(tooltipEl);
    }

    // Hide if no tooltip
    const tooltipModel = context.tooltip;
    if (tooltipModel.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
    }

    tooltipEl.classList.remove('above', 'below', 'no-transform');
    if (tooltipModel.yAlign) {
        tooltipEl.classList.add(tooltipModel.yAlign);
    } else {
        tooltipEl.classList.add('no-transform');
    }

    function getBody(bodyItem) {
        return bodyItem.lines;
    }

    if (tooltipModel.body) {
        const bodyLines = tooltipModel.body.map(getBody);

        let innerHtml = '<thead>';

       
        innerHtml += '</thead><tbody>';

        bodyLines.forEach(function(body, i) {
            const span =
            "<strong>" +
            body +
            " <span>GB</span></strong>";
            innerHtml += '<tr><td>' + span + '</td></tr>';
        });
        innerHtml += '</tbody>';

        let tableRoot = tooltipEl.querySelector('table');
        tableRoot.innerHTML = innerHtml;
    }

    const position = context.chart.canvas.getBoundingClientRect();

    tooltipEl.style.opacity = 1;
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX -22 + 'px';
    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 44 + 'px';
    tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
    tooltipEl.style.pointerEvents = 'none';
}

  var options = {
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
        border: {
          display: false,
        },
        ticks: {
          padding: 15,
          stepSize: 5,
          callback: (e) => {
            return e + " GB";
          },
          font: {
            size: 9,
            family: "GothamPro",
          },
          color: "#9d9b9b",
          autoSkip: true,
          fontStyle: "",  
          fontSize: 9,
        },
      },

      x: {
      type: "time",
          time: {
          parser: "mm/dd",
          unit: "day",
          unitStepSize: 1,
          displayFormats: {
            day: "MM/dd",
          },
        },
        border: {
          display: false,
        },
        grid: {
          color: "rgba(0, 0, 0, 0)",
          drawBorder: false,
          zeroLineWidth: 0,
          lineWidth: 1,
          zeroLineColor: "rgba(222,222,222,0.0)",
        },
          ticks: {
          padding: 15,
          color: "#9d9b9b",
          font: {
            size: 9,
            family: "GothamPro",
          },
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
      tooltip: {
        enabled: false,
        external: customTooltip,
      },
    },
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
        dayEarlier(6.5),
        dayEarlier(6),
        dayEarlier(5.5),
        dayEarlier(5),
        dayEarlier(4.5),
        dayEarlier(4),
        dayEarlier(3.5),
        dayEarlier(3),
        dayEarlier(2.5),
        dayEarlier(2),
        dayEarlier(1.5),
        dayEarlier(1),
        dayEarlier(0),
      ],
      datasets: [
        {
          data: [0, 5, 4, 4, 7, 14, 16, 14, 10, 12, 8, 9  , 7,6],
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
          var gradienTooltip = ctx.createLinearGradient(0, y + 10, 0, chart.height-45);
          gradienTooltip.addColorStop(0, "#122d5f");
          gradienTooltip.addColorStop(0.8, "rgba(18, 45, 95, 0.1)");
          gradienTooltip.addColorStop(1, "rgba(18, 45, 95, 0)");
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = gradienTooltip;
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x, y + 10);
          ctx.lineTo(x, chart.height-45);
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
          <a
            className="link"
            href="#!"
            onClick={() => {
              props.setTab(3);
            }}
          >
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
        </div>
      </div>
    </div>
  );
}
