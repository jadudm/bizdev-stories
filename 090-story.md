---
Title: Once Upon a Time, Part Two
layout: page
scripts:
    - "js/global.js"
    - "js/model.js"
    - "js/charting.js"
    - "js/090-story.js"
---

# Once Upon a Time...

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
    <div class="grid-col-8">
    <ul>
	<li> 18F begins the fiscal year with a fixed $<span class="fixedoverhead"></span>M overhead.</li>
	<li> <span class="bds"></span> BizDevs (BDs) landing <span class="pas"></span> Path Analyses (PAs), <span class="eis"></span> Experiment & Iterates (EIs), and <span class="bundles"></span> bundles each month will <b>net $<span class="income"></span>M</b> over the course of the year.</li>
	<li> For reference, a PA invoices for $<span class="pa.value"></span>M, requires <span class="pa.duration.low"></span> to <span class="pa.duration.high"></span> weeks to complete, and <span class="pa.workers.low"></span> to <span class="pa.workers.high"></span> staff (or "worker bees," WBs for short). </li>
	<li> If <span class="pas"></span> PAs start in one month, then we will need at least <span class="pa.duration.low.double"></span> WBs for the <span class="pas"></span> PAs, and possibly as many as <span class="pa.duration.high.double"></span> WBs for the PAs. Those staff cannot do other work for <span class="pa.duration.low"></span> to <span class="pa.duration.high"></span> weeks.</li>
	<li> <a name="wbcounts.source"></a> Because of this stacking, a minimum of <span class="wbs.min"></span> WBs, and quite possibly as many as <span class="wbs.max"></span> WBs will be needed to keep up with this amount of work&nbsp;<sup><a href="#wbcounts.note">counts</a></sup>.</li>
	<li> A WB is estimated as costing $<span class="wb.cost"></span>M/year, assuming GS15 step 1, a 20% adjustment for region, and 65% overheads.</li>
	<li> To keep up with the work, WBs will cost between $<span class="wb.cost.low"></span>M to $<span class="wb.cost.high"></span>M, <b>likely closer to $<span class="wb.cost.high"></span>M</b>.</li>
	<li> <a name="leavehours.source"></a> WBs earn 4h leave per pay period. If months are 4 weeks, there are 48w/year, or 24 pay periods. This is 96 hours of leave per year&nbsp;<sup><a href="#leavehours.note">leave</a></sup>. </li>
	<li> <a name="coverthework.source"></a> Leave is <i>work not done</i>. In this model, we need to cover the work&nbsp;<sup><a href="#coverthework.note">coverthework</a></sup>. <span class="wbs.max"></span> WBs take <span class="wbs.max.leave.hours"></span>h of leave. This is enough work to <b>require <span class="wbs.cover.leave"></span> WBs to cover the leaves</b>.</li>
	<li> <a name="churn.source"></a> 18F loses <span class="churn.percent"></span>% of our team every year due to termout and/or departure for other employment&nbsp;<sup><a href="#churn.note">churn</a></sup>. We need to hire to replace these staff. Enter <b>TTs</b>, or <i>Talent Team members</i>.</li>
	<li> We will model requiring 1 TT (non-billable) for every <span class="wbsPerTT"></span> WBs we need to hire. <b>We need to replace <span class="replace.wbs"></span> WBs</b>, needing <span class="replace.TTs"></span> TTs, adding $<span class="replace.TTs.overhead"></span>M to our overheads.</li>
	<li> <a name="onboarding.source"></a> Onboarding has a real cost <sup><a href="#onboarding.note">onboarding</a></sup>, and it is work that must be covered (like leaves). Hiring <span class="replace.wbs"></span> will add <span class="replace.wbs.hours"></span> hours of non-billable time, which must be <b>covered by <span class="replace.wbs.additionalwbs"></span> WBs</b>.</li>
	<li> This brings our <b>total WB count to <span class="wbs.total2"></span></b>, up from <span class="wbs.total1"></span> due to leaves and hiring.</li>
	<li> WBs would probably do better with <i>some</i> management.</li>
	<li> We assume <span class="wranglers.fixed"></span> fixed wranglers for 18F (Director of Design, Director of Eng, etc.). We further assume 1 additional wrangler for every <span class="wranglers.per"></span> WBs. This means we need <span class="wranglers.total"></span> wranglers in total.</li>
	<li> <b><span class="wranglers.total"></span> wranglers add $<span class="wranglers.cost"></span>M</b> to our overheads.</li>
	<li> Our end of the year <b>net is $<span class="income"></span>M</b>, and our <b>costs are $<span class="overheads.total"></span>M</b>. </li>
    </ul>

    </div> <!-- 9 -->
    <div class="grid-col-1">
    </div>
    <div class="grid-col-3">
    <br>
    <b>Net</b>: $<span class="income"></span>M
    <br>
    <b>Costs</b>: $<span class="overheads.total"></span>M
    <br>
    <span class="willitblend"></span>
    </div>
</div>

Miss something? [Back to the beginning](010-fixed-overhead.html);

<hr>

### Footnotes

<p>
    <b><a name="wbcounts.note">counts</a></b>: The minimal number of WBs needed to do work assumes too many things to be realistic. It assumes the projects 1) always launch for the shortest possible amount of time, 2) that they always start on time, 3) they never run over, and 4) never need an extra staff member because workload was underestimated. In short, <b>the lower bound is unlikely to *ever* survive contact with reality</b>. <a href="#wbcounts.source">🔙</a>
</p> 

<p>
    <b><a name="leavehours.note">leave</a></b>: There are multiple problems with this, but it is meant to be an approximation. First, there are more pay periods in a year, so we accumulate a bit more leave (roughly 8h) per year. So, this is an *underestimate* in that regard. Anyone who is in their 3rd+ year will accumulate PTO at a higher rate. Therefore, this is again an undercount. <a href="#leavehours.source">🔙</a>
</p>

<p>
    <b><a name="onboarding.note">onboarding</a></b>: This is real, yo. Hiring requires time of both TTs and WBs; this will *only* speak to the time WBs take, because that is time they spend *not billing*. Many hires involve a 30m to 60m conversation with the candidate as part of the recruiting process: they want to know what it is like to work at 18F. A hire then requires an interview, which involves 4x slots at 1h each from 4x WBs. Those WBs then come together to discuss the work, adding another 4h to the process. Once new staff join, they typically bench for 2w while they acclimate and meet their colleagues. <b>This is essential for remote workers. It cannot be "cut" or "shortened."</b> At a minimum, we will model 20, 30m "virtual coffees," suggesting another 10h of non-billable time (on the part of WBs across the org). This means 1 + 4 + 4 + 80h + 10h, or 99h of non-billable time in a hire. (We must add in the bench time of the new hire, because they now work for 18F.) <a href="#onboarding.source">🔙</a>
</p>

<p>
    <b><a name="churn.note">churn</a></b>: A 4-year termout means 25% turn over every year. This is an underestimate, for the simple reason that people cannot always make employment "abut" perfectly. As a result, we tend to see departures in years 3 and 4 as 18Fers work to make sure they remain employed, which bumps our churn percentage up. <a href="#churn.source">🔙</a>
</p>


<p>
    <b><a name="coverthework.note">coverthework</a></b>: Why do we "need" to cover the work? Either we need a way to model work being delayed (which would mean, essentially, adding some time to every engagement, and carrying that time as pure overhead), or we need to assume engagements execute on time, and determine the cost of the work to complete the engagements. In the end, either approximation is close enough: either we're paying people to do the work, or we're paying people *not* to do the work. <a href="#coverthework.source">🔙</a>
</p>

