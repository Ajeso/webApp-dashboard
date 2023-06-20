const alert = document.getElementById("alert");
const trafficUl = document.getElementById("traffic-list");
const bell = document.querySelector(".bell");
const notifications = document.getElementById("notications");
const settingBtn = document.getElementById("setting-btn");

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

// Bell Notifications display
bell.addEventListener("click", () => {
  notification.style.display =
    notification.style.display === "none" ? "block" : "none";
});

// createChart function

function createChart(
  //function params
  elementID,
  chartType,
  data,
  scales = {
    y: {
      beginAtZero: true,
    },
  },
  plugins = {
    legend: {
      display: false,
    },
  }
) {
  const ctx = document.getElementById(elementID).getContext("2d");
  return new Chart(ctx, {
    type: chartType,
    data,
    options: {
      scales,
      plugins,
    },
  });
}

// data for the line chart
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
      data: generateRandomData(2500),
      borderWidth: 1,
      backgroundColor: ["#cabaf7"],
      fill: true,
      pointRadius: 6,
    },
  ],
};

// bar chart data
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

// pie chart data
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

// creating the charts
const lineChart = createChart("line-chart", "line", lineData);
const barChart = createChart("bar-chart", "bar", barData);
const pieChart = createChart(
  "pie-chart",
  "doughnut",
  pieData,
  {},
  (display = true)
);

// generateRandomData function for the line chart eventlistener
function generateRandomData(numDataPoints) {
  const data = [];

  for (let i = 500; i < numDataPoints; i++) {
    const y = Math.floor(Math.random() * 2500);
    data.push(y);
  }

  return data;
}

// updateChart Function for the line chart
function updateChart() {
  const newData = generateRandomData(2500);
  lineChart.data.datasets[0].data = newData;
  lineChart.update();
}

// the eventlistener on the traffic list items when clicked
trafficUl.addEventListener("click", (e) => {
  if (e.target && e.target.tagName === "LI") {
    e.target.classList.toggle("li-background");
    updateChart();
  }
});

// save settings when save button is clicked
settingBtn.addEventListener("click", (e) => {
  if (e.target === document.getElementById("save-btn")) {
    localStorage.setItem("setting", true);
  } else if (e.target === document.getElementById("cancel")) {
    localStorage.clear();
  }
});
