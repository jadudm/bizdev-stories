---
layout: page
scripts:
    - "js/030-dosomework.js"
---

# Lets Do Some Work

Modeling how we *actually* work is hard. For this story, we're going to pretend that our business development team (as opposed to part-time work on the part of talented 18Fers) has monthly and annual targets for business development. 

This way, we can turn a few knobs:

1. How many business development staff do we have?
2. What expectations (sales targets) do we have for those staff?
3. Given the resulting sales mix, what kind of revenue are we likely to see come end of year?


<div class="grid-container">
    <div class="grid-row">
        <div class="grid-col-3" style="position: relative;">
            <p style="text-align: center"># of BizDevs</p>
            <div><div id="slider-bizdevs" style="margin-top: -2em;"></div></div>
        </div>
        <div class="grid-col-2">
            <p style="text-align: center">PAs/mo</p>
            <div><div class="centerblock" id="slider-pas" style="margin-top: -2em;"></div></div>
        </div>
    </div>
    <div class="grid-row">
        <div class="grid-col-1"></div>
        <div class="grid-col-9">
            <canvas id="dosomework"></canvas>
        </div>
        <div class="grid-col-1"></div>
    </div>
</div>