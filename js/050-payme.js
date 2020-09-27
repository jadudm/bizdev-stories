defaultMessage = "Overheads not cleared.";

if (document.getElementById("message")) {
    document.getElementById("message").innerHTML = defaultMessage;
}

income.bordercolor = 'rgb(0,0,0, 0.5)';
income.backgroundcolor = 'rgb(0,0,0, 0.5)';

ohlow = new Dataset({
    label: "OH Lo",
    bordercolor: 'rgb(200, 80, 80, 0.5)',
    backgroundcolor: 'rgb(200, 80, 80, 0.5)',
    data: [],
});


ohhigh = new Dataset({
    label: "OH Hi",
    bordercolor: 'rgb(80, 80, 200, 0.5)',
    backgroundcolor: 'rgb(80, 80, 200, 0.5)',
    data: [],
});

sc.datasets([income, ohlow, ohhigh]);
sc.chart.update();

function plural(v) {
    if (v == 1) {
        return "";
    } else {
        return "s";
    }
}

function callback050 (val, render = true) {
    callback040(val, false);
    // Add in the cost of WBs.
    nw = numWorkers(getSliderValues());
    nw = numWorkers(getSliderValues());

    minwbs.data = nw.low.map(v => v * bds.value());
    maxwbs.data = nw.high.map(v => v * bds.value());
    minw = Math.max(...minwbs.data);
    maxw = Math.max(...maxwbs.data);

    minoh = costOfBizdevs(theFloor)(bds.value() + minw);
    maxoh = costOfBizdevs(theFloor)(bds.value() + maxw);
    ohlow.data = minoh;
    ohhigh.data = maxoh;

    inc = income.data[income.data.length - 1];
    ohl = ohlow.data[ohlow.data.length - 1];
    ohh = ohhigh.data[ohhigh.data.length - 1];
    // console.log(inc, ohl, ohh);

    if (render) {
        sc.chart.update();
        wsc.chart.update();   

        if (document.getElementById("message")) {
            var str = defaultMessage;
            calcstr = "";
            if ((minw == 0)) {
                calcstr = bds.value() + " BD" + plural(bds.value()) + " and 0 WBs.";
            } else if ((minw == maxw)) {
                calcstr = bds.value() + " BD" + plural(bds.value()) + " and ~" + minw + " WBs.";
            } else {
                calcstr = bds.value() + " BD" + plural(bds.value()) + " and " + minw + " to " + maxw + " WBs.";
            }
    
            if ((inc < ohl)) {
                str = "Overheads <b>not</b> cleared. <br>" + calcstr;
            } else if ((inc > ohl) && (inc < ohh)) {
                str = "<em>Optimal</em> overheads cleared. <br>" + calcstr;
            } else {
                str = "<em>More realistic</em> overheads cleared. <br>" + calcstr;
            }
    
            document.getElementById("message").innerHTML = str;
        } 
    }
}

bds.callback(function (val) {
    overheads.data = costOfBizdevs(theFloor)(val);
    callback050(val);
});

pas.callback(callback050);
eis.callback(callback050);
bundles.callback(callback050);

callback050(1);