---
layout: page
scripts:
    - "js/charting.js"
    - "js/030-findsomework.js"
    - "js/040-howmany.js"
    - "js/050-payme.js"
    - "js/060-wranglers.js"
---

# Herding Cats

We work in a complex space. Some people wrangling is warranted.

This model assumes 5 fixed management roles (Directors of Design, Eng, etc.) and one additional full-time wrangler per 20 WBs. Wranglers are assumed in this model to be pure overhead[^inpractice].

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

**Management does not add a significant overhead** to the 18F story.

<hr>

[^inpractice]: If, in practice, we wish to have management roles include some billable time, we can. However, we see that management roles do not "swamp" our staffing numbers. With 2xBDs pulling 4xPAs and 1xEI per month, we need roughly 130 staff members to "do the work," but only 9 managers. **The cost of having dedicated business development and management does not dominate our costing model.**