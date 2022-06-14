const getOrCreateTooltip = (chart) => {
  let tooltipEl = chart.canvas.parentNode.querySelector('div');

  if (!tooltipEl) {
    
    tooltipEl = document.createElement('div');
    tooltipEl.className += ('tooltip__body');
    tooltipEl.style.opacity = 1;

    const table = document.createElement('table');
    table.style.margin = '0px';

    tooltipEl.appendChild(table);
    chart.canvas.parentNode.appendChild(tooltipEl);
  }

  return tooltipEl;
};

const externalTooltipHandler = (context) => {
  // Tooltip Element
  const {chart, tooltip} = context;
  const tooltipEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set Text
  if (tooltip.body) {
    const bodyLines = tooltip.body.map(b => b.lines);


    const tableBody = document.createElement('tbody');
    bodyLines.forEach((body, i) => {      

      const tr = document.createElement('tr');
      tr.style.backgroundColor = 'inherit';
      tr.style.borderWidth = 0;

      const td = document.createElement('td');
      td.style.borderWidth = 0;
      
      const dataNum = tooltip.body.map;

      const img = document.createElement('img');
      img.src = 'img/top/charts__tooltip-img_' + bodyLines + '.svg';

      tableBody.appendChild(img);
    });

    const tableRoot = tooltipEl.querySelector('table');

    // Remove old children
    while (tableRoot.firstChild) {
      tableRoot.firstChild.remove();
    }

    // Add new children
    tableRoot.appendChild(tableBody);
  }

  const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.left = positionX + tooltip.caretX + 'px';
  tooltipEl.style.top = positionY + tooltip.caretY + -80 + 'px';
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
};

var popCanvas = document.getElementById("popChart");
var barChart = new Chart(popCanvas, {
  type: 'line',
  data: {
    labels: ["1","2", "3", "4", "5", "6"],
    datasets: [{
      label: '',
      data: [0,8,38,178,285,300],
      tension: 0.2,
      pointStyle: ['cross','circle','circle','circle','circle','cross'],
      pointRadius: [0, 5, 5, 5, 5, 0],
    }]
  },
  options: {
    lineBorderWidth: 4,
    lineBorderColor: 'rgba(95, 130, 255,1)',
    lineBackgroundColor: 'rgba(75, 113, 255, 0.1)',
    pointBorderWidth: 2,
    pointBorderColor: 'rgba(95, 130, 255,1)',
    pointBackgroundColor: 'rgba(255, 255, 255, 1)',
    pointHoverBackgroundColor: 'rgba(95, 130, 255,1)',
    pointHoverRadius: 5,
    
    fill: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
        position: 'nearest',
        external: externalTooltipHandler
      }
    },

    scales: {
      x: {
        ticks: {display: false},
         grid: {
            tickLength: 0,
            drawBorder: false,
         }
      },
      y:{
        ticks: {display: false},
        grid: {
          display: false,
          drawBorder: false,
         }
      }
    },
  }
});