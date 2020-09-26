if (document.getElementById("papeople")) {
    peeps = document.getElementById("papeople");
    peeps.innerHTML = services.pa.workers.toString();
    
    peeps = document.getElementById("paweeks");
    peeps.innerHTML = services.pa.duration.toString();    
}

minwbs = new Dataset({
    label: "Min WBs",
    bordercolor: 'rgb(66, 00, 00, 1.0)',
    backgroundcolor: 'rgb(200, 80, 80, 0.5)',
    data: [],
    order: 2,
});
maxwbs = new Dataset({
    label: "Max WBs",
    bordercolor: 'rgb(00, 00, 66, 1.0)',
    backgroundcolor: 'rgb(80, 80, 200, 0.5)',
    data: [],
    order: 2,
});


params = {
    type: 'bar',
    datasets: [ minwbs, maxwbs ],
}

wsc = new SuperChart("workerchart", params);


function newWorkCallback (val) {
    // Call the old callback.
    workSliderCallback(val);
    // First, update the data array for the chart.
    // Then, grab the year-end income from the work.
    //minwbs.data = valueOfWork(getSliderValues()).map(v => v * bds.value() * Data.monthNames.length);
    nw = numWorkers(getSliderValues());
    minwbs.data = nw.low.map(v => v * bds.value());
    maxwbs.data = nw.high.map(v => v * bds.value());
    minw = Math.max(...minwbs.data);
    maxw = Math.max(...maxwbs.data);
    
    if (document.getElementById("workmix")) {
        if (minw + maxw == 0) {
            str = "No WBs needed.";
        } else {
            str = "Under perfect conditions, between " + minw + " and " + maxw + " WBs needed.";
        }
        document.getElementById("workmix").innerHTML = str;
    }
    
    sc.chart.update();
    wsc.chart.update();
}

bds.callback(function (val) {
    overheads.data = costOfBizdevs(theFloor)(val);
    newWorkCallback(val);
});

pas.callback(newWorkCallback);
eis.callback(newWorkCallback);
bundles.callback(newWorkCallback);

sc.chart.update();