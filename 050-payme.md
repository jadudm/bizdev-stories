---
layout: page
scripts:
    - "js/charting.js"
    - "js/030-findsomework.js"
    - "js/040-howmany.js"
    - "js/050-payme.js"
---

# I Want My Two Dollars![^twodollars]

In order for revenue to be generated, we need to pay the WBs.

In this model, the overhead is calculated as the sum of:

* The $12M fixed overhead.
* The cost of business development.
* The salaries (GS15s1), region adjustment (20%) and overheads (65%) for staff.

<div class="grid-container">
    <div class="grid-row">
        <div class="grid-col-12">
            <p id="message" style="text-align: center"></p>
        </div>
    </div>
    <div class="grid-row">
        <div class="grid-col-3" style="position: relative;">
            <p style="text-align: center"># of BizDevs</p>
            <div><div id="slider-bizdevs" style="margin-top: -2em;"></div></div>
        </div>
        <div class="grid-col-3">
            <p style="text-align: center">PAs/mo</p>
            <div><div class="centerblock" id="slider-pas" style="margin-top: -2em;"></div></div>
        </div>
        <div class="grid-col-3">
            <p style="text-align: center">EIs/mo</p>
            <div><div class="centerblock" id="slider-eis" style="margin-top: -2em;"></div></div>
        </div>
        <div class="grid-col-3">
            <p style="text-align: center">bundles/mo</p>
            <div><div class="centerblock" id="slider-bundles" style="margin-top: -2em;"></div></div>
        </div>
    </div>
    <div class="grid-row">
        <div class="grid-col-6">
            <canvas id="thechart"></canvas>
        </div>        
        <div class="grid-col-6">
            <canvas id="workerchart"></canvas>
        </div>
    </div>
</div>

To reiterate, **optimal conditions are not the real world**. Staffing requirements almost certainly must be closer to the max rather than the minimum in order to clear overheads.

In the next two slides, we'll explore the cost of adding dedicated **management**, and then consider the impact of **leaves**.

First, [management](060-wranglers.html).

<hr>

[^twodollars]: *[Better Off Dead](https://youtu.be/6z9Cg46Nktw?t=173)*.