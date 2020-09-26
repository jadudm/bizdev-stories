---
layout: page
scripts:
    - "js/charting.js"
    - "js/030-findsomework.js"
---

# Lets Find Some Work

For this story, our business development team has monthly and annual targets for business development[^actual]. 

This gives us a few knobs:

1. How many business development staff do we have?
2. What expectations (sales targets) do we have for those staff every month?
3. Given the resulting sales mix, what kind of revenue are we likely to see come end of year?

*Note: Bundles appear to pay well, but are not common.*

<div class="grid-container">
    <div class="grid-row">
        <div class="grid-col-12">
            <p id="outcome" style="text-align: center">1 BD and no work generates no revenue.</p>
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
        <div class="grid-col-1"></div>
        <div class="grid-col-9">
            <canvas id="thechart"></canvas>
        </div>
        <div class="grid-col-1"></div>
    </div>
</div>

Can you make 18F clear its overheads?

Once you have, [lets do this work](040-howmany.html)!

<hr>

[^actual]: In reality, it is the work of a small number of brave 18F team members who generate business for the organization. Leadership for business development is a detail (4 months). While many consultancies would have a dedicated, specialized business development team, that is not the case for 18F.