Chart.pluginService.register({
    beforeInit: function(chart) {
        // We get the chart data
        var data = chart.config.data;

        // For every dataset ...
        for (var i = 0; i < data.datasets.length; i++) {

            // For every label ...
            for (var j = 0; j < data.labels.length; j++) {

                // We get the dataset's function and calculate the value
                var fct = data.datasets[i].function,
                    x = data.labels[j],
                    y = fct(x);
                // Then we add the value to the dataset data
                data.datasets[i].data.push(y);
            }
        }
    }
});

class Data {
    constructor () {
    }
}

// Data.monthNames = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', ];
Data.monthNames = [ 'M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10'];

Data.fixedOverhead = 12;
Data.fixedOverhead10mo = Array(Data.monthNames.length).fill(Data.fixedOverhead);
data = new Data();