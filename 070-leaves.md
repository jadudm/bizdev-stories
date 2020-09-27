---
layout: page
scripts:
    - "js/charting.js"
    - "js/030-findsomework.js"
    - "js/040-howmany.js"
    - "js/050-payme.js"
    - "js/060-wranglers.js"
    - "js/070-leaves.js"
---

# Leaves

In the simplest case, 18F staff accrue 4 hours of leave per pay period (2 weeks). 

Reality is more complex than depicted here.

For simplicity, we pretending that the 96h of leave accued by staff every year **must** be covered by someone else. This is added to our overheads as *Leave WBs*, or staff who simply do the work that other people *are not doing* while they are on leave.

How much work (and how many WBs) do we need to clear minimum overheads?

<div class="grid-container">
    <div class="grid-row">
        <div class="grid-col-12">
            <p id="message" style="text-align: center"><br>&nbsp;</p>
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

<hr>

To model the impact of leave, we calculated as follows:

1. 18F WBs bill 12 months. 
2. This is 12 * 4 = 48 weeks, or 24 pay periods.
3. 18F WBs each have 24 * 4, or 96 hours of leave/year.

Multiplying 96h by the number of WBs needed to staff our paid work, we discover how much work "goes undone" because of leave. Divding by 10 months[^winter] of time (40w * 40h), or 1600h, we approximate *how many more WBs we need to cover leave*. These get added in, bumping our headcount and, therefore, overheads.



<hr>

[^winter]: Again, WBs get paid year-round, but billable work slows down Dec/Jan.