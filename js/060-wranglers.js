fixedWranglers = 5;
wbsPerWrangler = 20;
defaultMessage = "Overheads not cleared.<br>&nbsp;";
if (document.getElementById("message")) {
    document.getElementById("message").innerHTML = defaultMessage;
}

function wranglerCallback(val) {
    // Add in the cost of WBs.
    nw = numWorkers(getSliderValues());
    nw = numWorkers(getSliderValues());

    minwbs.data = nw.low.map(v => v * bds.value());
    maxwbs.data = nw.high.map(v => v * bds.value());
    minw = Math.max(...minwbs.data);
    maxw = Math.max(...maxwbs.data);

    minwrang = (fixedWranglers + Math.ceil(minw / wbsPerWrangler));
    maxwrang = (fixedWranglers + Math.ceil(maxw / wbsPerWrangler));

    minoh = costOfBizdevs(theFloor)(bds.value() + minw + minwrang);
    maxoh = costOfBizdevs(theFloor)(bds.value() + maxw + maxwrang);
    ohlow.data = minoh;
    ohhigh.data = maxoh;

    inc = income.data[income.data.length - 1];
    ohl = ohlow.data[ohlow.data.length - 1];
    ohh = ohhigh.data[ohhigh.data.length - 1];
    // console.log(inc, ohl, ohh);

    newWorkCallback(val);

    if (document.getElementById("message")) {
        var str = defaultMessage;
        if ((inc < ohl)) {
        } else if ((inc > ohl) && (inc < ohh)) {
            str = "Overheads cleared with " + bds.value() + " BD" + plural(bds.value()) + " and " + minw + " WBs. (Optimal conditions.)";
            str += "<br>" + minwrang + " wranglers."
        } else if ((inc > ohh)) {
            str = "Overheads cleared with " + bds.value() + " BD" + plural(bds.value()) + " and " + maxw + " WBs. (Realistic conditions.)";
            str += "<br>" + maxwrang + " wranglers."
        }
        
        document.getElementById("message").innerHTML = str;
    }}

bds.callback(function (val) {
    overheads.data = costOfBizdevs(theFloor)(val);
    wranglerCallback(val);
});

pas.callback(wranglerCallback);
eis.callback(wranglerCallback);
bundles.callback(wranglerCallback);

wranglerCallback(1);