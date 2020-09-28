---
title: Rhythm Section Want Ad
layout: page
scripts:
    - "js/charting.js"
    - "js/030-findsomework.js"
    - "js/040-howmany.js"
---

# How Many Workers?

For brevity, I'm going to refer to all billable 18F workers as <b>worker bees</b> or <b>WBs</b>.

When we land a path analysis, it requires <span id="papeople"></span> WBs between <span id="paweeks"></span> weeks to do the work.

**Here's the catch**. If you start two PAs in the first month, you need *at least* 6 people on those projects for two months. If you start two more PAs in the second month, you will need 6 people (on the first set of PAs) *plus another 6 people* (on the second set of PAs). 



<div class="grid-container">
    <div class="grid-row">
        <div class="grid-col-12">
            <p id="workmix" style="text-align: center">No WBs needed.</p>
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

Perhaps we should see what happens when we [pay the staff](050-payme.html).

<hr>

## How This Is Calculated

The work mix is examined (e.g. 2 BDs generating 2 PAs/month yields 4 PAs/month).

A PA (for example) requires 3-4 people and lasts 8-10 weeks. Therefore, the best case is that a PA requires 3 people for 8 weeks, and worst case for 10 weeks. 

Months are assumed to be 4 weeks. Therefore, a PA is at least 2 months, and (rounding up) up to 3 months.

A sum is then carried out. Looking at minimums, in month 1, we need 12 WBs. In month two, 24. Optimally, the first  set of PAs ends, so we remove 12 WBs, but add 12 back in (because 4 more PAs are starting). For this reason, a work mix of 4 PAs/month has **an *optimal* staffing load of 24 WBs**.

**Staffing is never this perfect**. Sometimes a PA goes long. Sometimes we don't have the right mix. Therfore, if we round up, and assume all PAs require 4 people, and last 10 weeks (3 months), we end up with **a *worst-case* staffing load of 48 WBs**.

Here, "worst-case" might actually mean "a more realistic number."
