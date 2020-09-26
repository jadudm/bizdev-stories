---
layout: page
scripts:
    - "js/charting.js"
    - "js/021-bizdev.js"
---

# Stacked Overheads

Compared to the $12M fixed overhead, the cost of a few business development staff doesn't look like much. We can also see what it looks like *added to* the overhead, because (at the end of the budget year) *bizdev is overhead*.

<div class="grid-container">
    <div class="grid-row">
        <div class="grid-col-1" style="position: relative;">
            <p style="writing-mode: vertical-rl; position: absolute; top: 30%; transform: translateY(-30%);">Number of BizDevs</p>
        </div>
        <div class="grid-col-2">
            <div><div id="slider-bizdevs"></div></div>
        </div>
        <div class="grid-col-9">
            <canvas id="bizdev"></canvas>
        </div>
    </div>
</div>

OK. So, we have some business developers. 

Lets pretend they [bring in some work](030-findsomework.html).
