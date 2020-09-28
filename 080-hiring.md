---
layout: page
scripts:
    - "js/charting.js"
    - "js/030-findsomework.js"
    - "js/040-howmany.js"
    - "js/050-payme.js"
    - "js/060-wranglers.js"
    - "js/070-leaves.js"
    - "js/080-hiring.js"
---

# Hiring

For the purposes of this model, we will assume 18F staff serve (almost) 4 years. While it is true that 18F WBs are (mostly) hired on 2yr/2yr hiring authorities, the reality is that staff rarely "abut" their next job perfectly.

In a "perfect" model, we would see the departure of 25% of our staff every year. In reality, it is roughly 30%. **This means we must hire 30% of our workforce every year.**

Hiring has costs, both in terms of non-billable staff and non-billable time on the part of WBs[^costs]. With a workforce of 200 people, we can expect to be hiring 60 people/year. This suggests roughly 6000h/year spent by billable staff on hiring. This is the equivalent of almost 3 staff members billable time over the course of a year.

This is the *measurable* impact on the organization.

**The non-measurable of hiring on 18F is shattering**. If year one is "acclimation" to 18F, we have a 1-2 year "window" during which we can ask staff to step into leadership roles... and they can "live" in those roles for (at most) 1-1.5 years before they must leave the organization. 


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

Let's put the [whole story in one place](090-story.html).

<hr>

[^costs]: Hiring has a cost. We will introduce a new kind of (non-billable) colleague, the TT (talent team). Like BizDevs, we'll give TTs hiring targets. We will assume we need 1TT for every 20 hires/year. <br>&nbsp;<br> Further, we need staff to take part in the hiring process. We will model this as a number of hours spent per candidate. Assume 1 hour of recruiting conversation (this may be less, but we will round up for approximation), 4 hours of interview, 1 hour of followup on the part of 4 people, and a final decision round (again, by a team of 4, who we will will assume are already non-billables staffed to do this work: wranglers, TTs, etc.). This suggests a 9h impact on billable staff per hire.<br>&nbsp;<br>However, those staff need to be onboarded. We will assume 2w of bench time (80h), and socialization ("virtual coffee") at 20h (meeting 40 colleagues). This suggests a total cost to overheads at 110h/hire. <br>&nbsp;<br> Because our model would assume that all WBs are "doing work," this equates to time that we need to backfill with staff who are already part of the organization. 

