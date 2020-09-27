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

*A note on complexity*: From this point forward, the model grows more complex.

# Leaves

In the simplest case, 18F staff accrue 4 hours of leave per pay period (2 weeks). 

Here, we are pretending that the 96h of leave accued by staff every year **must** be covered by someone else. This is added to our overheads as *Leave WBs*, or staff who do the work that other people *are not doing* while they are on leave.

How much work (and therefore how many WBs) do we need to clear minimum overheads?

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

In order to have a workforce, we need to [hire](080-hiring.html).

<hr>

To model the impact of leave, we calculated as follows:

1. 18F WBs work 12 months of the year. 
2. This is 12 * 4 = 48 weeks, or 24 pay periods.
3. 18F WBs therefore each have 24 * 4, or 96 hours of leave/year.

Multiplying 96h by the number of WBs needed to staff our paid work, we discover how much work "goes undone" because of leave. Divding by 10 months[^winter] of time (40w * 40h), or 1600h, we approximate *how many more WBs we need to cover leave*. These get added in, bumping our headcount and, therefore, overheads.

Not accommodated in this approximation are realities of FMLA, or the fact that some career feds accrue time off at double this rate, thus doubling the impact of leave amongst expert staff. Administrative leaves (due to the impact from Covid-19) further complicate the picture.

It is true that "all" leave does not need to be covered. This might manifest as a project having several more days of budget (for example). This, however, ties up several staff for an additional number of days, meaning they cannot start a new (billable) project. Hence, this piece of the model begins to explore the question of whether we need a "deeper bench" to accommodate the realities of leave.

Before we add more knobs, we'll close out with [hiring](080-hiring.html).
<hr>

[^winter]: Again, WBs get paid year-round, but billable work slows down Dec/Jan. We have less need to cover leave in the slow months; it is still an overhead, but it does not impact our ability to staff billable work in the same way. To accommodate the fact that some of this time off is taken during the slow period, we will assume 15% of accrued time off is taken around the new year.