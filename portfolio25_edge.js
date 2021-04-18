/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Background_Splash',
                display: 'block',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto'],
                sizeRange: ['','1920px','',''],
                clip: ['rect(0px 1920px 1080px 0px)']
            },
            {
                id: 'vignette3',
                display: 'block',
                type: 'image',
                rect: ['0', '0px','1920px','540px','auto', 'auto'],
                opacity: 0.4017094017094,
                fill: ["rgba(0,0,0,0)",im+"vignette.png",'0px','0px']
            },
            {
                id: 'news_and_social',
                display: 'none',
                type: 'rect',
                rect: ['0px', '605px','auto','auto','auto', 'auto']
            },
            {
                id: 'Portfolio',
                display: 'none',
                type: 'rect',
                rect: ['0px', '996px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'Profile',
                display: 'none',
                type: 'rect',
                rect: ['0', '1020px','auto','auto','auto', 'auto']
            },
            {
                id: 'Top_Banner2',
                type: 'rect',
                rect: ['0px', '0px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 1920px 186px 0px)'],
                opacity: 1
            },
            {
                id: 'Bottom_Banner',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0px','1920px','50px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'image_preview',
                type: 'rect',
                rect: ['-1920', '100','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            }],
            symbolInstances: [
            {
                id: 'Profile',
                symbolName: 'Profile',
                autoPlay: {

                }
            },
            {
                id: 'news_and_social',
                symbolName: 'news_and_social',
                autoPlay: {

                }
            },
            {
                id: 'Portfolio',
                symbolName: 'Portfolio',
                autoPlay: {

                }
            },
            {
                id: 'Background_Splash',
                symbolName: 'Symbol_1',
                autoPlay: {

                }
            },
            {
                id: 'Top_Banner2',
                symbolName: 'top_banner2',
                autoPlay: {

                }
            },
            {
                id: 'image_preview',
                symbolName: 'image_preview',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Background_Splash}": [
                ["style", "top", '186px'],
                ["style", "max-width", '1920px'],
                ["style", "display", 'block'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "clip", [0,1920,986,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Profile}": [
                ["style", "top", '1020px'],
                ["subproperty", "filter.blur", '2px'],
                ["style", "display", 'none']
            ],
            "${_image_preview}": [
                ["style", "cursor", 'pointer']
            ],
            "${_vignette3}": [
                ["style", "top", '186px'],
                ["style", "height", '986px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0']
            ],
            "${_Top_Banner2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "clip", [0,1920,186,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Portfolio}": [
                ["style", "top", '1020px'],
                ["subproperty", "filter.blur", '2px'],
                ["style", "clip", 0, {valueTemplate:'auto'} ],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "min-width", '0px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '2764px'],
                ["style", "max-width", 'none'],
                ["style", "width", '1920px']
            ],
            "${_news_and_social}": [
                ["style", "top", '985px'],
                ["style", "display", 'none'],
                ["subproperty", "filter.blur", '3px'],
                ["style", "left", '0px'],
                ["style", "clip", 0, {valueTemplate:'auto'} ]
            ],
            "${_Bottom_Banner}": [
                ["style", "top", '1022px'],
                ["style", "display", 'none'],
                ["style", "height", '50px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1920px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 80000,
            autoPlay: false,
            labels: {
                "Home": 0,
                "News": 15250,
                "Work": 28000,
                "Profile": 40750
            },
            timeline: [
                { id: "eid4515", tween: [ "subproperty", "${_news_and_social}", "filter.blur", '2px', { fromValue: '3px'}], position: 1000, duration: 750, easing: "easeInOutQuad" },
                { id: "eid4537", tween: [ "subproperty", "${_news_and_social}", "filter.blur", '0px', { fromValue: '2px'}], position: 3500, duration: 5500, easing: "easeInOutQuad" },
                { id: "eid5146", tween: [ "subproperty", "${_news_and_social}", "filter.blur", '2px', { fromValue: '0px'}], position: 16250, duration: 5500, easing: "easeInOutQuad" },
                { id: "eid5823", tween: [ "style", "${_vignette3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5824", tween: [ "style", "${_vignette3}", "display", 'none', { fromValue: 'block'}], position: 15250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5832", tween: [ "style", "${_Bottom_Banner}", "display", 'block', { fromValue: 'none'}], position: 41750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1630", tween: [ "style", "${_Background_Splash}", "top", '186px', { fromValue: '186px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1632", tween: [ "style", "${_Background_Splash}", "top", '86px', { fromValue: '186px'}], position: 1750, duration: 1750, easing: "easeInOutQuad" },
                { id: "eid3691", tween: [ "style", "${_Background_Splash}", "top", '-518px', { fromValue: '86px'}], position: 3500, duration: 11750, easing: "easeInOutQuad" },
                { id: "eid5848", tween: [ "style", "${_Top_Banner2}", "clip", [86,1920,186,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1920,186,0]}], position: 1750, duration: 1750, easing: "easeInOutQuad" },
                { id: "eid4929", tween: [ "style", "${_Bottom_Banner}", "top", '970px', { fromValue: '1022px'}], position: 41750, duration: 1750, easing: "easeInOutQuad" },
                { id: "eid1616", tween: [ "style", "${_Top_Banner2}", "top", '-86px', { fromValue: '0px'}], position: 1750, duration: 1750, easing: "easeInOutQuad" },
                { id: "eid3796", tween: [ "style", "${_vignette3}", "height", '986px', { fromValue: '986px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid3800", tween: [ "style", "${_vignette3}", "height", '845px', { fromValue: '986px'}], position: 1000, duration: 750, easing: "easeInOutQuad" },
                { id: "eid3801", tween: [ "style", "${_vignette3}", "height", '931px', { fromValue: '845px'}], position: 1750, duration: 1750, easing: "easeInOutQuad" },
                { id: "eid3805", tween: [ "style", "${_vignette3}", "height", '0px', { fromValue: '931px'}], position: 3500, duration: 11750, easing: "easeInOutQuad" },
                { id: "eid5830", tween: [ "style", "${_Profile}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid3636", tween: [ "style", "${_news_and_social}", "top", '1172px', { fromValue: '985px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1603", tween: [ "style", "${_news_and_social}", "top", '1031px', { fromValue: '1172px'}], position: 1000, duration: 750, easing: "easeInOutQuad" },
                { id: "eid1638", tween: [ "style", "${_news_and_social}", "top", '100px', { fromValue: '1031px'}], position: 3500, duration: 11750, easing: "easeInOutQuad" },
                { id: "eid5193", tween: [ "subproperty", "${_Profile}", "filter.blur", '0px', { fromValue: '2px'}], position: 29000, duration: 5500, easing: "easeInOutQuad" },
                { id: "eid5828", tween: [ "style", "${_Portfolio}", "display", 'block', { fromValue: 'none'}], position: 16250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5829", tween: [ "style", "${_Portfolio}", "display", 'none', { fromValue: 'block'}], position: 40750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid3794", tween: [ "style", "${_vignette3}", "opacity", '0.4', { fromValue: '0'}], position: 0, duration: 1750, easing: "easeInOutQuad" },
                { id: "eid14", tween: [ "style", "${_Stage}", "width", '1920px', { fromValue: '1920px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid4878", tween: [ "style", "${_Profile}", "top", '102px', { fromValue: '1020px'}], position: 29000, duration: 11750, easing: "easeInOutQuad" },
                { id: "eid5825", tween: [ "style", "${_news_and_social}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5826", tween: [ "style", "${_news_and_social}", "display", 'block', { fromValue: 'none'}], position: 1009, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5827", tween: [ "style", "${_news_and_social}", "display", 'none', { fromValue: 'block'}], position: 28000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5192", tween: [ "subproperty", "${_Portfolio}", "filter.blur", '0px', { fromValue: '2px'}], position: 16250, duration: 5500, easing: "easeInOutQuad" },
                { id: "eid5187", tween: [ "subproperty", "${_Portfolio}", "filter.blur", '2px', { fromValue: '0px'}], position: 29000, duration: 5500, easing: "easeInOutQuad" },
                { id: "eid4504", tween: [ "subproperty", "${_Background_Splash}", "filter.blur", '10px', { fromValue: '0px'}], position: 3500, duration: 5500, easing: "easeInOutQuad" },
                { id: "eid3719", tween: [ "style", "${_Background_Splash}", "clip", [0,1920,846,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1920,986,0]}], position: 1000, duration: 750, easing: "easeInOutQuad" },
                { id: "eid3720", tween: [ "style", "${_Background_Splash}", "clip", [9,1920,945,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1920,846,0]}], position: 1750, duration: 750, easing: "easeInOutQuad" },
                { id: "eid3722", tween: [ "style", "${_Background_Splash}", "clip", [620,1920,620,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [9,1920,945,0]}], position: 3500, duration: 11750, easing: "easeInQuad" },
                { id: "eid3", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
                { id: "eid3797", tween: [ "style", "${_vignette3}", "top", '186px', { fromValue: '186px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid3802", tween: [ "style", "${_vignette3}", "top", '186px', { fromValue: '186px'}], position: 1000, duration: 750, easing: "easeInOutQuad" },
                { id: "eid3806", tween: [ "style", "${_vignette3}", "top", '100px', { fromValue: '186px'}], position: 1750, duration: 1750, easing: "easeInOutQuad" },
                { id: "eid4904", tween: [ "style", "${_Stage}", "height", '1980px', { fromValue: '2764px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid4824", tween: [ "style", "${_Portfolio}", "top", '100px', { fromValue: '1020px'}], position: 16250, duration: 11750, easing: "easeInOutQuad" },
                { id: "eid5779", tween: [ "style", "${_Background_Splash}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid5780", tween: [ "style", "${_Background_Splash}", "display", 'none', { fromValue: 'block'}], position: 15250, duration: 0 },
                { id: "eid1615", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Background_Splash}', [] ], ""], position: 0 }            ]
        }
    }
},
"home_button": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'home_icon',
                    type: 'image',
                    rect: ['0px', '0px', '53px', '53px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Home2.png', '0px', '0px']
                },
                {
                    id: 'home_icon_rollover',
                    type: 'image',
                    rect: ['153px', '112px', '53px', '53px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Home2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_home_icon_rollover}": [
                ["subproperty", "filter.contrast", '1'],
                ["subproperty", "filter.hue-rotate", '0deg'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '53px'],
                ["style", "top", '0px'],
                ["style", "height", '53px'],
                ["subproperty", "filter.invert", '0.97435897435897'],
                ["subproperty", "filter.saturate", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '53px'],
                ["style", "width", '53px']
            ],
            "${_home_icon}": [
                ["subproperty", "filter.contrast", '1'],
                ["subproperty", "filter.hue-rotate", '0deg'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '53px'],
                ["style", "top", '0px'],
                ["style", "height", '53px'],
                ["subproperty", "filter.saturate", '1'],
                ["subproperty", "filter.invert", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8750,
            autoPlay: true,
            labels: {
                "HomeIcon1": 5500,
                "HomeIcon3": 8750
            },
            timeline: [
                { id: "eid323", tween: [ "subproperty", "${_home_icon_rollover}", "filter.contrast", '2', { fromValue: '1'}], position: 8000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid325", tween: [ "style", "${_home_icon_rollover}", "top", '0px', { fromValue: '0px'}], position: 8000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid79", tween: [ "style", "${_home_icon}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid330", tween: [ "style", "${_home_icon}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid510", tween: [ "subproperty", "${_home_icon_rollover}", "filter.invert", '1', { fromValue: '0.97435897435897'}], position: 8000, duration: 750, easing: "easeInOutQuad" },
                { id: "eid324", tween: [ "style", "${_home_icon_rollover}", "left", '0px', { fromValue: '0px'}], position: 8000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid326", tween: [ "style", "${_home_icon_rollover}", "opacity", '0', { fromValue: '0'}], position: 5500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid322", tween: [ "style", "${_home_icon_rollover}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid329", tween: [ "style", "${_home_icon_rollover}", "opacity", '1', { fromValue: '1'}], position: 8750, duration: 0, easing: "easeInOutQuad" }            ]
        }
    }
},
"home_alone": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '53px', '53px', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'Home2',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/Home2.png', '0px', '0px']
                },
                {
                    id: 'Home2_rollover',
                    type: 'image',
                    rect: ['0', '0', '53px', '53px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Home2_rollover.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Home2}": [
                ["subproperty", "filter.contrast", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '53px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '53px'],
                ["subproperty", "filter.invert", '0']
            ],
            "${_Home2_rollover}": [
                ["transform", "scaleY", '1'],
                ["style", "height", '53px'],
                ["style", "opacity", '0'],
                ["transform", "scaleX", '1'],
                ["style", "width", '53px']
            ],
            "${symbolSelector}": [
                ["style", "height", '53px'],
                ["style", "width", '53px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5750,
            autoPlay: true,
            timeline: [
                { id: "eid559", tween: [ "style", "${_Home2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid622", tween: [ "style", "${_Home2}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid721", tween: [ "style", "${_Home2}", "opacity", '0', { fromValue: '0'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid732", tween: [ "transform", "${_Home2_rollover}", "scaleY", '1', { fromValue: '1'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid730", tween: [ "transform", "${_Home2_rollover}", "scaleY", '0.9', { fromValue: '1'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid735", tween: [ "transform", "${_Home2_rollover}", "scaleY", '0.9', { fromValue: '0.9'}], position: 5250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid733", tween: [ "transform", "${_Home2_rollover}", "scaleX", '1', { fromValue: '1'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid731", tween: [ "transform", "${_Home2_rollover}", "scaleX", '0.9', { fromValue: '1'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid734", tween: [ "transform", "${_Home2_rollover}", "scaleX", '0.9', { fromValue: '0.9'}], position: 5250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid630", tween: [ "style", "${_Home2_rollover}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid629", tween: [ "style", "${_Home2_rollover}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid627", tween: [ "style", "${_Home2_rollover}", "opacity", '1', { fromValue: '1'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid723", tween: [ "style", "${_Home2_rollover}", "opacity", '1', { fromValue: '1'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid736", tween: [ "style", "${_Home2_rollover}", "opacity", '1', { fromValue: '1'}], position: 5250, duration: 0, easing: "easeInOutQuad" }            ]
        }
    }
},
"portfolio_icon": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'portfolio-icon-2',
                    type: 'image',
                    rect: ['0px', '0px', '53px', '53px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/portfolio-icon-2.png', '0px', '0px']
                },
                {
                    id: 'portfolio_rollover',
                    type: 'image',
                    rect: ['0px', '0px', '53px', '53px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/portfolio_rollover.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_portfolio-icon-2}": [
                ["style", "top", '0px'],
                ["style", "height", '53px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '53px']
            ],
            "${_portfolio_rollover}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '53px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '53px']
            ],
            "${symbolSelector}": [
                ["style", "height", '53px'],
                ["style", "width", '53px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8390,
            autoPlay: true,
            timeline: [
                { id: "eid840", tween: [ "transform", "${_portfolio_rollover}", "scaleY", '1', { fromValue: '1'}], position: 3390, duration: 0, easing: "easeInOutQuad" },
                { id: "eid842", tween: [ "transform", "${_portfolio_rollover}", "scaleY", '1', { fromValue: '1'}], position: 4890, duration: 0, easing: "easeInOutQuad" },
                { id: "eid836", tween: [ "transform", "${_portfolio_rollover}", "scaleY", '0.9', { fromValue: '1'}], position: 6890, duration: 0, easing: "easeInOutQuad" },
                { id: "eid837", tween: [ "transform", "${_portfolio_rollover}", "scaleY", '0.9', { fromValue: '0.9'}], position: 8390, duration: 0, easing: "easeInOutQuad" },
                { id: "eid104", tween: [ "style", "${_portfolio-icon-2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid822", tween: [ "style", "${_portfolio-icon-2}", "opacity", '0', { fromValue: '1'}], position: 3390, duration: 0, easing: "easeInOutQuad" },
                { id: "eid823", tween: [ "style", "${_portfolio-icon-2}", "opacity", '0', { fromValue: '0'}], position: 4890, duration: 0, easing: "easeInOutQuad" },
                { id: "eid839", tween: [ "transform", "${_portfolio_rollover}", "scaleX", '1', { fromValue: '1'}], position: 3390, duration: 0, easing: "easeInOutQuad" },
                { id: "eid841", tween: [ "transform", "${_portfolio_rollover}", "scaleX", '1', { fromValue: '1'}], position: 4890, duration: 0, easing: "easeInOutQuad" },
                { id: "eid835", tween: [ "transform", "${_portfolio_rollover}", "scaleX", '0.9', { fromValue: '1'}], position: 6890, duration: 0, easing: "easeInOutQuad" },
                { id: "eid838", tween: [ "transform", "${_portfolio_rollover}", "scaleX", '0.9', { fromValue: '0.9'}], position: 8390, duration: 0, easing: "easeInOutQuad" },
                { id: "eid821", tween: [ "style", "${_portfolio_rollover}", "opacity", '0', { fromValue: '0'}], position: 1000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid819", tween: [ "style", "${_portfolio_rollover}", "opacity", '1', { fromValue: '0'}], position: 3390, duration: 0, easing: "easeInOutQuad" },
                { id: "eid820", tween: [ "style", "${_portfolio_rollover}", "opacity", '1', { fromValue: '1'}], position: 4890, duration: 0, easing: "easeInOutQuad" }            ]
        }
    }
},
"Symbol_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                    type: 'image',
                    id: 'background_variant2',
                    opacity: 1,
                    clip: ['rect(0px 1920px 1080px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/background_variant2.png', '0px', '0px']
                },
                {
                    rect: ['1920px', '0px', '1920px', '1080px', 'auto', 'auto'],
                    id: 'background_variant3Copy',
                    type: 'image',
                    clip: ['rect(0px 1920px 1080px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/background_variant3.png', '0px', '0px']
                },
                {
                    rect: ['3840px', '0px', '1920px', '1080px', 'auto', 'auto'],
                    id: 'background_variant4Copy',
                    type: 'image',
                    clip: ['rect(0px 1920px 1080px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/background_variant4.png', '0px', '0px']
                },
                {
                    rect: ['1920px', '0', '1920px', '1080px', 'auto', 'auto'],
                    id: 'background_variant5Copy',
                    type: 'image',
                    clip: ['rect(0px 1920px 1080px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/background_variant5.png', '0px', '0px']
                },
                {
                    rect: ['0', '0px', '1920px', '540px', 'auto', 'auto'],
                    id: 'vignette3',
                    opacity: 0.4,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/vignette.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_background_variant5Copy}": [
                ["style", "clip", [0,0,1080,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '1920px']
            ],
            "${_background_variant3Copy}": [
                ["style", "top", '0px'],
                ["style", "clip", [0,0,1080,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '1920px'],
                ["style", "overflow", 'visible']
            ],
            "${symbolSelector}": [
                ["style", "height", '1080px'],
                ["style", "width", '1920px']
            ],
            "${_background_variant4Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '1920px'],
                ["style", "clip", [0,0,1080,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_background_variant2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "clip", [0,1920,1080,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_vignette3}": [
                ["style", "height", '1080px'],
                ["style", "opacity", '0.4'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 30500,
            autoPlay: true,
            timeline: [
                { id: "eid1561", tween: [ "style", "${_background_variant3Copy}", "clip", [0,1920,1080,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,1080,0]}], position: 7500, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid1562", tween: [ "style", "${_background_variant3Copy}", "clip", [0,1920,1080,1920], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1920,1080,0]}], position: 14750, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid1565", tween: [ "style", "${_background_variant4Copy}", "left", '0px', { fromValue: '1920px'}], position: 14750, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid1566", tween: [ "style", "${_background_variant4Copy}", "left", '-1920px', { fromValue: '0px'}], position: 22000, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid1432", tween: [ "style", "${_background_variant2}", "clip", [0,1920,1080,1920], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1920,1080,0]}], position: 7500, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid1445", tween: [ "style", "${_background_variant2}", "clip", [0,1920,1080,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,1080,0]}], position: 29250, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid1563", tween: [ "style", "${_background_variant3Copy}", "left", '0px', { fromValue: '1920px'}], position: 7500, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid1564", tween: [ "style", "${_background_variant3Copy}", "left", '-1920px', { fromValue: '0px'}], position: 14750, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid1569", tween: [ "style", "${_background_variant5Copy}", "left", '0px', { fromValue: '1920px'}], position: 22000, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid1570", tween: [ "style", "${_background_variant5Copy}", "left", '-1920px', { fromValue: '0px'}], position: 29250, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid1567", tween: [ "style", "${_background_variant4Copy}", "clip", [0,1920,1080,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,1080,0]}], position: 14750, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid1568", tween: [ "style", "${_background_variant4Copy}", "clip", [0,1920,1080,1920], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1920,1080,0]}], position: 22000, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid1327", tween: [ "style", "${_background_variant2}", "left", '-1920px', { fromValue: '0px'}], position: 7500, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid1364", tween: [ "style", "${_background_variant2}", "left", '0px', { fromValue: '1920px'}], position: 29250, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid1571", tween: [ "style", "${_background_variant5Copy}", "clip", [0,1920,1080,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,1080,0]}], position: 22000, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid1572", tween: [ "style", "${_background_variant5Copy}", "clip", [0,1920,1080,1920], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1920,1080,0]}], position: 29250, duration: 1250, easing: "easeInOutQuad" }            ]
        }
    }
},
"top_banner2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '100%', '186px', 'auto', 'auto'],
                    id: 'Top_Banner',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'headerCopy',
                    type: 'image',
                    rect: ['31px', '0px', '296px', '95px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/header.png', '0px', '0px']
                },
                {
                    id: 'Header_barCopy',
                    type: 'image',
                    rect: ['31px', '52px', '100%', '2px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bar.png', '0px', '0px']
                },
                {
                    id: 'Button_Bar_ExtensionCopy',
                    type: 'image',
                    rect: ['364px', '153px', '100%', '2px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bar.png', '0px', '0px']
                },
                {
                    id: 'button_bar3Copy',
                    type: 'image',
                    rect: ['31px', '153px', '1893px', '14px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/button_bar3test.png', '0px', '0px']
                },
                {
                    id: 'headers',
                    type: 'rect',
                    rect: ['28', '118', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'news_header',
                    type: 'rect',
                    rect: ['0', '2', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'work_header3',
                    type: 'rect',
                    rect: ['32', '123', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'profile_header2',
                    type: 'rect',
                    rect: ['32', '123', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'home_alone',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['153px', '112px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'news_button2',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['226', '112', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Portfolio_button',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['298px', '111px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'profile_icon2',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['370', '111', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['0px', '0px', '640px', '186px', 'auto', 'auto'],
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(23,23,23,1)']
                },
                {
                    id: 'Indicator_1',
                    type: 'rect',
                    rect: ['-67', '234', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Indicator_1Copy',
                    type: 'rect',
                    rect: ['-67', '234', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Indicator_1Copy2',
                    type: 'rect',
                    rect: ['320px', '234', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Indicator_1Copy3',
                    type: 'rect',
                    rect: ['-67', '234', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'work_header3',
                symbolName: 'work_header',
                autoPlay: {

               }
            },
            {
                id: 'home_alone',
                symbolName: 'home_alone',
                autoPlay: {

               }
            },
            {
                id: 'Indicator_1Copy3',
                symbolName: 'Indicator_1',
                autoPlay: {

               }
            },
            {
                id: 'Indicator_1Copy',
                symbolName: 'Indicator_1',
                autoPlay: {

               }
            },
            {
                id: 'profile_header2',
                symbolName: 'profile_header',
                autoPlay: {

               }
            },
            {
                id: 'profile_icon2',
                symbolName: 'profile_icon',
                autoPlay: {

               }
            },
            {
                id: 'news_header',
                symbolName: 'news_header',
                autoPlay: {

               }
            },
            {
                id: 'Indicator_1Copy2',
                symbolName: 'Indicator_1',
                autoPlay: {

               }
            },
            {
                id: 'Portfolio_button',
                symbolName: 'portfolio_icon',
                autoPlay: {

               }
            },
            {
                id: 'Indicator_1',
                symbolName: 'Indicator_1',
                autoPlay: {

               }
            },
            {
                id: 'news_button2',
                symbolName: 'news_button',
                autoPlay: {

               }
            },
            {
                id: 'headers',
                symbolName: 'headers',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_news_button2}": [
                ["style", "cursor", 'pointer']
            ],
            "${_button_bar3Copy}": [
                ["style", "left", '1920px'],
                ["style", "top", '153px']
            ],
            "${_headerCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '31px']
            ],
            "${_Top_Banner}": [
                ["style", "top", '0px'],
                ["style", "height", '186px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '100.01%']
            ],
            "${_Header_barCopy}": [
                ["style", "top", '52px'],
                ["style", "left", '31px'],
                ["style", "width", '100%']
            ],
            "${_Indicator_1Copy3}": [
                ["style", "top", '171px'],
                ["style", "opacity", '0'],
                ["style", "left", '392px']
            ],
            "${_profile_icon2}": [
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle6}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '571px']
            ],
            "${_Indicator_1Copy2}": [
                ["style", "top", '171px'],
                ["style", "opacity", '0'],
                ["style", "left", '320px']
            ],
            "${_Indicator_1Copy}": [
                ["style", "top", '171px'],
                ["style", "opacity", '0'],
                ["style", "left", '248px']
            ],
            "${_Button_Bar_ExtensionCopy}": [
                ["style", "top", '153px'],
                ["style", "left", '2259px'],
                ["style", "width", '100%']
            ],
            "${symbolSelector}": [
                ["style", "height", '186px'],
                ["style", "width", '100%']
            ],
            "${_Portfolio_button}": [
                ["style", "top", '111px'],
                ["style", "left", '298px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Indicator_1}": [
                ["style", "top", '171px'],
                ["style", "opacity", '0'],
                ["style", "left", '175px']
            ],
            "${_home_alone}": [
                ["style", "top", '112px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '153px']
            ],
            "${_news_header}": [
                ["style", "left", '31px'],
                ["style", "top", '118px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4750,
            autoPlay: true,
            timeline: [
                { id: "eid3945", tween: [ "style", "${_Rectangle6}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid3946", tween: [ "style", "${_Rectangle6}", "left", '0px', { fromValue: '0px'}], position: 2500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid3948", tween: [ "style", "${_Rectangle6}", "left", '218px', { fromValue: '0px'}], position: 2508, duration: 0, easing: "easeInOutQuad" },
                { id: "eid3965", tween: [ "style", "${_Rectangle6}", "left", '218px', { fromValue: '218px'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid3966", tween: [ "style", "${_Rectangle6}", "left", '289px', { fromValue: '218px'}], position: 3008, duration: 0, easing: "easeInOutQuad" },
                { id: "eid3967", tween: [ "style", "${_Rectangle6}", "left", '289px', { fromValue: '289px'}], position: 3500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid3968", tween: [ "style", "${_Rectangle6}", "left", '364px', { fromValue: '289px'}], position: 3508, duration: 0, easing: "easeInOutQuad" },
                { id: "eid3970", tween: [ "style", "${_Rectangle6}", "left", '364px', { fromValue: '364px'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid3969", tween: [ "style", "${_Rectangle6}", "left", '435px', { fromValue: '364px'}], position: 4008, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5261", tween: [ "style", "${_Indicator_1Copy2}", "opacity", '1', { fromValue: '0'}], position: 3008, duration: 1000 },
                { id: "eid5262", tween: [ "style", "${_Indicator_1Copy}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 1000 },
                { id: "eid5260", tween: [ "style", "${_Indicator_1Copy3}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 1000 },
                { id: "eid1580", tween: [ "style", "${_button_bar3Copy}", "left", '31px', { fromValue: '1920px'}], position: 0, duration: 1500, easing: "easeOutQuad" },
                { id: "eid1582", tween: [ "style", "${_Button_Bar_ExtensionCopy}", "left", '364px', { fromValue: '2259px'}], position: 0, duration: 1500, easing: "easeOutQuad" },
                { id: "eid5263", tween: [ "style", "${_Indicator_1}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 1000 },
                { id: "eid3943", tween: [ "style", "${_Rectangle6}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid3947", tween: [ "style", "${_Rectangle6}", "width", '571px', { fromValue: '571px'}], position: 2750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1588", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_home_alone}', [] ], ""], position: 0 },
                { id: "eid4081", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_news_header}', [] ], ""], position: 0 },
                { id: "eid5274", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Indicator_1Copy}', [] ], ""], position: 0 },
                { id: "eid3914", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_profile_icon2}', [] ], ""], position: 0 },
                { id: "eid5273", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Indicator_1}', [] ], ""], position: 0 },
                { id: "eid4181", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_profile_header2}', [] ], ""], position: 0 },
                { id: "eid5272", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Indicator_1Copy2}', [] ], ""], position: 0 },
                { id: "eid4132", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_work_header3}', [] ], ""], position: 0 },
                { id: "eid3987", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_headers}', [] ], ""], position: 0 },
                { id: "eid3915", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_news_button2}', [] ], ""], position: 0 },
                { id: "eid5275", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Indicator_1Copy3}', [] ], ""], position: 0 },
                { id: "eid1626", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Portfolio_button}', [] ], ""], position: 0 },
                { id: "eid1589", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_home_alone}', [] ], ""], position: 1500 },
                { id: "eid3916", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_news_button2}', [] ], ""], position: 2000 },
                { id: "eid1627", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Portfolio_button}', [] ], ""], position: 2500 },
                { id: "eid1590", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_home_alone}', [] ], ""], position: 2890 },
                { id: "eid3917", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_profile_icon2}', [] ], ""], position: 3000 },
                { id: "eid3918", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_news_button2}', [] ], ""], position: 3412.2860906938 },
                { id: "eid3919", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Portfolio_button}', [] ], ""], position: 4000 },
                { id: "eid3920", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_profile_icon2}', [] ], ""], position: 4500 }            ]
        }
    }
},
"news_and_social": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)'],
                    id: 'Lower_Banner',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    boxShadow: ['', 0, 0, 0, 0, 'rgba(0,0,0,0)']
                },
                {
                    id: 'Bottom_Border2',
                    type: 'image',
                    rect: ['31px', '-659px', '100%', '2px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bar.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'news',
                    opacity: 1,
                    rect: ['31px', '0.9%', '102px', '35px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/news.png', '0px', '0px']
                },
                {
                    id: 'Sub_Headline',
                    type: 'image',
                    rect: ['31px', '44px', '54.9%', '2px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bar.png', '0px', '0px']
                },
                {
                    id: 'Sub_HeadlineCopy',
                    type: 'image',
                    rect: ['auto', '44px', '100%', '2px', '-78.7%', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bar.png', '0px', '0px']
                },
                {
                    id: 'social_elements2',
                    type: 'rect',
                    rect: ['auto', '0px', 'auto', 'auto', '0px', 'auto']
                },
                {
                    id: 'Symbol_2',
                    type: 'rect',
                    rect: ['auto', '2px', 'auto', 'auto', '0.7%', 'auto']
                },
                {
                    type: 'rect',
                    id: 'Rectangle4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['991px', '510px', '100%', '2px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'Symbol_2',
                symbolName: 'Symbol_2',
                autoPlay: {

               }
            },
            {
                id: 'social_elements2',
                symbolName: 'social_elements',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Sub_HeadlineCopy}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "bottom", 'auto'],
                ["style", "top", '44px'],
                ["style", "right", '-50%'],
                ["style", "left", 'auto'],
                ["style", "width", '100%']
            ],
            "${_Bottom_Border2}": [
                ["style", "-webkit-transform-origin", [50,-2], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,-2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,-2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,-2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,-2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '1920px'],
                ["style", "top", '319px'],
                ["style", "clip", 0, {valueTemplate:'auto'} ],
                ["style", "width", '100%']
            ],
            "${_Lower_Banner}": [
                ["style", "top", '-0.04%'],
                ["style", "height", '100%'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_social_elements2}": [
                ["style", "top", '0px'],
                ["style", "right", '0px'],
                ["style", "left", 'auto']
            ],
            "${symbolSelector}": [
                ["style", "height", '920px'],
                ["style", "width", '100%']
            ],
            "${_Sub_Headline}": [
                ["style", "top", '44px'],
                ["style", "bottom", 'auto'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "right", 'auto'],
                ["style", "left", '1927px'],
                ["style", "width", '52.56%']
            ],
            "${_Symbol_2}": [
                ["style", "top", '2px'],
                ["style", "right", '0.73%'],
                ["style", "left", 'auto']
            ],
            "${_Rectangle4}": [
                ["style", "top", '510px'],
                ["style", "height", '2px'],
                ["style", "left", '991px'],
                ["style", "width", '100%']
            ],
            "${_news}": [
                ["style", "top", '0.85%'],
                ["style", "opacity", '1'],
                ["style", "left", '31px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid1303", tween: [ "style", "${_Sub_Headline}", "left", '31px', { fromValue: '1927px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid786", tween: [ "style", "${_Bottom_Border2}", "left", '31px', { fromValue: '1920px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1680", tween: [ "style", "${_Bottom_Border2}", "-webkit-transform-origin", [50,-2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-2]}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5861", tween: [ "style", "${_Bottom_Border2}", "-moz-transform-origin", [50,-2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-2]}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5862", tween: [ "style", "${_Bottom_Border2}", "-ms-transform-origin", [50,-2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-2]}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5863", tween: [ "style", "${_Bottom_Border2}", "msTransformOrigin", [50,-2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-2]}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5864", tween: [ "style", "${_Bottom_Border2}", "-o-transform-origin", [50,-2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-2]}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2259", tween: [ "style", "${_Sub_HeadlineCopy}", "right", '-50%', { fromValue: '-50%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1678", tween: [ "style", "${_Sub_Headline}", "width", '48.96%', { fromValue: '52.56%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2514", tween: [ "style", "${_Bottom_Border2}", "top", '879px', { fromValue: '319px'}], position: 0, duration: 0 }            ]
        }
    }
},
"portfolio": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0%', '100%', '86.8%', 'auto', 'auto'],
                    boxShadow: ['', 0, 0, 0, 0, 'rgba(0,0,0,0)'],
                    id: 'Lower_Banner',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(135,135,135,1.00)']
                },
                {
                    rect: ['1053px', '4.6%', '385px', '20%', 'auto', 'auto'],
                    type: 'rect',
                    id: 'fb_widgetCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(146,146,146,1.00)']
                },
                {
                    rect: ['1053px', '4.6%', '385px', '20%', 'auto', 'auto'],
                    type: 'rect',
                    id: 'fb_widget',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(146,146,146,1.00)']
                },
                {
                    id: 'Bottom_Border2',
                    type: 'image',
                    rect: ['31px', '-52.9%', '43.4%', '2px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bar.png', '0px', '0px']
                },
                {
                    id: 'news',
                    type: 'image',
                    rect: ['31px', '0.9%', '102px', '35px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/news.png', '0px', '0px']
                },
                {
                    id: 'Sub_Headline',
                    type: 'image',
                    rect: ['31px', '3.5%', '1054px', '2px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bar.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_fb_widgetCopy}": [
                ["style", "top", '4.58%'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '31px'],
                ["color", "background-color", 'rgba(146,146,146,1.00)'],
                ["style", "height", '19.86%'],
                ["style", "opacity", '0'],
                ["style", "clip", 0, {valueTemplate:'auto'} ],
                ["style", "width", '919px']
            ],
            "${_Bottom_Border2}": [
                ["style", "top", '99.84%'],
                ["style", "clip", 0, {valueTemplate:'auto'} ],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '1920px'],
                ["style", "width", '43.38%']
            ],
            "${symbolSelector}": [
                ["style", "height", '1080px'],
                ["style", "width", '100%']
            ],
            "${_Lower_Banner}": [
                ["style", "top", '-0.04%'],
                ["style", "height", '86.75%'],
                ["color", "background-color", 'rgba(135,135,135,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_news}": [
                ["style", "top", '0.85%'],
                ["style", "opacity", '0'],
                ["style", "left", '31px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Sub_Headline}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "bottom", 'auto'],
                ["style", "top", '3.53%'],
                ["style", "right", 'auto'],
                ["style", "left", '1919px'],
                ["style", "width", '1009px']
            ],
            "${_fb_widget}": [
                ["color", "background-color", 'rgba(146,146,146,1)'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9500,
            autoPlay: true,
            timeline: [
                { id: "eid786", tween: [ "style", "${_Bottom_Border2}", "left", '31px', { fromValue: '1920px'}], position: 1500, duration: 3000, easing: "easeInOutQuad" },
                { id: "eid1651", tween: [ "style", "${_fb_widgetCopy}", "height", '19.86%', { fromValue: '19.86%'}], position: 9500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1652", tween: [ "style", "${_fb_widgetCopy}", "width", '919px', { fromValue: '919px'}], position: 9500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1305", tween: [ "style", "${_Sub_Headline}", "width", '1009px', { fromValue: '1009px'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1303", tween: [ "style", "${_Sub_Headline}", "left", '31px', { fromValue: '1919px'}], position: 1000, duration: 3000, easing: "easeInOutQuad" },
                { id: "eid1650", tween: [ "style", "${_fb_widgetCopy}", "left", '31px', { fromValue: '31px'}], position: 9500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1255", tween: [ "style", "${_news}", "opacity", '1', { fromValue: '0'}], position: 5250, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid91", tween: [ "style", "${_Bottom_Border2}", "top", '27.15%', { fromValue: '99.84%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1429", tween: [ "style", "${_fb_widgetCopy}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 1500, easing: "easeInOutQuad" }            ]
        }
    }
},
"timelinecontroller": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0]],
                    rect: [0, 0, '100', '50', 'auto', 'auto'],
                    borderRadius: ['20px 20px', '20px 20px', '20px 20px', '20px 20px'],
                    type: 'rect',
                    id: 'RoundRect',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['ew-resize'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '100px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '50px'],
                ["style", "cursor", 'ew-resize'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"profile": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    rect: ['0px', '0%', '100%', '200%', 'auto', 'auto'],
                    boxShadow: ['', 0, 0, 0, 0, 'rgba(0,0,0,0)'],
                    id: 'Lower_Banner',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(55,55,55,1.00)']
                },
                {
                    rect: ['1053px', '4.6%', '385px', '20%', 'auto', 'auto'],
                    type: 'rect',
                    id: 'fb_widgetCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(146,146,146,1.00)']
                },
                {
                    rect: ['1053px', '4.6%', '385px', '20%', 'auto', 'auto'],
                    type: 'rect',
                    id: 'fb_widget',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(146,146,146,1.00)']
                },
                {
                    id: 'Bottom_Border2',
                    type: 'image',
                    rect: ['31px', '-52.9%', '43.4%', '2px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bar.png', '0px', '0px']
                },
                {
                    id: 'news',
                    type: 'image',
                    rect: ['31px', '0.9%', '102px', '35px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/news.png', '0px', '0px']
                },
                {
                    id: 'Sub_Headline',
                    type: 'image',
                    rect: ['31px', '3.5%', '1054px', '2px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bar.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_fb_widgetCopy}": [
                ["color", "background-color", 'rgba(146,146,146,1.00)'],
                ["style", "cursor", 'pointer'],
                ["style", "clip", 0, {valueTemplate:'auto'} ],
                ["style", "top", '4.58%'],
                ["style", "height", '19.86%'],
                ["style", "opacity", '0'],
                ["style", "left", '31px'],
                ["style", "width", '919px']
            ],
            "${_Bottom_Border2}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '1920px'],
                ["style", "top", '99.84%'],
                ["style", "clip", 0, {valueTemplate:'auto'} ],
                ["style", "width", '43.38%']
            ],
            "${symbolSelector}": [
                ["style", "height", '1080px'],
                ["style", "width", '100%']
            ],
            "${_Lower_Banner}": [
                ["style", "top", '-0.04%'],
                ["style", "height", '200%'],
                ["color", "background-color", 'rgba(55,55,55,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_news}": [
                ["style", "top", '0.85%'],
                ["style", "opacity", '0'],
                ["style", "left", '31px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Sub_Headline}": [
                ["style", "top", '3.53%'],
                ["style", "bottom", 'auto'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "right", 'auto'],
                ["style", "left", '1919px'],
                ["style", "width", '1009px']
            ],
            "${_fb_widget}": [
                ["color", "background-color", 'rgba(146,146,146,1)'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9500,
            autoPlay: true,
            timeline: [
                { id: "eid786", tween: [ "style", "${_Bottom_Border2}", "left", '31px', { fromValue: '1920px'}], position: 1500, duration: 3000, easing: "easeInOutQuad" },
                { id: "eid1651", tween: [ "style", "${_fb_widgetCopy}", "height", '19.86%', { fromValue: '19.86%'}], position: 9500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1652", tween: [ "style", "${_fb_widgetCopy}", "width", '919px', { fromValue: '919px'}], position: 9500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1305", tween: [ "style", "${_Sub_Headline}", "width", '1009px', { fromValue: '1009px'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1303", tween: [ "style", "${_Sub_Headline}", "left", '31px', { fromValue: '1919px'}], position: 1000, duration: 3000, easing: "easeInOutQuad" },
                { id: "eid1650", tween: [ "style", "${_fb_widgetCopy}", "left", '31px', { fromValue: '31px'}], position: 9500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1255", tween: [ "style", "${_news}", "opacity", '1', { fromValue: '0'}], position: 5250, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid91", tween: [ "style", "${_Bottom_Border2}", "top", '27.15%', { fromValue: '99.84%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1429", tween: [ "style", "${_fb_widgetCopy}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 1500, easing: "easeInOutQuad" }            ]
        }
    }
},
"social_elements": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['32px', '55px', '49.3%', '814px', 'auto', 'auto'],
                    borderRadius: ['0px', '0px', '0px', '0px'],
                    sizeRange: ['470px', '', '', ''],
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '894px'],
                ["style", "width", '100%']
            ],
            "${_Rectangle}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '55px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '814px'],
                ["style", "right", 'auto'],
                ["style", "left", '32px'],
                ["style", "width", '49.35%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Symbol_2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Facebook',
                    type: 'rect',
                    rect: ['131', '55', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['auto', '10.9%', '385px', '440px', '0%', 'auto'],
                    id: 'twitter_widgetCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['default'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'button_bar_social2Copy',
                    type: 'image',
                    rect: ['0', '42px', '484px', '20px', '378px', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/button_bar_socialtest.png', '0px', '0px']
                },
                {
                    id: 'facebook_buttonCopy',
                    type: 'image',
                    rect: ['0', '1px', '53px', '53px', '861px', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/facebook_button.png', '0px', '0px']
                },
                {
                    id: 'twitter_buttonCopy',
                    type: 'image',
                    rect: ['auto', '1px', '53px', '53px', '394px', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/twitter_button.png', '0px', '0px']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'Text',
                    text: '@Placeholder',
                    type: 'text',
                    rect: ['600px', '16px', '337px', '20px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'TextCopy',
                    text: 'Placeholder',
                    type: 'text',
                    rect: ['131px', '16px', '337px', '20px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'Facebook',
                symbolName: 'Facebook',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_facebook_buttonCopy}": [
                ["style", "top", '1px'],
                ["style", "opacity", '1'],
                ["style", "left", 'auto'],
                ["style", "right", '861px']
            ],
            "${_twitter_buttonCopy}": [
                ["style", "top", '1px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "right", '394px'],
                ["style", "left", 'auto'],
                ["style", "opacity", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '55.2%'],
                ["style", "width", '978px']
            ],
            "${_twitter_widgetCopy}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '10.89%'],
                ["style", "cursor", 'default'],
                ["style", "opacity", '1'],
                ["style", "height", '440px'],
                ["style", "right", '0.04%'],
                ["style", "left", 'auto'],
                ["style", "width", '385px']
            ],
            "${_TextCopy}": [
                ["style", "left", '131px']
            ],
            "${_button_bar_social2Copy}": [
                ["style", "top", '42px'],
                ["style", "right", '378px'],
                ["style", "left", 'auto'],
                ["style", "width", '600px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Portfolio": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    id: 'Background',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(51,51,51,1.00)']
                },
                {
                    rect: ['207px', '87px', '1649px', '229px', 'auto', 'auto'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'showcase_background1',
                    opacity: 0.25203252226357,
                    type: 'rect',
                    fill: ['rgba(23,23,23,1)']
                },
                {
                    rect: ['207px', '335px', '1649px', '229px', 'auto', 'auto'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'showcase_background2',
                    opacity: 0.25203252226357,
                    type: 'rect',
                    fill: ['rgba(23,23,23,1)']
                },
                {
                    rect: ['207px', '584px', '1649px', '229px', 'auto', 'auto'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'showcase_background3',
                    opacity: 0.25203252226357,
                    type: 'rect',
                    fill: ['rgba(23,23,23,1)']
                },
                {
                    id: 'two_dimensional_showcase',
                    type: 'rect',
                    rect: ['0px', '87px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'three_dimensional_showcase2',
                    type: 'rect',
                    rect: ['359px', '334px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'video_animation_showcase2',
                    type: 'rect',
                    rect: ['358px', '582px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'two_dimensional2',
                    type: 'image',
                    rect: ['53', '150px', '96px', '96px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/two_dimensional.png', '0px', '0px']
                },
                {
                    id: 'three_dimensional2',
                    type: 'image',
                    rect: ['53', '402', '96px', '96px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/three_dimensional.png', '0px', '0px']
                },
                {
                    id: 'animation_film',
                    type: 'image',
                    rect: ['53px', '651px', '96px', '96px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/animation_film.png', '0px', '0px']
                },
                {
                    rect: ['32px', '48px', '100%', '2px', 'auto', 'auto'],
                    id: 'top_borderline',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(23,23,23,1)']
                },
                {
                    rect: ['19px', '850px', '100%', '2px', 'auto', 'auto'],
                    id: 'bottom_borderline',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(23,23,23,1)']
                },
                {
                    id: 'previous',
                    type: 'rect',
                    rect: ['208', '87', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'previous2',
                    type: 'rect',
                    rect: ['208', '87', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'previous3',
                    type: 'rect',
                    rect: ['208', '87', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'next1',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['1781px', '87px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'next2',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['1781px', '335px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'next3',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['1781px', '585px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'work_header4',
                    type: 'image',
                    rect: ['32px', '17px', '100px', '25px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/work_header.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'previous',
                symbolName: 'previous',
                autoPlay: {

               }
            },
            {
                id: 'previous3',
                symbolName: 'previous',
                autoPlay: {

               }
            },
            {
                id: 'next1',
                symbolName: 'Symbol_3',
                autoPlay: {

               }
            },
            {
                id: 'three_dimensional_showcase2',
                symbolName: 'three_dimensional_showcase',
                autoPlay: {

               }
            },
            {
                id: 'next3',
                symbolName: 'Symbol_3',
                autoPlay: {

               }
            },
            {
                id: 'video_animation_showcase2',
                symbolName: 'video_animation_showcase',
                autoPlay: {

               }
            },
            {
                id: 'two_dimensional_showcase',
                symbolName: 'two_dimensional_showcase',
                autoPlay: {

               }
            },
            {
                id: 'previous2',
                symbolName: 'previous',
                autoPlay: {

               }
            },
            {
                id: 'next2',
                symbolName: 'Symbol_3',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_next1}": [
                ["style", "top", '87px'],
                ["style", "left", '1781px'],
                ["style", "cursor", 'pointer']
            ],
            "${_work_header4}": [
                ["style", "left", '32px'],
                ["style", "top", '17px']
            ],
            "${_previous3}": [
                ["style", "top", '584px']
            ],
            "${symbolSelector}": [
                ["style", "height", '920px'],
                ["style", "width", '100%']
            ],
            "${_next3}": [
                ["style", "top", '585px'],
                ["style", "left", '1781px'],
                ["style", "cursor", 'pointer']
            ],
            "${_animation_film}": [
                ["style", "left", '53px'],
                ["style", "top", '651px']
            ],
            "${_video_animation_showcase2}": [
                ["style", "left", '358px'],
                ["style", "top", '584px']
            ],
            "${_Background}": [
                ["color", "background-color", 'rgba(51,51,51,1.00)'],
                ["style", "height", '100%'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_previous2}": [
                ["style", "top", '335px']
            ],
            "${_showcase_background2}": [
                ["style", "top", '335px'],
                ["style", "opacity", '0.25203252226357'],
                ["style", "left", '207px'],
                ["style", "width", '1649px']
            ],
            "${_Rectangle3Copy}": [
                ["style", "left", '831px']
            ],
            "${_showcase_background3}": [
                ["style", "top", '584px'],
                ["style", "opacity", '0.25203252226357'],
                ["style", "left", '207px'],
                ["style", "width", '1649px']
            ],
            "${_two_dimensional_showcase}": [
                ["style", "left", '0px'],
                ["style", "clip", 0, {valueTemplate:'auto'} ]
            ],
            "${_bottom_borderline}": [
                ["style", "height", '2px'],
                ["style", "top", '850px'],
                ["color", "background-color", 'rgba(23,23,23,1)'],
                ["style", "width", '100%']
            ],
            "${_top_borderline}": [
                ["style", "top", '48px'],
                ["style", "height", '2px'],
                ["color", "background-color", 'rgba(23,23,23,1)'],
                ["style", "left", '32px'],
                ["style", "width", '100%']
            ],
            "${_showcase_background1}": [
                ["style", "opacity", '0.25203252226357'],
                ["style", "left", '207px'],
                ["style", "width", '1649px']
            ],
            "${_next2}": [
                ["style", "top", '335px'],
                ["style", "left", '1781px'],
                ["style", "cursor", 'pointer']
            ],
            "${_three_dimensional_showcase2}": [
                ["style", "left", '358px'],
                ["style", "top", '333px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            timeline: [
                { id: "eid3526", tween: [ "style", "${_video_animation_showcase2}", "top", '584px', { fromValue: '584px'}], position: 0, duration: 0 },
                { id: "eid3529", tween: [ "style", "${_three_dimensional_showcase2}", "top", '333px', { fromValue: '333px'}], position: 0, duration: 0 },
                { id: "eid3528", tween: [ "style", "${_three_dimensional_showcase2}", "left", '358px', { fromValue: '358px'}], position: 0, duration: 0 },
                { id: "eid4254", tween: [ "style", "${_previous2}", "top", '335px', { fromValue: '335px'}], position: 0, duration: 0 },
                { id: "eid4255", tween: [ "style", "${_previous3}", "top", '584px', { fromValue: '584px'}], position: 0, duration: 0 },
                { id: "eid3555", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_next2}', [] ], ""], position: 0 },
                { id: "eid3556", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_next3}', [] ], ""], position: 0 },
                { id: "eid3581", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_next1}', [] ], ""], position: 0 },
                { id: "eid4217", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_previous}', [] ], ""], position: 0 },
                { id: "eid4260", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_previous2}', [] ], ""], position: 0 },
                { id: "eid4261", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_previous3}', [] ], ""], position: 0 }            ]
        }
    }
},
"news_button": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '53px', '53px', 'auto', 'auto'],
                    id: 'news_button',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/news_button.png', '0px', '0px']
                },
                {
                    id: 'news_rollover',
                    type: 'image',
                    rect: ['0', '0', '53px', '53px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/news_rollover.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '53px'],
                ["style", "width", '53px']
            ],
            "${_news_button}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_news_rollover}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid1666", tween: [ "style", "${_news_button}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
                { id: "eid2999", tween: [ "style", "${_news_button}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 0 },
                { id: "eid2939", tween: [ "style", "${_news_rollover}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2940", tween: [ "style", "${_news_rollover}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2944", tween: [ "transform", "${_news_rollover}", "scaleX", '1', { fromValue: '1'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2945", tween: [ "transform", "${_news_rollover}", "scaleX", '0.9', { fromValue: '1'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2943", tween: [ "transform", "${_news_rollover}", "scaleY", '1', { fromValue: '1'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2946", tween: [ "transform", "${_news_rollover}", "scaleY", '0.9', { fromValue: '1'}], position: 2000, duration: 0, easing: "easeInOutQuad" }            ]
        }
    }
},
"profile_icon": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '53px', '53px', 'auto', 'auto'],
                    id: 'profile_icon',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/profile_icon2.png', '0px', '0px']
                },
                {
                    id: 'profile_icon_rollover3',
                    type: 'image',
                    rect: ['0', '0', '53px', '53px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/profile_icon_rollover.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_profile_icon}": [
                ["style", "top", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '53px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '53px']
            ],
            "${symbolSelector}": [
                ["style", "height", '53px'],
                ["style", "width", '53px']
            ],
            "${_profile_icon_rollover3}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: true,
            timeline: [
                { id: "eid1574", tween: [ "style", "${_profile_icon}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid3041", tween: [ "style", "${_profile_icon}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid3009", tween: [ "style", "${_profile_icon_rollover3}", "opacity", '0', { fromValue: '0'}], position: 1250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid3008", tween: [ "style", "${_profile_icon_rollover3}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid3016", tween: [ "transform", "${_profile_icon_rollover3}", "scaleX", '1', { fromValue: '1'}], position: 1750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid3013", tween: [ "transform", "${_profile_icon_rollover3}", "scaleX", '0.9', { fromValue: '1'}], position: 2250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid3015", tween: [ "transform", "${_profile_icon_rollover3}", "scaleY", '1', { fromValue: '1'}], position: 1750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid3014", tween: [ "transform", "${_profile_icon_rollover3}", "scaleY", '0.9', { fromValue: '1'}], position: 2250, duration: 0, easing: "easeInOutQuad" }            ]
        }
    }
},
"two_dimensional_showcase": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'zigg_thumb',
                    type: 'rect',
                    rect: ['359', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'stamp_thumb',
                    type: 'rect',
                    rect: ['832', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'mouldylunch_thumb',
                    type: 'rect',
                    rect: ['1305', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'stamp_thumb',
                symbolName: 'stamp_thumb',
                autoPlay: {

               }
            },
            {
                id: 'zigg_thumb',
                symbolName: 'zigg_thumb',
                autoPlay: {

               }
            },
            {
                id: 'mouldylunch_thumb',
                symbolName: 'Symbol_4',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_mouldylunch_thumb}": [
                ["style", "cursor", 'auto']
            ],
            "${symbolSelector}": [
                ["style", "height", '229px'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            timeline: [
                { id: "eid4279", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_stamp_thumb}', [] ], ""], position: 0 }            ]
        }
    }
},
"three_dimensional_showcase": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['474px', '0px', '400px', '229px', 'auto', 'auto'],
                    id: 'Rectangle3Copy26',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(23,23,23,1.00)']
                },
                {
                    rect: ['948px', '1px', '400px', '229px', 'auto', 'auto'],
                    id: 'Rectangle3Copy41',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(23,23,23,1.00)']
                },
                {
                    id: 'anim_lunch_thumb',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'anim_lunch_thumb',
                symbolName: 'anim_lunch_thumb',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_anim_lunch_thumb}": [
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle3Copy41}": [
                ["style", "top", '1px'],
                ["color", "background-color", 'rgba(23,23,23,1)'],
                ["style", "left", '948px'],
                ["style", "width", '400px']
            ],
            "${_Rectangle3Copy26}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(23,23,23,1)'],
                ["style", "left", '474px'],
                ["style", "width", '400px']
            ],
            "${symbolSelector}": [
                ["style", "height", '229px'],
                ["style", "width", '1348px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"video_animation_showcase": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['474px', '0px', '400px', '229px', 'auto', 'auto'],
                    id: 'Rectangle3Copy25',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(23,23,23,1.00)']
                },
                {
                    rect: ['948px', '0px', '400px', '229px', 'auto', 'auto'],
                    id: 'Rectangle3Copy42',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(23,23,23,1.00)']
                },
                {
                    rect: ['0px', '0px', '400px', '229px', 'auto', 'auto'],
                    id: 'Rectangle3Copy38',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(23,23,23,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle3Copy25}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(23,23,23,1)'],
                ["style", "left", '474px'],
                ["style", "width", '400px']
            ],
            "${_Rectangle3Copy42}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(23,23,23,1)'],
                ["style", "left", '948px'],
                ["style", "width", '400px']
            ],
            "${symbolSelector}": [
                ["style", "height", '229px'],
                ["style", "width", '1348px']
            ],
            "${_Rectangle3Copy38}": [
                ["color", "background-color", 'rgba(23,23,23,1)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '400px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"showcase_1_2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['833px', '0px', '400px', '229px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle3Copy27',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(23,23,23,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle3Copy27}": [
                ["color", "background-color", 'rgba(23,23,23,1)'],
                ["style", "left", '833px'],
                ["style", "top", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '400px']
            ],
            "${symbolSelector}": [
                ["style", "height", '229px'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Symbol_3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'next_buttonCopy',
                    opacity: 0.50406504065041,
                    rect: ['0px', '0px', '77px', '229px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/next_button.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '229px'],
                ["style", "width", '77px']
            ],
            "${_next_buttonCopy}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.5040650367736816'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            timeline: [
                { id: "eid3422", tween: [ "transform", "${_next_buttonCopy}", "scaleY", '1', { fromValue: '1'}], position: 250, duration: 0 },
                { id: "eid3425", tween: [ "transform", "${_next_buttonCopy}", "scaleY", '0.95', { fromValue: '1'}], position: 500, duration: 0 },
                { id: "eid3421", tween: [ "style", "${_next_buttonCopy}", "opacity", '0.74796743902439', { fromValue: '0.5040650367736816'}], position: 0, duration: 250 },
                { id: "eid3483", tween: [ "style", "${_next_buttonCopy}", "opacity", '0.74796743902439', { fromValue: '0.74796743902439'}], position: 500, duration: 0 },
                { id: "eid3423", tween: [ "transform", "${_next_buttonCopy}", "scaleX", '1', { fromValue: '1'}], position: 250, duration: 0 },
                { id: "eid3424", tween: [ "transform", "${_next_buttonCopy}", "scaleX", '0.95', { fromValue: '1'}], position: 500, duration: 0 }            ]
        }
    }
},
"zigg_thumb": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'thumbnail_ziggurat',
                    type: 'image',
                    rect: ['0px', '0px', '400px', '229px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/thumbnail_ziggurat.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '400px', '229px', 'auto', 'auto'],
                    type: 'rect',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'Rectangle3Copy40',
                    opacity: 0.39837399125099,
                    cursor: ['pointer'],
                    fill: ['rgba(23,23,23,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_thumbnail_ziggurat}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '229px'],
                ["style", "width", '400px']
            ],
            "${_Rectangle3Copy40}": [
                ["color", "background-color", 'rgba(23,23,23,1)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "opacity", '0.39837398349754'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '400px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            timeline: [
                { id: "eid3881", tween: [ "style", "${_Rectangle3Copy40}", "opacity", '0', { fromValue: '0.39837398349754'}], position: 0, duration: 250, easing: "easeInOutQuad" }            ]
        }
    }
},
"headers": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-16px', '-14px', '134px', '48px', 'auto', 'auto'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'Rectangle7',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'home_HeaderCopy',
                    type: 'image',
                    rect: ['3px', '0px', '99px', '42px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/home.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle7}": [
                ["style", "height", '48px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_home_HeaderCopy}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '3px']
            ],
            "${symbolSelector}": [
                ["style", "height", '42px'],
                ["style", "width", '102px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            timeline: [
                { id: "eid1579", tween: [ "style", "${_home_HeaderCopy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid4101", tween: [ "style", "${_Rectangle7}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeInOutQuad" }            ]
        }
    }
},
"news_header": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-16px', '-14px', '134px', '49px', 'auto', 'auto'],
                    id: 'Rectangle7',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'news',
                    type: 'image',
                    rect: ['3px', '-8px', '102px', '35px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/news.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle7}": [
                ["style", "height", '49px'],
                ["style", "opacity", '0.000000'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_news}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '102px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            timeline: [
                { id: "eid4099", tween: [ "style", "${_Rectangle7}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid4062", tween: [ "style", "${_news}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeInOutQuad" }            ]
        }
    }
},
"work_header": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-17px', '-22px', '134px', '49px', 'auto', 'auto'],
                    id: 'Rectangle7Copy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'work_header2',
                    type: 'image',
                    rect: ['0px', '0px', '100px', '25px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/work_header.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle7Copy}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "height", '49px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-17px'],
                ["style", "top", '-22px']
            ],
            "${_work_header2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            timeline: [
                { id: "eid4123", tween: [ "style", "${_work_header2}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid4119", tween: [ "style", "${_Rectangle7Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 250, easing: "easeInOutQuad" }            ]
        }
    }
},
"profile_header": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-13px', '-23px', '134px', '49px', 'auto', 'auto'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'Rectangle7Copy2',
                    opacity: 0,
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['0px', '0px', '121px', '26px', 'auto', 'auto'],
                    id: 'profile_header',
                    opacity: 0,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/profile_header.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_profile_header}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${_Rectangle7Copy2}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "height", '49px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-13px'],
                ["style", "top", '-23px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '121px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            timeline: [
                { id: "eid4151", tween: [ "style", "${_profile_header}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid4152", tween: [ "style", "${_Rectangle7Copy2}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 250, easing: "easeInOutQuad" }            ]
        }
    }
},
"previous": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    rect: ['0px', '0px', '77px', '229px', 'auto', 'auto'],
                    id: 'previous-button1',
                    opacity: 0.50406504065041,
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/previous-button.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '229px'],
                ["style", "width", '77px']
            ],
            "${_previous-button1}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.504065'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid4210", tween: [ "transform", "${_previous-button1}", "scaleX", '1', { fromValue: '1'}], position: 250, duration: 0 },
                { id: "eid4211", tween: [ "transform", "${_previous-button1}", "scaleX", '0.95', { fromValue: '1'}], position: 500, duration: 0 },
                { id: "eid4208", tween: [ "style", "${_previous-button1}", "opacity", '1', { fromValue: '0.504065'}], position: 0, duration: 250 },
                { id: "eid4209", tween: [ "transform", "${_previous-button1}", "scaleY", '1', { fromValue: '1'}], position: 250, duration: 0 },
                { id: "eid4212", tween: [ "transform", "${_previous-button1}", "scaleY", '0.95', { fromValue: '1'}], position: 500, duration: 0 }            ]
        }
    }
},
"stamp_thumb": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'thumbnail_stamps',
                    type: 'image',
                    rect: ['0', '0', '400px', '229px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/thumbnail_stamps.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    rect: ['-832px', '0px', '400px', '229px', 'auto', 'auto'],
                    opacity: 0.39837399125099,
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(23,23,23,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(23,23,23,1)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "opacity", '0.39837398349754'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '400px']
            ],
            "${_thumbnail_stamps}": [
                ["style", "opacity", '0.85']
            ],
            "${symbolSelector}": [
                ["style", "height", '229px'],
                ["style", "width", '400px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            timeline: [
                { id: "eid4271", tween: [ "style", "${_Rectangle3}", "opacity", '0', { fromValue: '0.39837398349754'}], position: 0, duration: 250, easing: "easeInOutQuad" }            ]
        }
    }
},
"Symbol_4": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'mouldylunch_thumb',
                    opacity: 1,
                    rect: ['0px', '0px', '400px', '229px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/mouldylunch_thumb.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    rect: ['-832px', '0px', '400px', '229px', 'auto', 'auto'],
                    opacity: 0.39837399125099,
                    id: 'Rectangle3Copy2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(23,23,23,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle3Copy2}": [
                ["color", "background-color", 'rgba(23,23,23,1)'],
                ["style", "top", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0.39837398349754'],
                ["style", "left", '0px'],
                ["style", "width", '400px']
            ],
            "${_mouldylunch_thumb}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '229px'],
                ["style", "width", '400px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid4288", tween: [ "style", "${_Rectangle3Copy2}", "opacity", '0', { fromValue: '0.39837398349754'}], position: 0, duration: 250, easing: "easeInOutQuad" }            ]
        }
    }
},
"Symbol_5": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'return_to_top_Popup',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '1920px', '50px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_return_to_top_Popup}": [
                ["style", "top", '50px'],
                ["style", "height", '50px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1920px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '1920px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            timeline: [
                { id: "eid4373", tween: [ "style", "${_return_to_top_Popup}", "top", '0px', { fromValue: '50px'}], position: 0, duration: 500, easing: "easeInOutQuad" }            ]
        }
    }
},
"Profile": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '1920px', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['24px', '-115px', '936px', '842px', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'Text',
                    text: 'This website was created for the purpose of easily showcasing my artwork and ideas publicly aswell as to log and record my personal progression over the years.<br><br> using a culmination of both my academic and personal skills learned over the years. It serves as a communal place where I am able to showcase all past and future works for both public and business related.<br><br> I hope to update it regularly ',
                    type: 'text',
                    font: ['Tahoma, Geneva, sans-serif', 28, 'rgba(255,255,255,1.00)', 'normal', 'none', '']
                },
                {
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['960px', '49px', '2px', '760px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['31px', '809px', '1889px', '2px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2Copy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['31px', '472px', '931px', '2px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 24, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2',
                    text: 'Contact',
                    align: 'left',
                    rect: ['31px', '439px', '186px', '43px', 'auto', 'auto']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 24, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy',
                    text: 'E-Mail',
                    align: 'left',
                    rect: ['31px', '539px', '186px', '43px', 'auto', 'auto']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 24, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy2',
                    text: 'Telephone',
                    align: 'left',
                    rect: ['31px', '600px', '186px', '43px', 'auto', 'auto']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 24, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy3',
                    text: 'Facebook',
                    align: 'left',
                    rect: ['31px', '670px', '186px', '43px', 'auto', 'auto']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 24, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy4',
                    text: 'Twitter',
                    align: 'left',
                    rect: ['31px', '736px', '186px', '43px', 'auto', 'auto']
                },
                {
                    type: 'image',
                    filter: [1, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'profile_header',
                    rect: ['31px', '15px', '121px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/profile_header.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['31px', '47px', '100%', '2px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'CV',
                    type: 'image',
                    rect: ['1186px', '67', '512px', '724px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/CV.png', '0px', '0px']
                },
                {
                    rect: ['1186px', '67px', '512px', '724px', 'auto', 'auto'],
                    opacity: 0.39837398373984,
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3',
                    text: 'Unfinished',
                    align: 'left',
                    rect: ['200px', '15px', '458px', '26px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2Copy}": [
                ["style", "height", '2px'],
                ["style", "top", '472px'],
                ["style", "width", '931px']
            ],
            "${_Rectangle2}": [
                ["style", "height", '2px'],
                ["style", "top", '809px']
            ],
            "${_Text2Copy}": [
                ["style", "top", '539px'],
                ["style", "left", '31px'],
                ["style", "font-size", '24px']
            ],
            "${_Text}": [
                ["style", "top", '123px'],
                ["style", "font-size", '18px'],
                ["style", "height", '842px'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '24px'],
                ["style", "width", '936px']
            ],
            "${_CV}": [
                ["style", "left", '1186px']
            ],
            "${_profile_header}": [
                ["subproperty", "filter.invert", '1'],
                ["style", "left", '31px'],
                ["style", "top", '15px']
            ],
            "${_Text2}": [
                ["style", "top", '439px'],
                ["style", "left", '31px'],
                ["style", "font-size", '24px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '67px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '724px'],
                ["style", "opacity", '0.39837398373984'],
                ["style", "left", '1186px'],
                ["style", "width", '512px']
            ],
            "${_Text2Copy2}": [
                ["style", "top", '600px'],
                ["style", "left", '31px'],
                ["style", "font-size", '24px']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '31px'],
                ["style", "width", '100%']
            ],
            "${_Text2Copy4}": [
                ["style", "top", '736px'],
                ["style", "left", '31px'],
                ["style", "font-size", '24px']
            ],
            "${symbolSelector}": [
                ["style", "height", '920px'],
                ["style", "width", '1920px']
            ],
            "${_Rectangle5}": [
                ["style", "top", '0px'],
                ["style", "height", '100%'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1920px']
            ],
            "${_Rectangle}": [
                ["style", "height", '760px'],
                ["style", "top", '49px'],
                ["style", "left", '960px'],
                ["style", "width", '2px']
            ],
            "${_Text2Copy3}": [
                ["style", "top", '670px'],
                ["style", "left", '31px'],
                ["style", "font-size", '24px']
            ],
            "${_Text3}": [
                ["color", "color", 'rgba(255,255,255,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"image_preview": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '1920px', '920px', 'auto', 'auto'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    id: 'Rectangle4',
                    opacity: 0.79674798444035,
                    display: 'none',
                    fill: ['rgba(33,33,33,1.00)']
                },
                {
                    rect: ['2255px', '18px', '1250px', '884px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ziggurat.jpg', '0px', '0px', '100%', '100%'],
                    display: 'none',
                    id: 'ziggurat',
                    type: 'image',
                    cursor: ['default'],
                    sizeRange: ['0px', '182.7%', '', '']
                },
                {
                    rect: ['2327px', '18', '1105px', '884px', 'auto', 'auto'],
                    type: 'image',
                    id: 'Clockwork-Parts',
                    display: 'none',
                    cursor: ['default'],
                    fill: ['rgba(0,0,0,0)', 'images/Clockwork-Parts.jpg', '0px', '0px']
                },
                {
                    rect: ['2093px', '18px', '1572px', '884px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['72px', '18px', '1240px', '884px', 'auto', 'auto'],
                    id: 'thumbnail_mouldylunches',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/thumbnail_mouldylunches.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Clockwork-Parts}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '495px'],
                ["style", "cursor", 'default']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "display", 'none'],
                ["style", "top", '18px'],
                ["style", "height", '884px'],
                ["style", "opacity", '0'],
                ["style", "left", '303px'],
                ["style", "width", '1572px']
            ],
            "${symbolSelector}": [
                ["style", "height", '46.46%'],
                ["style", "width", '100%']
            ],
            "${_ziggurat}": [
                ["style", "top", '18px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'default'],
                ["style", "max-width", '182.71%'],
                ["style", "height", '884px'],
                ["style", "opacity", '0'],
                ["style", "left", '335px'],
                ["style", "width", '1250px']
            ],
            "${_Rectangle4}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(33,33,33,1.00)'],
                ["style", "overflow", 'visible'],
                ["style", "height", '920px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '1920px']
            ],
            "${_thumbnail_mouldylunches}": [
                ["style", "top", '18px'],
                ["style", "opacity", '0'],
                ["style", "left", '303px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7750,
            autoPlay: false,
            timeline: [
                { id: "eid4987", tween: [ "style", "${_Rectangle4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid4988", tween: [ "style", "${_Rectangle4}", "left", '1920px', { fromValue: '0px'}], position: 250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5114", tween: [ "style", "${_Rectangle4}", "left", '0px', { fromValue: '1920px'}], position: 1832, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5123", tween: [ "style", "${_Rectangle4}", "left", '1920px', { fromValue: '0px'}], position: 1998, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5428", tween: [ "style", "${_Rectangle4}", "left", '0px', { fromValue: '1920px'}], position: 3569, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5530", tween: [ "style", "${_Rectangle4}", "left", '1920px', { fromValue: '0px'}], position: 3750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5531", tween: [ "style", "${_Rectangle4}", "left", '0px', { fromValue: '1920px'}], position: 5376, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5431", tween: [ "style", "${_Rectangle4}", "left", '1920px', { fromValue: '0px'}], position: 6002, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5429", tween: [ "style", "${_Rectangle4}", "left", '0px', { fromValue: '1920px'}], position: 7625, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5793", tween: [ "style", "${_Rectangle4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5795", tween: [ "style", "${_Rectangle4}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5796", tween: [ "style", "${_Rectangle4}", "display", 'none', { fromValue: 'block'}], position: 1832, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5798", tween: [ "style", "${_Rectangle4}", "display", 'block', { fromValue: 'none'}], position: 1998, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5800", tween: [ "style", "${_Rectangle4}", "display", 'none', { fromValue: 'block'}], position: 3569, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5802", tween: [ "style", "${_Rectangle4}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5804", tween: [ "style", "${_Rectangle4}", "display", 'none', { fromValue: 'block'}], position: 5376, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5807", tween: [ "style", "${_Rectangle4}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5808", tween: [ "style", "${_Rectangle4}", "display", 'none', { fromValue: 'block'}], position: 7625, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5397", tween: [ "style", "${_Rectangle3}", "opacity", '1', { fromValue: '0'}], position: 6002, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid5512", tween: [ "style", "${_Rectangle3}", "opacity", '0', { fromValue: '1'}], position: 7625, duration: 0, easing: "easeInOutQuad" },
                { id: "eid4996", tween: [ "style", "${_ziggurat}", "left", '335px', { fromValue: '335px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid4997", tween: [ "style", "${_ziggurat}", "left", '2255px', { fromValue: '335px'}], position: 250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5097", tween: [ "style", "${_ziggurat}", "left", '335px', { fromValue: '2255px'}], position: 1832, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5790", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5809", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5810", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'block'}], position: 7625, duration: 0, easing: "easeInOutQuad" },
                { id: "eid4991", tween: [ "style", "${_Rectangle4}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid5096", tween: [ "style", "${_Rectangle4}", "opacity", '0', { fromValue: '1'}], position: 1832, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5073", tween: [ "style", "${_Rectangle4}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid5514", tween: [ "style", "${_Rectangle4}", "opacity", '0', { fromValue: '1'}], position: 3569, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5532", tween: [ "style", "${_Rectangle4}", "opacity", '1', { fromValue: '0'}], position: 3752, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid5533", tween: [ "style", "${_Rectangle4}", "opacity", '0', { fromValue: '1'}], position: 5376, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5515", tween: [ "style", "${_Rectangle4}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid5440", tween: [ "style", "${_Rectangle4}", "opacity", '0', { fromValue: '1'}], position: 7625, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5524", tween: [ "style", "${_thumbnail_mouldylunches}", "opacity", '0', { fromValue: '0'}], position: 3750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5528", tween: [ "style", "${_thumbnail_mouldylunches}", "opacity", '1', { fromValue: '0'}], position: 3752, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid5529", tween: [ "style", "${_thumbnail_mouldylunches}", "opacity", '0', { fromValue: '1'}], position: 5376, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5792", tween: [ "style", "${_ziggurat}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5794", tween: [ "style", "${_ziggurat}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5797", tween: [ "style", "${_ziggurat}", "display", 'none', { fromValue: 'block'}], position: 1832, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5791", tween: [ "style", "${_Clockwork-Parts}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5799", tween: [ "style", "${_Clockwork-Parts}", "display", 'block', { fromValue: 'none'}], position: 1998, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5801", tween: [ "style", "${_Clockwork-Parts}", "display", 'none', { fromValue: 'block'}], position: 3569, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5079", tween: [ "style", "${_Clockwork-Parts}", "left", '495px', { fromValue: '495px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5078", tween: [ "style", "${_Clockwork-Parts}", "left", '2327px', { fromValue: '495px'}], position: 1998, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5427", tween: [ "style", "${_Clockwork-Parts}", "left", '495px', { fromValue: '2327px'}], position: 3569, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5077", tween: [ "style", "${_Clockwork-Parts}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid5511", tween: [ "style", "${_Clockwork-Parts}", "opacity", '0', { fromValue: '1'}], position: 3569, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5789", tween: [ "style", "${_thumbnail_mouldylunches}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5803", tween: [ "style", "${_thumbnail_mouldylunches}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5805", tween: [ "style", "${_thumbnail_mouldylunches}", "display", 'none', { fromValue: 'block'}], position: 5376, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5534", tween: [ "style", "${_thumbnail_mouldylunches}", "left", '303px', { fromValue: '303px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5526", tween: [ "style", "${_thumbnail_mouldylunches}", "left", '2327px', { fromValue: '303px'}], position: 3750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5527", tween: [ "style", "${_thumbnail_mouldylunches}", "left", '495px', { fromValue: '2327px'}], position: 5376, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5000", tween: [ "style", "${_ziggurat}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid5076", tween: [ "style", "${_ziggurat}", "opacity", '0', { fromValue: '1'}], position: 1832, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5398", tween: [ "style", "${_Rectangle3}", "left", '303px', { fromValue: '303px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5396", tween: [ "style", "${_Rectangle3}", "left", '2094px', { fromValue: '303px'}], position: 6000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5513", tween: [ "style", "${_Rectangle3}", "left", '-22px', { fromValue: '2094px'}], position: 7625, duration: 0, easing: "easeInOutQuad" }            ]
        }
    }
},
"Indicator_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['1px', '1px', '8px', '8px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['2px', '2px', '6px', '6px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,0,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '10px'],
                ["style", "width", '10px']
            ],
            "${_Ellipse2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "filter.invert", '0'],
                ["style", "height", '8px'],
                ["style", "top", '1px'],
                ["style", "left", '1px'],
                ["style", "width", '8px']
            ],
            "${_Ellipse}": [
                ["style", "top", '0px'],
                ["subproperty", "filter.invert", '0'],
                ["style", "height", '10px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '10px']
            ],
            "${_Ellipse3}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '2px'],
                ["style", "height", '6px'],
                ["style", "opacity", '0'],
                ["style", "left", '2px'],
                ["style", "width", '6px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            timeline: [
                { id: "eid5270", tween: [ "style", "${_Ellipse3}", "opacity", '0', { fromValue: '0'}], position: 500, duration: 0 },
                { id: "eid5271", tween: [ "style", "${_Ellipse3}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 0 }            ]
        }
    }
},
"anim_lunch_thumb": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'thumbnail_3dlunch',
                    type: 'image',
                    rect: ['0px', '0px', '400px', '229px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/thumbnail_3dlunch.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '400px', '229px', 'auto', 'auto'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'Rectangle3',
                    opacity: 0.4,
                    type: 'rect',
                    fill: ['rgba(23,23,23,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle3}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(23,23,23,1)'],
                ["style", "opacity", '0.400000'],
                ["style", "left", '0px'],
                ["style", "width", '400px']
            ],
            "${symbolSelector}": [
                ["style", "height", '229px'],
                ["style", "width", '400px']
            ],
            "${_thumbnail_3dlunch}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid5401", tween: [ "style", "${_Rectangle3}", "opacity", '0', { fromValue: '0.400000'}], position: 0, duration: 250, easing: "easeInOutQuad" }            ]
        }
    }
},
"Facebook": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0', '0.1%', '385px', '440px', '-0.1%', 'auto'],
                    borderRadius: ['0px', '0px', '0px', '0px'],
                    type: 'rect',
                    id: 'fb_widget',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['default'],
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '440px'],
                ["style", "width", '385px']
            ],
            "${_fb_widget}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "right", '-0.1%'],
                ["style", "left", 'auto'],
                ["style", "width", '385px'],
                ["style", "top", '0.11%'],
                ["style", "height", '440px'],
                ["style", "cursor", 'default'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "opacity", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-2697713");
