var ctx = document.getElementById('fixed-overhead').getContext('2d');
var fixedOverheadChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: Data.monthNames,
        datasets: [{
            label: 'Fixed Overhead',
            function: function (x) { 
                x = Data.monthNames.indexOf(x);
                return ((x + 1) / Data.monthNames.length)*12; 
            }, 
            backgroundColor: 'rgb(0, 0, 0, 0.1)',
            borderColor: 'rgb(255, 99, 132)',
            data: []// Array(10).fill(12)
        }]
    },

    // Configuration options go here
    options: {}
});