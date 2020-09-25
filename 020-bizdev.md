---
layout: page
scripts:
    - "js/020-nonbillables.js"
---

# Earning our $12M

To clear $12M, we need to do billable work. That work needs to be developed from other federal agencies. 

Based on how we staff business development, **it might appear to an outsider that business development is not an organizational priority**. 18F seems to do business development as a "side hustle." That is, the director of business development is a four month detail (a temporary position), and a small number of people at 18F have *some* time carved out for this work. 

Modeling bizdev this way is hard. For the story being told here, we are going to ask the question "what if we had people fully staffed to do business development for 18F?" **We will see that the overheads of having full-time business development staff is not a financial burden** [^costing]. 



<div class="grid-container">
    <div class="grid-row">
        <div class="grid-col-1" style="position: relative;">
            <p style="writing-mode: vertical-rl; position: absolute; top: 30%; transform: translateY(-30%);">Number of BizDevs</p>
        </div>
        <div class="grid-col-2">
            <div><div id="slider-vertical"></div></div>
        </div>
        <div class="grid-col-9">
            <canvas id="bizdev"></canvas>
        </div>
    </div>
</div>

Compared to the $12M fixed overhead, the cost of a few business development staff doesn't look like much. We can also see what it looks like *added to* the overhead, because (at the end of the budget year) *bizdev is overhead*.

<div class="grid-container">
    <div class="grid-row">
        <div class="grid-col-1" style="position: relative;">
            <p style="writing-mode: vertical-rl; position: absolute; top: 30%; transform: translateY(-30%);">Number of BizDevs</p>
        </div>
        <div class="grid-col-2">
            <div><div id="slider-vertical2"></div></div>
        </div>
        <div class="grid-col-9">
            <canvas id="bizdev2"></canvas>
        </div>
    </div>
</div>

{% comment %}
Business development has a cost. Compared to the fixed overhead, however, it starts to look small. A question we might hold onto, as the numbers all come together, is this: **why do we put this work on people as a part-time or otherwise "secondary" function, when business development is critical to achiving cost recoverability?** 
{% endcomment%}

OK. So, we have some business developers. 

Lets pretend they [bring in some work]().

<hr>

[^costing]: We will assume everyone is GS15 step 1, or $109K/year. Much of the US has a 15% GS adjustment, and dense areas closer to 30%; therefore, a flat 20% is applied to all salaries. Further, we will assume a 65% overhead rate, meaning that the salaries used in this calculation are (109 * 1.2 * 1.65), or $215K/yr.