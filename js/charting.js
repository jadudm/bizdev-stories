class Dataset {
    order = 0;
    constructor (params = {}) {
        this.label = params.label || "Data";
        this.function = params.function || function (x) { return x; };
        this.backgroundColor = params.backgroundcolor || 'rgb(0, 0, 0, 0.1)';
        this.borderColor = params.bordercolor ||  'rgb(255, 99, 132)';
        this.data = params.data || [];
        //this.type = params.type || 'line';
        if (params.type == "line") {
            this.steppedLine = params.steppedline || false;
        }
        // if (Dataset.order != null) {
        //     Dataset.order += 1;
        //     this.order = Dataset.order;
        // } else {
        //     Dataset.order = 1;
        //     this.order = 1
        // }
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
            }, // Configuration options go here
            options: params.options || 
                {
                scales: {
                    yAxes: [{
                        ticks: {
                            suggestedMin: params.ymin || 0,
                            suggestedMax: params.ymax || 15
                        },
                        scaleLabel: {
                            display: params.ylabel ? true : false,
                            labelString: params.ylabel || "Millions of Dollars"
                        }
                    }]
                }
            }});
    }    

    datasets(d) {
        console.log();
        this.chart.data.datasets = d;
    }

    addDataset (d) {
        this.chart.data.datasets.push(d);
    }

    getOptions (k) {
        return this.chart.options;
    }

    setOptions(o) {
        this.chart.options = o;
    }

    callback (dsndx, fun) {
        this.chart.data.datasets[dsndx].function = fun;

    } 
}

// Dancing around the fact that '0' is considered
// a logical 'false' in Javascript.
function existsAndNumber(v, retval = null) {
    if(!(typeof v === 'undefined' || v === null)) {
        if (Number.isInteger(v)) {
            return v;
        } else {
            return retval;
        }
    } else {
        return retval;
    }
}
class SuperHSlider {
    constructor (div, params = {}) {
        this.slider = d3
            .sliderBottom()
            .min(existsAndNumber(params.min, 1))
            .max(existsAndNumber(params.max, 10))
            .width(params.width || 300)
            .tickFormat(d3.format(params.format || 'd'))
            .ticks(params.ticks || 10)
            .step(params.step || 1)
            .default(existsAndNumber(params.default, 0))
            .on('onchange', params.callback || function (val) { })
            .on('end', params.callback || function (val) { })

        this.step = d3
        .select('div#' + div)
        .append('svg')
        .attr('width', 500)
        .attr('height', 100)
        .append('g')
        .attr('transform', 'translate(30,30)');
        this.step.call(this.slider);
    }

    value () {
        return this.slider.value();
    }

    callback(fun) {
        this.slider.on('onchange', fun);
        this.slider.on('end', fun);
    }
}

class SuperVSlider {
    constructor (div, params = {}) {
        this.slider = d3
            .sliderLeft()
            .min(existsAndNumber(params.min, 1))
            .max(existsAndNumber(params.max, 10))
            .height(params.height || 250)
            .tickFormat(d3.format(params.format || 'd'))
            .ticks(params.ticks || 10)
            .step(params.step || 1)
            .default(existsAndNumber(params.default, 0))
            .on('onchange', params.callback || function (val) { });
        this.step = d3
        .select('div#' + div)
        .append('svg')
        .attr('width', params.stepwidth || 100)
        .attr('height', params.stepheight || 400)
        .append('g')
        .attr('transform', 'translate(60,30)');
        this.step.call(this.slider);
    }

    value () {
        return this.slider.value();
    }

}
