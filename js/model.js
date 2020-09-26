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

// Spreads a value over a year.
// So, in a 10mo year, 100 becomes
// [10, 20, 30, 40, ..., 100]
// because we plot it that way.
function valueOverYear (v) {
    arr = [];
    for (i = 0; i < Data.monthNames.length; i++) {
        arr.push(((i + 1) / Data.monthNames.length) * v);
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

function valueOfWorkx(kinds) {
    // Kinds should be an object.
    // e.g. { pa: 3, ei: 7 }
    lowvalue = 0;
    highvalue = 0;
    Object.keys(kinds).forEach(function(key) {
        workers = services[key].workers
        duration = services[key].duration
        value = services[key].value 
    });
}