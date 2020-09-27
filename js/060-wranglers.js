fixedWranglers = 5;
wbsPerWrangler = 20;
defaultMessage = "Overheads not cleared.<br>&nbsp;";
if (document.getElementById("message")) {
    document.getElementById("message").innerHTML = defaultMessage;
}


wranglerwbs = new Dataset({
    label: "Wranglers",
    bordercolor: 'rgb(220, 118, 51, 0.5)',
    backgroundcolor: 'rgb(220, 118, 51, 0.5)',
    data: [],
});

wsc.addDataset(wranglerwbs);

function callback060(val, render = true) {
    callback050(val, false);

    // Add in the cost of WBs.
    nw = numWorkers(getSliderValues());

    minwbs.data = nw.low.map(v => v * bds.value());
    maxwbs.data = nw.high.map(v => v * bds.value());
    minw = Math.max(...minwbs.data);
    maxw = Math.max(...maxwbs.data);

    minwrang = (fixedWranglers + Math.ceil(minw / wbsPerWrangler));
    maxwrang = (fixedWranglers + Math.ceil(maxw / wbsPerWrangler));
    wranglerwbs.data = new Array(Data.monthNames.length).fill(maxwrang);

    minoh = costOfBizdevs(theFloor)(bds.value() + minw + minwrang);
    maxoh = costOfBizdevs(theFloor)(bds.value() + maxw + maxwrang);
    ohlow.data = minoh;
    ohhigh.data = maxoh;

    inc = income.data[income.data.length - 1];
    ohl = ohlow.data[ohlow.data.length - 1];
    ohh = ohhigh.data[ohhigh.data.length - 1];
   
    if (render) {
        sc.chart.update();
        wsc.chart.update();   

        if (document.getElementById("message")) {
            var str = defaultMessage;
            calcstr = "";
            wrangstr = "" + minwrang + " to " + maxwrang + " wranglers.";
            if ((minw == 0)) {
                calcstr = bds.value() + " BD" + plural(bds.value()) + ", 0 WBs, and " + minwrang + " wranglers.";
            } else if ((minw == maxw)) {
                calcstr = bds.value() + " BD" + plural(bds.value()) + ", ~" + minw + " WBs, and " + wrangstr;
            } else {
                calcstr = bds.value() + " BD" + plural(bds.value()) + ", " + minw + " to " + maxw + " WBs, and " + wrangstr;
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
    callback060(val);
});

pas.callback(callback060);
eis.callback(callback060);
bundles.callback(callback060);

callback060(1);