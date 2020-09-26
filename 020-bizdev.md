---
layout: page
scripts:
    - "js/charting.js"
    - "js/020-nonbillables.js"
---

# Earning our $12M

Based on how we staff business development, **it might appear to an outsider that business development is not an organizational priority**. 18F seems to do business development as a "side hustle." That is, the director of business development is a four month detail (a temporary position), and a small number of people at 18F have *some* time carved out for this work. 

For the story being told here, we are going to ask the question "what if we had people fully staffed to do business development for 18F?"[^costing]. 

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

But, we can [look at this in more than one way](021-bizdev.html).

<hr>

[^costing]: We will assume everyone is GS15 step 1, or $109K/year. Much of the US has a 15% GS adjustment, and dense areas closer to 30%; therefore, a flat 20% is applied to all salaries. Further, we will assume a 65% overhead rate, meaning that the salaries used in this calculation are (109 * 1.2 * 1.65), or $215K/yr.