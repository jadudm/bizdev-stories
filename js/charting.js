class Dataset {
    constructor (params = {}) {
        this.label = params.label || "Data";
        this.function = params.function || function (x) { return x; };
        this.backgroundColor = params.backgroundcolor || 'rgb(0, 0, 0, 0.1)';
        this.borderColor = params.bordercolor ||  'rgb(255, 99, 132)';
        this.data = params.data || [];
        this.steppedLine = params.steppedline || false;
    }
}

class SuperChart {
    constructor (div, params = {}) {
        this.ctx = document.getElementById(div).getContext('2d');
        this.chart = new Chart(this.ctx, {
            // The type of chart we want to create
            type: params.type || 'line',
            // The data for our dataset
            data: {
                labels: this.labels || Data.monthNames,
                datasets: params.datasets || [ new Dataset() ],
                 
                    // {
                    // label: params.label || "Default Label",
                    // function: function (x) { 
                    //     return x;
                    // }, 
                    // backgroundColor: params.backgroundColor || 'rgb(0, 0, 0, 0.1)',
                    // borderColor: params.borderColor || 'rgb(255, 99, 132)',
                    // data: params.data || [],
                    // steppedLine: false,
                    // },
                    // {
                    //     label: 'BizDev Cost',
                    //     function: params.callback || function (x) { return x; }, 
                    //     backgroundColor: 'rgb(0, 0, 0, 0.1)',
                    //     borderColor: 'rgb(66, 00, 66)',
                    //     data: [], // Array(10).fill(12)
                    //     steppedLine: false,
                    // },
            }, // Configuration options go here
            options: params.options || 
                {
                scales: {
                    yAxes: [{
                        ticks: {
                            suggestedMin: params.ymin || 0,
                            suggestedMax: params.ymax || 24
                        },
                        scaleLabel: {
                            display: params.ylabel ? true : false,
                            labelString: params.ylabel || "Millions of Dollars"
                        }
                    }]
                }
            }});
    }    

    addDataset (d) {
        this.chart.data.datasets.push(d);
    }

    callback (dsndx, fun) {
        this.chart.data.datasets[dsndx].function = fun;
    } 
}


class SuperHSlider {
    constructor (div, params = {}) {
        this.sliderStep = d3
            .sliderBottom()
            .min(params.min || 1)
            .max(params.max || 10)
            .width(params.width || 300)
            .tickFormat(d3.format(params.format || 'd'))
            .ticks(params.ticks || 10)
            .step(params.step || 1)
            .default(params.default || 2)
            .on('onchange', params.callback || function (val) { })
        this.gStep = d3
        .select('div#' + div)
        .append('svg')
        .attr('width', 500)
        .attr('height', 100)
        .append('g')
        .attr('transform', 'translate(30,30)');
        this.gStep.call(this.sliderStep);
    }
}

class SuperVSlider {
    constructor (div, params = {}) {
        this.sliderStep = d3
            .sliderLeft()
            .min(params.min || 0)
            .max(params.max || 10)
            .height(params.height || 250)
            .tickFormat(d3.format(params.format || 'd'))
            .ticks(params.ticks || 10)
            .step(params.step || 1)
            .default(params.default || 2)
            .on('onchange', params.callback || function (val) { });
        this.gStep = d3
        .select('div#' + div)
        .append('svg')
        .attr('width', params.stepwidth || 100)
        .attr('height', params.stepheight || 400)
        .append('g')
        .attr('transform', 'translate(60,30)');
        this.gStep.call(this.sliderStep);
    }
}
