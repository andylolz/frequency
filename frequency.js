/* frequency.js
 * (c) Pranav Ravichandran <me@onloop.net>
 * Released under the MIT license.
 * http://github.com/pranavrc/frequency/
 */

$(document).ready(function () {
    var fadeList = [];
    $("[data-frequency]").each(function () {
        var frequencyStr = $(this).data('frequency').toString();
        if (fadeList.indexOf(frequencyStr) > -1) { return; }
        fadeList.push(frequencyStr);
        var frequency = parseFloat(frequencyStr);

        var fadeDelay = Math.log(frequency) / Math.LN10;
        var initialDelay = Math.random() * frequency;
        var fadeTimePercentage = (frequency <= 2) ? 75 : fadeDelay * 100 / frequency;
        var aName = 'fade' + frequencyStr.replace('.', 'd');

        $('head').append("<style>                         \
            @keyframes " + aName + " {                    \
                0%   {opacity:1;}" + fadeTimePercentage +
                "%   {opacity:0.10;}                      \
                100% {opacity:0.10;}                      \
            }                                             \
            @-webkit-keyframes " + aName + " {            \
                0%   {opacity:1;}" + fadeTimePercentage +
                "%   {opacity:0.10;}                      \
                100% {opacity:0.10;}                      \
            }                                             \
            @-moz-keyframes " + aName + " {               \
                0%   {opacity:1;}" + fadeTimePercentage +
                "%   {opacity:0.10;}                      \
                100% {opacity:0.10;}                      \
            }                                             \
            @-o-keyframes " + aName + " {                 \
                0%   {opacity:1;}" + fadeTimePercentage +
                "%   {opacity:0.10;}                      \
                100% {opacity:0.10;}                      \
            }                                             \
        </style>");

        $(this).css({
            "opacity": 0.1,
            "animation": aName + " " + frequency + "s " + initialDelay + "s infinite forwards",
            "-webkit-animation": aName + " " + frequency + "s " + initialDelay + "s infinite forwards",
            "-moz-animation": aName + " " + frequency + "s " + initialDelay + "s infinite forwards",
            "-o-animation": aName + " " + frequency + "s " + initialDelay + "s infinite forwards"
        });
    });
});
