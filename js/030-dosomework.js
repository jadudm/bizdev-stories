// https://bl.ocks.org/johnwalley/e1d256b81e51da68f7feb632a53c3518


bds = new Slider("slider-bizdevs", {width: 120});
pas = new Slider("slider-pas", {width: 120});


///////////
// CHART 1
var ctx = document.getElementById('dosomework').getContext('2d');
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
