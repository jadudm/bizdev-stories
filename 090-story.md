---
layout: page
scripts:
    - "js/global.js"
    - "js/model.js"
    - "js/charting.js"
    - "js/090-story.js"
---

# The Story So Far

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

* 18F begins the fiscal year with a fixed $<span class="fixedoverhead"></span>M overhead.
* <span class="bds"></span> BizDevs (BDs) landing <span class="pas"></span> Path Analyses (PAs), <span class="eis"></span> Experiment & Iterates (EIs), and <span class="bundles"></span> bundles each month will <b>net $<span class="income"></span>M</b> over the course of the year.
* For reference, a PA invoices for $<span class="pa.value"></span>M, requires <span class="pa.duration.low"></span> to <span class="pa.duration.high"></span> weeks to complete, and <span class="pa.workers.low"></span> to <span class="pa.workers.high"></span> staff (or "worker bees," WBs for short). 
* If two PAs start in one month, then we will need at least 6 WBs for the two PAs, and possibly as many as 8 WBs for the two PAs. Those staff cannot do other work for <span class="pa.duration.low"></span> to <span class="pa.duration.high"></span> weeks.
* Because of this stacking, a minimum of <span class="wbs.min"></span> WBs, and quite possibly as many as <span class="wbs.max"></span> WBs will be needed to keep up with this amount of work[^wbcounts].
* A WB is estimated as costing $<span class="wb.cost"></span>M/year, assuming GS15 step 1, a 20% adjustment for region, and 65% overheads.
* To keep up with the work, WBs will cost between $<span class="wb.cost.low"></span>M to $<span class="wb.cost.high"></span>M, <b>more likely $<span class="wb.cost.high"></span>M</b>.
* We assume <span class="wranglers.fixed"></span> fixed wranglers for 18F (Director of Design, Director of Eng, etc.). We further assume 1 additional wrangler for every <span class="wranglers.per"></span> WBs. This means we need <span class="wranglers.total"></span> wranglers in total.
* <b><span class="wranglers.total"></span> wranglers add $<span class="wranglers.cost"></span>M</b> to our overheads.
 
<hr>

[^wbcounts]: The minimal number of WBs needed to do work assumes too many things to be realistic. It assumes the projects 1) always launch for the shortest possible amount of time, 2) that they always start on time, 3) they never run over, and 4) never need an extra staff member because workload was underestimated. In short, **the lower bound is unlikely to *ever* survive contact with reality**. 