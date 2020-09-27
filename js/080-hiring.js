fixedWranglers = 5;
wbsPerWrangler = 20;
defaultMessage = "0 WBs needed to cover hiring.<br>&nbsp;";
if (document.getElementById("message")) {
    document.getElementById("message").innerHTML = defaultMessage;
}

hiringwbs = new Dataset({
    label: "Hiring WBs",
    bordercolor: 'rgb(165, 105, 189, 0.5)',
    backgroundcolor: 'rgb(165, 105, 189, 0.5)',
    data: [],
    stack: "coveringwbs",
});

wsc.addDataset(hiringwbs);
// options = wsc.getOptions();
// options["scales"]["xAxes"] = [{stacked : true}];
// wsc.setOptions(options)

function calcHiringTT(v) {
    wb = v * bds.value();
    // 30% roll.
    replace = Math.ceil(wb * 0.3);
    // This is how many hires we need to make this month.
    // How, multiply that by 110h.
    replacetime = replace * 110;
    // This needs to be backfilled by a WB.
    // 10 months, 4w/month = 40w. 40 * 40 = 1600h.
    return Math.ceil(replacetime / 1600);
}

function callback080(val, render = true) {
    callback070(val, false);

    // Add in the cost of WBs.
    nw = numWorkers(getSliderValues());

    minwbs.data = nw.low.map(v => v * bds.value());
    maxwbs.data = nw.high.map(v => v * bds.value());
    leavewbs.data = nw.high.map(calcLeaveWBs)
    
    hiringwbs.data = nw.high.map(calcHiringTT);

    minw = Math.max(...minwbs.data);
    maxw = Math.max(...maxwbs.data);
    
    minwrang = (fixedWranglers + Math.ceil(minw / wbsPerWrangler));
    maxwrang = (fixedWranglers + Math.ceil(maxw / wbsPerWrangler));

    // Add leave WBs into the calculations.
    minleavewbs = Math.min(...leavewbs.data);
    maxleavewbs = Math.max(...leavewbs.data);
    minhiringwbs = Math.min(...hiringwbs.data);
    maxhiringwbs = Math.max(...hiringwbs.data);

    minoh = costOfBizdevs(theFloor)(bds.value() + minw + minwrang + maxleavewbs + minhiringwbs);
    maxoh = costOfBizdevs(theFloor)(bds.value() + maxw + maxwrang + maxleavewbs + maxhiringwbs);
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
            if (minhiringwbs != 0) {
                if (minhiringwbs == maxhiringwbs) {
                    str = minhiringwbs + " WB" + plural(minhiringwbs) + " needed to cover hiring";
                } else {
                    str = minhiringwbs + " to " + maxhiringwbs + " WBs needed to cover hiring."
                }
            }
            
        document.getElementById("message").innerHTML = str;
        }
    }   
}

bds.callback(function (val) {
    overheads.data = costOfBizdevs(theFloor)(val);
    callback080(val);
});

pas.callback(callback080);
eis.callback(callback080);
bundles.callback(callback080);

callback080(1);