
var defaultValue = 2;

function updateChart (chart, val, floor = 0) {
    newdata = [];
    for (i = 0; i < Data.monthNames.length; i++) {
        p = new Peep(.109, 1.2, 1.65);
        c = p.cost(val) + floor;
        newdata.push((((i + 1) / Data.monthNames.length) * c));
    }
    chart.data.datasets[1].data = newdata; 
    chart.update();
}

///////////
// CHART 1
var ctx = document.getElementById('bizdev').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: Data.monthNames,
        datasets: [
            {
            label: 'Fixed Overhead',
            function: function (x) { 
                x = Data.monthNames.indexOf(x);
                return ((x + 1) / Data.monthNames.length)*12; 
            }, 
            backgroundColor: 'rgb(0, 0, 0, 0.1)',
            borderColor: 'rgb(255, 99, 132)',
            data: [], // Array(10).fill(12)
            steppedLine: false,
            },
            {
                label: 'BizDev Cost',
                function: function (x) { 
                    x = Data.monthNames.indexOf(x);
                    return ((x + 1) / Data.monthNames.length)*22; 
                }, 
                backgroundColor: 'rgb(0, 0, 0, 0.1)',
                borderColor: 'rgb(66, 00, 66)',
                data: [], // Array(10).fill(12)
                steppedLine: false,
            },
        ]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 24
                },
                scaleLabel: {
                    display: true,
                    labelString: "Millions of Dollars"
                }
            }]
        }
    }});

// SLIDER 1
var sliderVertical = d3
    .sliderLeft()
    .min(0)
    .max(10)
    .height(250)
    .ticks(12)
    .step(1)
    .default(defaultValue)
    .on('onchange', val => {
        updateChart(chart, val);
    });

var gVertical = d3
    .select('div#slider-vertical')
    .append('svg')
    .attr('width', 100)
    .attr('height', 400)
    .append('g')
    .attr('transform', 'translate(60,30)');

gVertical.call(sliderVertical);

updateChart(chart, defaultValue)
chart.update();

///////////////
// CHART 2
var ctx2 = document.getElementById('bizdev2').getContext('2d');
var chart2 = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: Data.monthNames,
        datasets: [
            {
            label: 'Fixed Overhead',
            function: function (x) { 
                x = Data.monthNames.indexOf(x);
                return ((x + 1) / Data.monthNames.length)*12; 
            }, 
            backgroundColor: 'rgb(0, 0, 0, 0.1)',
            borderColor: 'rgb(255, 99, 132)',
            data: [],
            steppedLine: false,
            },
            {
                label: 'BizDev Cost',
                function: function (x) { 
                    x = Data.monthNames.indexOf(x);
                    return ((x + 1) / Data.monthNames.length)*22; 
                }, 
                backgroundColor: 'rgb(0, 0, 0, 0.1)',
                borderColor: 'rgb(66, 00, 66)',
                data: [], // Array(10).fill(12)
                steppedLine: false,
            },
        ]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 24
                },
                scaleLabel: {
                    display: true,
                    labelString: "Millions of Dollars"
                }
            }]
        }
    }});


    var sliderVertical2 = d3
    .sliderLeft()
    .min(0)
    .max(10)
    .height(250)
    .ticks(12)
    .step(1)
    .default(defaultValue)
    .on('onchange', val => {
        updateChart(chart2, val, Data.fixedOverhead);
    });

var gVertical2 = d3
    .select('div#slider-vertical2')
    .append('svg')
    .attr('width', 100)
    .attr('height', 400)
    .append('g')
    .attr('transform', 'translate(60,30)');

gVertical2.call(sliderVertical2);

updateChart(chart2, defaultValue, Data.fixedOverhead)
chart2.update();
