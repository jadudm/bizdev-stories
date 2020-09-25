class Peep {
    constructor(base, adj, over) {
        this.base = base;
        this.adj = adj;
        this.over = over;
    }

    // The 'n' is how many peeps to calculate for
    cost(n = 1) {
        let v = this.base * this.adj * this.over;
        return (v * n);
    }
}
