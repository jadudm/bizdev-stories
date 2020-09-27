fixedWranglers = 5;
wbsPerWrangler = 20;
defaultMessage = "0 WBs needed to cover leave.<br>&nbsp;";
if (document.getElementById("message")) {
    document.getElementById("message").innerHTML = defaultMessage;
}

leavewbs = new Dataset({
    label: "Leave WBs",
    bordercolor: 'rgb(244, 208, 63, 0.5)',
    backgroundcolor: 'rgb(244, 208, 63, 0.5)',
    data: [],
    stack: "coveringwbs",
});

wsc.addDataset(leavewbs);

function calcLeaveWBs(v) {

    wb = v * bds.value();
    // Assume 15% of leave is taken during slow period.
    return Math.ceil(((wb * 96) / 1600) * 0.85);
}

function callback070(val) {
    callback060(val);

    // Add in the cost of WBs.
    nw = numWorkers(getSliderValues());

    minwbs.data = nw.low.map(v => v * bds.value());
    maxwbs.data = nw.high.map(v => v * bds.value());
    leavewbs.data = nw.high.map(calcLeaveWBs)

    minw = Math.max(...minwbs.data);
    maxw = Math.max(...maxwbs.data);
    
    minwrang = (fixedWranglers + Math.ceil(minw / wbsPerWrangler));
    maxwrang = (fixedWranglers + Math.ceil(maxw / wbsPerWrangler));

    // Add leave WBs into the calculations.
    minleavewbs = Math.min(...leavewbs.data);
    maxleavewbs = Math.max(...leavewbs.data);
    minoh = costOfBizdevs(theFloor)(bds.value() + minw + minwrang + maxleavewbs);
    maxoh = costOfBizdevs(theFloor)(bds.value() + maxw + maxwrang + maxleavewbs);
    ohlow.data = minoh;
    ohhigh.data = maxoh;

    inc = income.data[income.data.length - 1];
    ohl = ohlow.data[ohlow.data.length - 1];
    ohh = ohhigh.data[ohhigh.data.length - 1];
    // console.log(inc, ohl, ohh);


    if (document.getElementById("message")) {
        var str = defaultMessage;
        if (minleavewbs != 0) {
            if (minleavewbs == maxleavewbs) {
                str = minleavewbs + " WB" + plural(minleavewbs) + " needed to cover leave";
            } else {
                str = minleavewbs + " to " + maxleavewbs + " WBs needed to cover leave."
            }
        }

        // if ((inc < ohl)) {
        // } else if ((inc > ohl) && (inc < ohh)) {
        //     str = 
        //     str += "<br>" + minwrang + " wranglers and " + maxleavewbs + " leave WBs.";
        // } else if ((inc > ohh)) {
        //     str = "Overheads cleared with " + bds.value() + " BD" + plural(bds.value()) + " and " + maxw  + " WBs.";
        //     str += "<br>" + maxwrang + " wranglers and " + maxleavewbs + " leave WBs.";
        // }
        
        document.getElementById("message").innerHTML = str;
    }}

bds.callback(function (val) {
    overheads.data = costOfBizdevs(theFloor)(val);
    callback070(val);
});

pas.callback(callback070);
eis.callback(callback070);
bundles.callback(callback070);

callback070(1);