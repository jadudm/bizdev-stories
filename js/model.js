class Peep {
    constructor (base, adj, over) {
        this.base = base;
        this.adj = adj;
        this.over = over;
    }

    // The 'n' is how many peeps to calculate for
    // It assumes the cost for a year.
    cost (n = 1) {
        let v = this.base * this.adj * this.over;
        return (v * n);
    }
}

class Range {
    constructor (low, high) {
        this.low = low;
        this.high = high;
    }

    toString () {
        return "" + this.low + " to " + this.high;

    }
}

class Service {
    // workers: how many people does this service require
    //          Should be a pair (low, high)
    // duration: weeks (pair, low/high)
    // value: in millions
    constructor (workers, duration, value) {
        this.workers = new Range(workers[0], workers[1]);
        this.duration = new Range(duration[0], duration[1]);
        this.value = value;
    }
}

services = {}
services.pa = new Service([3,4], [8,10], 0.25);
services.ei = new Service([4,6], [12, 12], 0.65);
services.bundle = new Service([4,6], [20, 20], 0.855);

// GS15s1 * 1.2 * 1.65 = 215K
// 215K / 50w / 40h/week = $108/hr
// 3peep * 8w * 36h/w = 864h * 108/h = 94K
// 4peep * 8w * 36h/w = 1152 * 108/h = 135K
// 4p * 10w * 36h/w * 108/h= 169K
// 4p * 10 * 32h * 108/h = 150K

// Spreads a value over a year.
// So, in a 10mo year, 100 becomes
// [10, 20, 30, 40, ..., 100]
// because we plot it that way.
function valueOverYear (v) {
    arr = [];
    for (i = 0; i < Data.monthNames.length; i++) {
        monthValue = ((i + 1) / Data.monthNames.length) * v;
        monthValue = (Math.round(monthValue * 100)/100.0)
        arr.push(monthValue);
    }
    return arr;
}

// The calculates the cost of a given number of bizdevs.
// The "floor" is if we want to start counting from 0, or 12M, etc.
// (It's a plotting parameter...)
function costOfBizdevs (floor = 0) {
    return function (numBizDevs) {
        p = new Peep(.109, 1.2, 1.65);
        c = p.cost(numBizDevs) + floor;
        // c is the cost of 'n' peeps for a whole year.
        // This loop scales that cost to the right number of months.
        // newdata = [];
        // for (i = 0; i < Data.monthNames.length; i++) {
        //     newdata.push((((i + 1) / Data.monthNames.length) * c));
        // }
        return valueOverYear(c);
    }
}

// We calculate the value per month.
function valueOfWork(amount) {
    // Kinds should be an object.
    // e.g. { pa: 3, ei: 7 }
    value = 0;
    Object.keys(amount).forEach(function(key) {
        value += services[key].value * amount[key];
    });
    //let result = new Array(Data.monthNames.length).fill(value);
    return valueOverYear(value);
}

function numWorkers(kinds) {
    // Kinds should be an object.
    // e.g. { pa: 3, ei: 7 }
    // Those are per-month values. So.

    // Every month, start the requisite number of projects.
    // Push objects that describe how many people, the start start month, and
    // the end month.
    low = [];
    high = [];
    for (ndx = 0 ; ndx < Data.monthNames.length; ndx++) {
        // I will start the number of projects described.
        // That means I need that many workers each month.
        Object.keys(kinds).forEach(function(key) {
            workers = services[key].workers;
            duration = services[key].duration;
            low.push({need: workers.low * kinds[key], start: ndx, end: (ndx + Math.floor(duration.low / 4.0) - 1)});
            high.push({need: workers.high * kinds[key], start: ndx, end: (ndx + Math.ceil(duration.high / 4.0) - 1)});
        });
    }
    // Now, I'm going to arrange this into two data serieses.
    // One is a low estimate. The other is a high estimate. 
    // Each month, see if it shows up in the duration range (start-end)
    // If it does, add in the number of workers needed.
    resultlow = [];
    resulthigh = [];
    for (ndx = 0 ; ndx < Data.monthNames.length; ndx++) {
        lowcount = 0;
        highcount = 0;
        // In this month, count how many projects are alive. 
        // Sum up the number of workers needed for those projects.
        for (obj of low) {
            if ((ndx >= obj.start) && (ndx <= obj.end)) {
                lowcount += obj.need;
            }
        }
        for (obj of high) {
            if ((ndx >= obj.start) && (ndx <= obj.end)) {
                highcount += obj.need;
            }
        }
        resultlow.push(lowcount);
        resulthigh.push(highcount);
    }
    return {low: resultlow, high: resulthigh};
}