/* Based on:
 * http://github.com/pranavrc/frequency/
 * (c) Pranav Ravichandran <me@onloop.net>
 * Released under the MIT license.
 */
$(document).ready(function () {
    var count = 1;

    $("[data-frequency]").each(function () {
        var frequency = parseFloat(($(this).data('frequency')));
        var beginFadePercentage = (frequency <= 1) ? 75 : (frequency - 1) / frequency * 100;
        var midFadePercentage = (100 + beginFadePercentage) / 2;
        var aName = 'fade' + count;

        $('head').append("<style>                         \
            @keyframes " + aName + " { " + beginFadePercentage +
                "%   {opacity:0.10;}" + midFadePercentage +
                "%   {opacity:1;}                         \
                100% {opacity:0.10;}                      \
            }                                             \
            @-webkit-keyframes " + aName + " { " + beginFadePercentage +
                "%   {opacity:0.10;}" + midFadePercentage +
                "%   {opacity:1;}                         \
                100% {opacity:0.10;}                      \
            }                                             \
            @-moz-keyframes " + aName + " { " + beginFadePercentage +
                "%   {opacity:0.10;}" + midFadePercentage +
                "%   {opacity:1;}                         \
                100% {opacity:0.10;}                      \
            }                                             \
            @-o-keyframes " + aName + " { " + beginFadePercentage +
                "%   {opacity:0.10;}" + midFadePercentage +
                "%   {opacity:1;}                         \
                100% {opacity:0.10;}                      \
            }                                             \
        </style>");

        $(this).css({
            "opacity": 0.1,
            "animation": aName + " " + frequency + "s forwards",
            "-webkit-animation": aName + " " + frequency + "s forwards",
            "-moz-animation": aName + " " + frequency + "s forwards",
            "-o-animation": aName + " " + frequency + "s forwards",
            "animation-iteration-count": "infinite",
            "-webkit-animation-iteration-count": "infinite",
            "-moz-animation-iteration-count": "infinite",
            "-o-animation-iteration-count": "infinite"
        });

        count++;
    });
});
