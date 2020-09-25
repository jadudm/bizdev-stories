var defaultValue = 2;
var theFloor = 12;

fixedOverhead = new Dataset({
    label: "Fixed Overhead",
    function: function (month) {
        v = ((Data.monthNames.indexOf(month) + 1) / Data.monthNames.length)*12;
        return v;
    }
});
bizdevOverhead = new Dataset({
    label: "BizDev Overhead",
    bordercolor: 'rgb(66, 00, 66)',
    data: costOfBizdevs(theFloor)(defaultValue),
});

params = {
    datasets: [ fixedOverhead, bizdevOverhead ],
}

sc = new SuperChart("bizdev", params);

bds = new SuperVSlider("slider-bizdevs", 
    {
        width: 100,
        height: 250,
        ticks: 10,
        min: 0,
        max: 10,
        step: 1,
        callback: function (val) {
            bizdevOverhead.data = costOfBizdevs(theFloor)(val);
            sc.chart.update();
        }
    });

sc.chart.update();
