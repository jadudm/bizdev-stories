// https://bl.ocks.org/johnwalley/e1d256b81e51da68f7feb632a53c3518


var defaultValue = 2;
var theFloor = 12;

overheads = new Dataset({
    label: "Overheads",
    bordercolor: 'rgb(66, 00, 66)',
    data: costOfBizdevs(theFloor)(defaultValue),
    order: 1
});

income = new Dataset({
    label: "Income",
    bordercolor: 'rgb(00, 66, 00)',
    data: new Array(Data.monthNames.length).fill(0),
    order: 2,
});


params = {
    datasets: [ overheads, income ],
}

sc = new SuperChart("thechart", params);

function workSliderCallback (val) {
    // First, update the data array for the chart.
    // Then, grab the year-end income from the work.
    income.data = valueOfWork(getSliderValues()).map(v => v * bds.value() * Data.monthNames.length);
    totalIncome = income.data[income.data.length - 1].toFixed(2);
    sc.chart.update();
    // Update the story text.
    str = ((totalIncome > 12) ? "🌟 " : "")
        + "" + bds.value() + " BD" 
        + (((bds.value() == 0) || (bds.value() > 1)) ? "s" : "")
        + " generate" 
        + (((bds.value() == 0) || (bds.value() > 1)) ? "" : "s")
        + " $" +  totalIncome + "M in revenue."
        + ((totalIncome > 12) ? " 🌟" : "");
    document.getElementById("outcome").innerHTML = str;
}

bds = new SuperHSlider("slider-bizdevs", 
    {
        width: 120,
        height: 250,
        ticks: 10,
        min: 0,
        max: 10,
        step: 1,
        default: 1,
        callback: function (val) {
            overheads.data = costOfBizdevs(theFloor)(val);
            // After updating costs, update the value prop.
            workSliderCallback(val);
        }
    });


pas = new SuperHSlider("slider-pas", 
    {   
        width: 120,
        height: 250,
        ticks: 10,
        min: 0,
        max: 10,
        step: 1,
        default: 0,
        callback: workSliderCallback,
    });
eis = new SuperHSlider("slider-eis", 
    {   
        width: 120,
        height: 250,
        ticks: 10,
        min: 0,
        max: 8,
        step: 1,
        default: 0,
        callback: workSliderCallback
    });
bundles = new SuperHSlider("slider-bundles", 
    {   
        width: 120,
        height: 250,
        ticks: 10,
        min: 0,
        max: 8,
        step: 1,
        default: 0,
        callback: workSliderCallback
    });

function getSliderValues() {
    return {
        pa: pas.value(),
        ei: eis.value(),
        bundle: bundles.value(),
    }
}

sc.chart.update();