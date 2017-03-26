var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['12:53:06', '11:53:06', '10:53:06', '09:53:06', '08:53:06', '07:53:06', '06:53:06'],
    datasets: [{
      label: 'Temperature (C)',
      data: [1, 29, 1, 29, 1, 29, 1],
      backgroundColor: "rgba(153,255,51,0.4)"
    }, {
      label: 'Humidity (%)',
      data: [27, 28, 28, 29, 29, 28, 29],
      backgroundColor: "rgba(255,153,0,0.4)"
    }]
  }
});

var lineChartData = {
    labels: ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7"],
    datasets: [{
        fillColor: "rgba(220,220,220,0)",
        strokeColor: "rgba(220,180,0,1)",
        pointColor: "rgba(220,180,0,1)",
        data: [20, 30, 80, 20, 40, 10, 60]
    }, {
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        data: [60, 10, 40, 30, 80, 30, 20]
    }]

}

Chart.defaults.global.animationSteps = 50;
Chart.defaults.global.tooltipYPadding = 16;
Chart.defaults.global.tooltipCornerRadius = 0;
Chart.defaults.global.tooltipTitleFontStyle = "normal";
Chart.defaults.global.tooltipFillColor = "rgba(0,160,0,0.8)";
Chart.defaults.global.animationEasing = "easeOutBounce";
Chart.defaults.global.responsive = true;
Chart.defaults.global.scaleLineColor = "black";
Chart.defaults.global.scaleFontSize = 16;

var ctx = document.getElementById("canvas2").getContext("2d");
var myChart = new Chart(ctx, {
    pointDotRadius: 10,
    bezierCurve: false,
    scaleShowVerticalLines: false,
    scaleGridLineColor: "black"
});