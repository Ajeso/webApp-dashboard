const alert = document.getElementById("alert");

function alertmessage() {
  alert.innerHTML = `
  <div class="alert-box" id="alert">
            <p><strong>Alert:</strong> You have unread messages! </p>
            <p class="close">x</p>
        </div>
  `;
}

alert.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("close")) {
    alert.style.display = "none";
  }
});

function createChart(
  elementID,
  chartType,
  data,
  scales = {
    y: {
      beginAtZero: true,
    },
  }
) {
  const ctx = document.getElementById(elementID).getContext("2d");
  return new Chart(ctx, {
    type: chartType,
    data,
    options: {
      scales,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

const lineData = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [700, 1200, 1000, 2000, 1500, 1700, 1200, 1800, 2000, 1500, 2500],
      borderWidth: 1,
      backgroundColor: ["#cabaf7"],
      fill: true,
      pointRadius: 6,
    },
  ],
};
const barData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      data: [70, 110, 170, 120, 220, 200, 100],
      borderWidth: 1,
      backgroundColor: "rgb(127, 102, 195)",
      fill: true,
    },
  ],
};

const pieData = {
  labels: ["DeskTop", "Tablet", "Phones"],
  datasets: [
    {
      data: [250, 80, 80],
      backgroundColor: [
        "rgb(127, 102, 195)",
        "rgb(34, 171, 112)",
        "rgb(34, 150, 171)",
      ],
      hoverOffset: 4,
    },
  ],
};

const lineChart = createChart("line-chart", "line", lineData);
const barChart = createChart("bar-chart", "bar", barData);
const pieChart = createChart("pie-chart", "doughnut", pieData, {});
