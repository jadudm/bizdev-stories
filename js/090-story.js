bds = new SuperHSlider("slider-bizdevs", 
    {
        width: 120,
        height: 250,
        ticks: 10,
        min: 0,
        max: 10,
        step: 1,
        default: 4,
        callback: function (val) {
            //overheads.data = costOfBizdevs(theFloor)(val);
            // After updating costs, update the value prop.
            updateStory(1);
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
    default: 4,
    callback: updateStory
});
eis = new SuperHSlider("slider-eis", 
{   
    width: 120,
    height: 250,
    ticks: 10,
    min: 0,
    max: 8,
    step: 1,
    default: 2,
    callback: updateStory
});
bundles = new SuperHSlider("slider-bundles", 
{   
    width: 120,
    height: 250,
    ticks: 3,
    min: 0,
    max: 3,
    step: 1,
    default: 0,
    callback: updateStory
});

function getSliderValues() {
    return {
        pa: pas.value(),
        ei: eis.value(),
        bundle: bundles.value(),
    }
}

function setHTML(tag, v) {
    elems = document.getElementsByClassName(tag);
    if (elems) {
        for (e of elems) {
            e.innerHTML = v;    
        }
    }
}


function getSliderValues() {
    return {
        pa: pas.value(),
        ei: eis.value(),
        bundle: bundles.value(),
    }
}

function annualValueOfWork(bd, w) {
    total = 0;
    for (k of Object.keys(w)) {
        total += (w[k] * services[k].value);
    }
    return total * bd * Data.monthNames.length;
}

function wbsNeeded (bd, w) {
    needed = {low: 0, high: 0 };

    for (k of Object.keys(w)) {
        needed.low += services[k].workers.low * w[k];
        needed.high += services[k].workers.high * w[k];
    }

    needed.low = needed.low * bd;
    needed.high = needed.high * bd;
    
    return needed;
}

function updateStory(v) {
    subst = {};

    if (document.getElementsByClassName("fixedoverhead")) {
        subst["fixedoverhead"] = Data.fixedOverhead;
        subst["bds"] = bds.value();

        work = getSliderValues();
        subst["pas"] = work.pa;
        subst["eis"] = work.ei;
        subst["bundles"] = work.bundle;
        income = annualValueOfWork(subst.bds, work);
        subst["income"] = income.toFixed(2);
        subst["pa.value"] = services.pa.value;
        subst["pa.duration.low"] = services.pa.duration.low;
        subst["pa.duration.high"] = services.pa.duration.high;
        subst["pa.workers.low"] = services.pa.workers.low;
        subst["pa.workers.high"] = services.pa.workers.high;

        needed = numWorkers(work);
        needed.low = needed.low[needed.low.length - 1] * subst["bds"];
        needed.high = needed.high[needed.high.length - 1] * subst["bds"];

        subst["wbs.min"] = needed.low;
        subst["wbs.max"] = needed.high;
        p = new Peep(.109, 1.2, 1.65);
        subst["wb.cost"] = p.cost(1).toFixed(2);
        subst["wb.cost.low"] = p.cost(needed.low).toFixed(2);
        subst["wb.cost.high"] = p.cost(needed.high).toFixed(2);

        subst["wranglers.fixed"] = Data.wranglersFixed;
        subst["wranglers.per"] = Data.wbsPerWB;
        totalWranglers = Data.wranglersFixed + Math.ceil(needed.high / Data.wbsPerWB);
        subst["wranglers.total"] = totalWranglers;
        subst["wranglers.cost"] = p.cost(totalWranglers).toFixed(2);

        for (k of Object.keys(subst)) {
            console.log(k, subst[k]);
            setHTML(k, subst[k]);
        }
    }  
    

}

updateStory(1);