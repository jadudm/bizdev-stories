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
services.PA = new Service([3,4], [8,10], .25);
services.EI = new Service([4,6], [12, 14], .65);


// The calculates the cost of a given number of bizdevs.
// The "floor" is if we want to start counting from 0, or 12M, etc.
// (It's a plotting parameter...)
function costOfBizdevs (floor = 0) {
    return function (numBizDevs) {
        console.log("beep");
        p = new Peep(.109, 1.2, 1.65);
        c = p.cost(numBizDevs) + floor;
        // c is the cost of 'n' peeps for a whole year.
        // This loop scales that cost to the right number of months.
        newdata = [];
        for (i = 0; i < Data.monthNames.length; i++) {
            newdata.push((((i + 1) / Data.monthNames.length) * c));
        }
        return newdata
    }
}