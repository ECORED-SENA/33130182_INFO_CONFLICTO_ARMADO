/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.2.3.min.js",
            js+"jquery-ui.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fondo',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo.svg",'0px','0px'],
                            transform: [[],[],[],['1.09259','1.09259']]
                        },
                        {
                            id: 'titulo',
                            type: 'image',
                            rect: ['-103px', '625px', '459px', '112px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titulo.svg",'0px','0px']
                        },
                        {
                            id: 'btn_continuar',
                            display: 'none',
                            type: 'image',
                            rect: ['606px', '507px', '211px', '49px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"btn_continuar.svg",'0px','0px']
                        },
                        {
                            id: 'intro',
                            display: 'block',
                            type: 'image',
                            rect: ['416px', '616px', '562px', '369px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"intro.svg",'0px','0px']
                        },
                        {
                            id: 'mapa',
                            display: 'none',
                            type: 'image',
                            rect: ['134px', '144px', '426px', '431px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mapa.svg",'0px','0px'],
                            transform: [[],[],[],['1.45644','1.45644']]
                        },
                        {
                            id: 'act_iniciales_1',
                            display: 'none',
                            type: 'image',
                            rect: ['281px', '-72px', '47px', '64px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"act_iniciales_1.svg",'0px','0px']
                        },
                        {
                            id: 'act_iniciales_2',
                            display: 'none',
                            type: 'image',
                            rect: ['279px', '155px', '53px', '72px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"act_iniciales_2.svg",'0px','0px'],
                            transform: [[],[],[],['1.41509','1.30556']]
                        },
                        {
                            id: 'activ_1_1',
                            display: 'none',
                            type: 'image',
                            rect: ['158px', '-76px', '44px', '57px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"activ_1_1.svg",'0px','0px']
                        },
                        {
                            id: 'activ_1_2',
                            display: 'none',
                            type: 'image',
                            rect: ['153px', '297px', '51px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"activ_1_2.svg",'0px','0px']
                        },
                        {
                            id: 'activ_2_1',
                            display: 'none',
                            type: 'image',
                            rect: ['433px', '-72px', '44px', '57px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"activ_2_1.svg",'0px','0px']
                        },
                        {
                            id: 'activ_2_2',
                            type: 'image',
                            rect: ['434px', '259px', '51px', '67px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"activ_2_2.svg",'0px','0px']
                        },
                        {
                            id: 'activ_3_1',
                            display: 'none',
                            type: 'image',
                            rect: ['188px', '-74px', '44px', '57px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"activ_3_1.svg",'0px','0px']
                        },
                        {
                            id: 'activ_3_2',
                            display: 'none',
                            type: 'image',
                            rect: ['183px', '414px', '51px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"activ_3_2.svg",'0px','0px']
                        },
                        {
                            id: 'activ_4_1',
                            display: 'none',
                            type: 'image',
                            rect: ['502px', '-75px', '44px', '57px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"activ_4_1.svg",'0px','0px']
                        },
                        {
                            id: 'activ_4_2',
                            display: 'none',
                            type: 'image',
                            rect: ['502px', '417px', '51px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"activ_4_2.svg",'0px','0px']
                        },
                        {
                            id: 'text_act_iniciales',
                            symbolName: 'text_act_iniciales',
                            display: 'block',
                            type: 'rect',
                            rect: ['575', '49', '476', '502', 'auto', 'auto'],
                            clip: 'rect(0px 0.4443359375px 502px 0px)'
                        },
                        {
                            id: 'text_act1',
                            symbolName: 'text_act1',
                            display: 'none',
                            type: 'rect',
                            rect: ['576px', '134px', '417', '334', 'auto', 'auto']
                        },
                        {
                            id: 'text_act2',
                            symbolName: 'text_act2',
                            type: 'rect',
                            rect: ['575px', '134px', '417', '360', 'auto', 'auto']
                        },
                        {
                            id: 'text_act3',
                            symbolName: 'text_act3',
                            type: 'rect',
                            rect: ['575px', '134px', '417', '372', 'auto', 'auto']
                        },
                        {
                            id: 'text_act4',
                            symbolName: 'text_act4',
                            type: 'rect',
                            rect: ['576px', '134px', '426', '384', 'auto', 'auto']
                        },
                        {
                            id: 'logos',
                            type: 'image',
                            rect: ['1288px', '16px', '187px', '157px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logos.svg",'0px','0px']
                        },
                        {
                            id: 'btnActIni',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['268px', '144px', '79px', '95px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btnAct1',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['163px', '278px', '79px', '95px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btnAct2',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['347px', '261px', '130px', '95px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btnAct3',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['174px', '401px', '130px', '95px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btnAct4',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['426px', '401px', '130px', '95px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'audio-1400481',
                            display: 'none',
                            volume: '0.099999999999996',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['588px', '530px', '320px', '45px', 'auto', 'auto'],
                            opacity: '0.43448275862069',
                            source: [aud+"audio-1400481.mp3"],
                            preload: 'auto',
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'personaje2',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '134px', '365px', '578px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"personaje2.svg",'0px','0px']
                        },
                        {
                            id: 'opciones',
                            symbolName: 'opciones',
                            type: 'rect',
                            rect: ['1010', '512', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'menu_opciones',
                            symbolName: 'menu_opciones',
                            display: 'none',
                            type: 'rect',
                            rect: ['1013px', '190px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'creditos',
                            symbolName: 'creditos',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '600', 'auto', 'auto']
                        },
                        {
                            id: 'cc',
                            symbolName: 'cc',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '600', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    labels: {
                        "mapa": 2000,
                        "actIni": 3783,
                        "act1": 5000,
                        "act2": 6250,
                        "act3": 7500,
                        "act4": 8750
                    },
                    data: [
                        [
                            "eid152",
                            "display",
                            3877,
                            0,
                            "linear",
                            "${act_iniciales_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid182",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${act_iniciales_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid146",
                            "top",
                            3250,
                            250,
                            "linear",
                            "${activ_3_1}",
                            '-74px',
                            '419px'
                        ],
                        [
                            "eid40",
                            "top",
                            0,
                            0,
                            "linear",
                            "${text_act2}",
                            '134px',
                            '134px'
                        ],
                        [
                            "eid236",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${btnAct4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid158",
                            "display",
                            7499,
                            0,
                            "linear",
                            "${activ_3_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid216",
                            "display",
                            8749,
                            0,
                            "linear",
                            "${activ_3_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid157",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${activ_3_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid242",
                            "display",
                            7498,
                            0,
                            "linear",
                            "${activ_3_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid243",
                            "display",
                            8747,
                            0,
                            "linear",
                            "${activ_3_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid153",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${activ_1_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid238",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${activ_1_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid239",
                            "display",
                            6249,
                            0,
                            "linear",
                            "${activ_1_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid44",
                            "top",
                            0,
                            0,
                            "linear",
                            "${text_act3}",
                            '134px',
                            '134px'
                        ],
                        [
                            "eid284",
                            "display",
                            4783,
                            0,
                            "linear",
                            "${audio-1400481}",
                            'none',
                            'block'
                        ],
                        [
                            "eid190",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${text_act2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid191",
                            "display",
                            7500,
                            0,
                            "linear",
                            "${text_act2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid192",
                            "clip",
                            7750,
                            873,
                            "linear",
                            "${text_act3}",
                            [0,0.4443359375,502,0],
                            [0,476,502,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid151",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${act_iniciales_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid172",
                            "scaleX",
                            3877,
                            373,
                            "linear",
                            "${act_iniciales_2}",
                            '1.41509',
                            '1'
                        ],
                        [
                            "eid48",
                            "scaleX",
                            0,
                            715,
                            "linear",
                            "${fondo}",
                            '1.09259',
                            '1'
                        ],
                        [
                            "eid295",
                            "volume",
                            5420,
                            2001,
                            "linear",
                            "${audio-1400481}",
                            '0.1',
                            '0.042857142857143'
                        ],
                        [
                            "eid186",
                            "display",
                            3783,
                            0,
                            "linear",
                            "${text_act_iniciales}",
                            'block',
                            'block'
                        ],
                        [
                            "eid185",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${text_act_iniciales}",
                            'block',
                            'none'
                        ],
                        [
                            "eid160",
                            "display",
                            8749,
                            0,
                            "linear",
                            "${activ_4_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid220",
                            "display",
                            9999,
                            0,
                            "linear",
                            "${activ_4_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid161",
                            "display",
                            0,
                            0,
                            "linear",
                            "${creditos}",
                            'none',
                            'none'
                        ],
                        [
                            "eid292",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${personaje2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid293",
                            "display",
                            1939,
                            0,
                            "linear",
                            "${personaje2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid193",
                            "display",
                            7500,
                            0,
                            "linear",
                            "${text_act3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid194",
                            "display",
                            8750,
                            0,
                            "linear",
                            "${text_act3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid278",
                            "display",
                            0,
                            0,
                            "linear",
                            "${menu_opciones}",
                            'none',
                            'none'
                        ],
                        [
                            "eid61",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${btn_continuar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid150",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${btn_continuar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid135",
                            "top",
                            2500,
                            250,
                            "linear",
                            "${act_iniciales_1}",
                            '-72px',
                            '162px'
                        ],
                        [
                            "eid214",
                            "scaleY",
                            7499,
                            501,
                            "linear",
                            "${activ_3_2}",
                            '1.30556',
                            '1'
                        ],
                        [
                            "eid199",
                            "scaleX",
                            5000,
                            500,
                            "linear",
                            "${activ_1_2}",
                            '1.41509',
                            '1'
                        ],
                        [
                            "eid155",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${activ_2_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid240",
                            "display",
                            6249,
                            0,
                            "linear",
                            "${activ_2_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid241",
                            "display",
                            7498,
                            0,
                            "linear",
                            "${activ_2_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid159",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${activ_4_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid244",
                            "display",
                            8747,
                            0,
                            "linear",
                            "${activ_4_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid245",
                            "display",
                            9996,
                            0,
                            "linear",
                            "${activ_4_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid196",
                            "display",
                            8750,
                            0,
                            "linear",
                            "${text_act4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid197",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${text_act4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid43",
                            "left",
                            0,
                            0,
                            "linear",
                            "${text_act3}",
                            '575px',
                            '575px'
                        ],
                        [
                            "eid41",
                            "left",
                            0,
                            0,
                            "linear",
                            "${text_act4}",
                            '576px',
                            '576px'
                        ],
                        [
                            "eid187",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${text_act1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid188",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${text_act1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid218",
                            "scaleY",
                            8749,
                            501,
                            "linear",
                            "${activ_4_2}",
                            '1.30556',
                            '1'
                        ],
                        [
                            "eid233",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${btnAct3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid144",
                            "top",
                            3000,
                            250,
                            "linear",
                            "${activ_2_1}",
                            '-72px',
                            '261px'
                        ],
                        [
                            "eid60",
                            "top",
                            1250,
                            425,
                            "linear",
                            "${intro}",
                            '616px',
                            '154px'
                        ],
                        [
                            "eid207",
                            "scaleY",
                            6249,
                            501,
                            "linear",
                            "${activ_2_2}",
                            '1.30556',
                            '1'
                        ],
                        [
                            "eid288",
                            "scaleX",
                            4783,
                            0,
                            "linear",
                            "${audio-1400481}",
                            '0.99',
                            '0.99'
                        ],
                        [
                            "eid39",
                            "left",
                            0,
                            0,
                            "linear",
                            "${text_act2}",
                            '575px',
                            '575px'
                        ],
                        [
                            "eid64",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${mapa}",
                            '1.45644',
                            '1'
                        ],
                        [
                            "eid208",
                            "display",
                            6249,
                            0,
                            "linear",
                            "${activ_2_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid209",
                            "display",
                            7499,
                            0,
                            "linear",
                            "${activ_2_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid213",
                            "scaleX",
                            7499,
                            501,
                            "linear",
                            "${activ_3_2}",
                            '1.41509',
                            '1'
                        ],
                        [
                            "eid198",
                            "scaleY",
                            5000,
                            500,
                            "linear",
                            "${activ_1_2}",
                            '1.30556',
                            '1'
                        ],
                        [
                            "eid189",
                            "clip",
                            6873,
                            500,
                            "linear",
                            "${text_act2}",
                            [0,0.4443359375,502,0],
                            [0,476,502,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid195",
                            "clip",
                            8873,
                            1000,
                            "linear",
                            "${text_act4}",
                            [0,0.4443359375,502,0],
                            [0,476,502,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid206",
                            "scaleX",
                            6249,
                            501,
                            "linear",
                            "${activ_2_2}",
                            '1.41509',
                            '1'
                        ],
                        [
                            "eid132",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${intro}",
                            'block',
                            'none'
                        ],
                        [
                            "eid162",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cc}",
                            'none',
                            'none'
                        ],
                        [
                            "eid164",
                            "clip",
                            3783,
                            1000,
                            "linear",
                            "${text_act_iniciales}",
                            [0,0.4443359375,502,0],
                            [0,476,502,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid166",
                            "left",
                            715,
                            285,
                            "linear",
                            "${logos}",
                            '1288px',
                            '1093px'
                        ],
                        [
                            "eid130",
                            "scaleY",
                            2000,
                            500,
                            "linear",
                            "${mapa}",
                            '1.45644',
                            '1'
                        ],
                        [
                            "eid62",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${mapa}",
                            'none',
                            'block'
                        ],
                        [
                            "eid225",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${btnAct1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid217",
                            "scaleX",
                            8749,
                            501,
                            "linear",
                            "${activ_4_2}",
                            '1.41509',
                            '1'
                        ],
                        [
                            "eid42",
                            "top",
                            0,
                            0,
                            "linear",
                            "${text_act4}",
                            '134px',
                            '134px'
                        ],
                        [
                            "eid174",
                            "scaleY",
                            3877,
                            373,
                            "linear",
                            "${act_iniciales_2}",
                            '1.30556',
                            '1'
                        ],
                        [
                            "eid50",
                            "scaleY",
                            0,
                            715,
                            "linear",
                            "${fondo}",
                            '1.09259',
                            '1'
                        ],
                        [
                            "eid200",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${activ_1_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid201",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${activ_1_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid52",
                            "location",
                            500,
                            500,
                            "linear",
                            "${titulo}",
                            [[126.72, 680.78, 0, 0, 0, 0,0],[627.02, 272.27, 75.36, -441.98, 78.73, -461.76,657.27],[229.5, 78, 0, 0, 0, 0,1132.7]]
                        ],
                        [
                            "eid280",
                            "opacity",
                            0,
                            1500,
                            "linear",
                            "${opciones}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "top",
                            2750,
                            250,
                            "linear",
                            "${activ_1_1}",
                            '-76px',
                            '303px'
                        ],
                        [
                            "eid184",
                            "clip",
                            5123,
                            1000,
                            "linear",
                            "${text_act1}",
                            [0,0.4443359375,502,0],
                            [0,476,502,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid289",
                            "scaleY",
                            4783,
                            0,
                            "linear",
                            "${audio-1400481}",
                            '0.99',
                            '0.99'
                        ],
                        [
                            "eid224",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${btnActIni}",
                            'none',
                            'block'
                        ],
                        [
                            "eid228",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${btnAct2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid148",
                            "top",
                            3500,
                            250,
                            "linear",
                            "${activ_4_1}",
                            '-75px',
                            '423px'
                        ]
                    ]
                }
            },
            "personaje": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'personaje',
                            type: 'image',
                            rect: ['0px', '0px', '165px', '521px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/personaje.svg', '0px', '0px']
                        },
                        {
                            id: 'personaje_ojos_c',
                            type: 'image',
                            rect: ['0px', '0px', '165px', '521px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/personaje_ojos_c.svg', '0px', '0px']
                        },
                        {
                            id: 'personaje_ojos_a',
                            type: 'image',
                            rect: ['0px', '0px', '165px', '521px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/personaje_ojos_a.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '165px', '521px', 'auto', 'auto'],
                            id: 'personaje_boca_c',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/personaje_boca_c.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '165px', '521px', 'auto', 'auto'],
                            id: 'personaje_boca_a',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/personaje_boca_a.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '165px', '521px']
                        }
                    }
                },
                timeline: {
                    duration: 29000,
                    autoPlay: false,
                    data: [
                        [
                            "eid65",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid66",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid67",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid68",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid69",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid70",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid71",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid72",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid73",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid75",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid76",
                            "display",
                            10500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid77",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid78",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid79",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid80",
                            "display",
                            14500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid81",
                            "display",
                            16000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            16500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "display",
                            17000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid84",
                            "display",
                            17500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid85",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            20500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid87",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid88",
                            "display",
                            21500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid89",
                            "display",
                            24000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            24500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid91",
                            "display",
                            25000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid92",
                            "display",
                            25500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid93",
                            "display",
                            27500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid94",
                            "display",
                            28000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid95",
                            "display",
                            28500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid96",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid28",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${personaje_boca_c}",
                            '1',
                            '1'
                        ],
                        [
                            "eid131",
                            "opacity",
                            6000,
                            250,
                            "linear",
                            "${personaje_boca_c}",
                            '1',
                            '0'
                        ],
                        [
                            "eid30",
                            "opacity",
                            6250,
                            68,
                            "linear",
                            "${personaje_boca_c}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            6318,
                            1182,
                            "linear",
                            "${personaje_boca_c}",
                            '1',
                            '0'
                        ],
                        [
                            "eid137",
                            "opacity",
                            7500,
                            250,
                            "linear",
                            "${personaje_boca_c}",
                            '0',
                            '1'
                        ],
                        [
                            "eid140",
                            "opacity",
                            24512,
                            250,
                            "linear",
                            "${personaje_boca_c}",
                            '1',
                            '0'
                        ],
                        [
                            "eid141",
                            "opacity",
                            26012,
                            250,
                            "linear",
                            "${personaje_boca_c}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid99",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid100",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid101",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid102",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid103",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid104",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid105",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid106",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid107",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid108",
                            "display",
                            10500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid109",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid110",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid111",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid112",
                            "display",
                            14500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid113",
                            "display",
                            16000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid114",
                            "display",
                            16500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid115",
                            "display",
                            17000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid116",
                            "display",
                            17500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid117",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid118",
                            "display",
                            20500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid119",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid120",
                            "display",
                            21500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid121",
                            "display",
                            24000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid122",
                            "display",
                            24500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid123",
                            "display",
                            25000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid124",
                            "display",
                            25500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid125",
                            "display",
                            27500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid126",
                            "display",
                            28000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid127",
                            "display",
                            28500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid128",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid34",
                            "opacity",
                            6000,
                            250,
                            "linear",
                            "${personaje_boca_a}",
                            '1',
                            '0'
                        ],
                        [
                            "eid35",
                            "opacity",
                            7500,
                            250,
                            "linear",
                            "${personaje_boca_a}",
                            '0',
                            '1'
                        ],
                        [
                            "eid138",
                            "opacity",
                            24512,
                            250,
                            "linear",
                            "${personaje_boca_a}",
                            '0',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            26012,
                            250,
                            "linear",
                            "${personaje_boca_a}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "text_act_iniciales": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'text_act_iniciales',
                            rect: ['0px', '0px', '475px', '502px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/text_act_iniciales.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​- Actualice sus datos en Sofia Plus.\n</p><p style=\"margin: 0px;\">- Responda el cuestionario de sondeos previos.\n</p><p style=\"margin: 0px;\">- Participe en el foro social.\n</p><p style=\"margin: 0px;\">- Revise la información dispuesta en el enlace de \"<span style=\"font-weight: 700;\">Información del Programa</span>\" y  <span style=\"font-weight: 700;\">cronograma</span>.\n</p>',
                            rect: ['1px', '75px', '475px', '83px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(48,48,48,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '204px', '459px', '100px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Ingrese por la pestaña “<span style=\"font-weight: 700;\">Actividades iniciales</span>”, en donde encontrará la “<span style=\"font-weight: 700;\">Actualización de datos del aprendiz</span>”, lea el documento y siga las instrucciones. Luego, acceda a “<span style=\"font-weight: 700;\">Sondeo de saberes previos</span>”. Posteriormente, ingrese al foro social y haga la respectiva presentación personal. Además, ingrese por el enlace “<span style=\"font-weight: 700;\">Información del programa</span>”, en donde encontrará el “<span style=\"font-weight: 700;\">Diseño curricular</span>” y la “<span style=\"font-weight: 700;\">Descripción del programa</span>”, en versión interactiva y descargable.</p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(48,48,48,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['1px', '357px', '426px', '112px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​•Haga clic en la pestaña “<span style=\"font-weight: 700;\">Actividades iniciales</span>”, luego encontrará:\nCuestionario de sondeos previos.\nActualización de datos del aprendiz.\n</p><p style=\"margin: 0px;\">• Acceda al enlace “<span style=\"font-weight: 700;\">Foros de discusión</span>”, del menú del programa, luego\nencontrará “<span style=\"font-weight: 700;\">Foro social</span>”.\n</p><p style=\"margin: 0px;\">• Ingrese al enlace “<span style=\"font-weight: 700;\">Información del programa</span>”, en donde encontrará el “<span style=\"font-weight: 700;\">Diseño curricular</span>” y “<span style=\"font-weight: 700;\">Descripción del programa</span>” de formación.\n</p>',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(48,48,48,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '476px', '502px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "text_act1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'text_act1',
                            rect: ['0px', '0px', '417px', '241px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/text_act1.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '115px', '407px', '241px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​De acuerdo a la actividad de aprendizaje 1: “Comprender el ámbito de aplicación de los Derechos Humanos, Derecho Internacional Humanitario en Colombia y mecanismos para el reconocimiento y ejercicio de los derechos de las víctimas del conflicto armado en el marco de la política pública de atención, asistencia y reparación”.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">●\tLea atentamente la guía de aprendizaje 1.</p><p style=\"margin: 0px;\">●\tRealice una lectura cuidadosa del Material de formación 1, en versión interactiva y descargable.&nbsp;</p><p style=\"margin: 0px;\">●\tDesarrolle la actividad interactiva de afianzamiento.</p><p style=\"margin: 0px;\">●\tResponda el cuestionario de evaluación.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p>',
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(48,48,48,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '417px', '334px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "text_act2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'text_act2',
                            type: 'image',
                            rect: ['1px', '0px', '414px', '347px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/text_act2.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '139px', '417px', '221px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(48,48,48,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text5',
                            text: '<p style=\"margin: 0px;\">​De acuerdo a la actividad de aprendizaje 2: “Identificar</p><p style=\"margin: 0px;\">mecanismos para el reconocimiento y ejercicio de los derechos de las víctimas en el marco de la Política Pública de Atención, Asistencia y Reparación Integral”.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">●\tLea atentamente la guía de aprendizaje 2</p><p style=\"margin: 0px;\">●\tRealice una lectura cuidadosa del Material de formación 2, en versión interactiva y descargable.</p><p style=\"margin: 0px;\">●\t Desarrolle la actividad interactiva de afianzamiento.</p><p style=\"margin: 0px;\">●\tResponda el cuestionario de evaluación.</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '417px', '360px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "text_act3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '0px', '416px', '372px', 'auto', 'auto'],
                            id: 'text_act3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/text_act3.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(48,48,48,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text6',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​De acuerdo a la actividad de aprendizaje 3: “Emplear</p><p style=\"margin: 0px;\">recomendaciones para la atención a víctimas del conflicto</p><p style=\"margin: 0px;\">armado teniendo en cuenta los enfoques psicosocial,</p><p style=\"margin: 0px;\">diferencial, acción sin daño y curso de vida”.</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">●\tLea atentamente la guía de aprendizaje 3.</p><p style=\"margin: 0px;\">●\tRealice una lectura cuidadosa del Material de formación 3, en versión interactiva y descargable.</p><p style=\"margin: 0px;\">●\tDesarrolle la actividad interactiva de afianzamiento.</p><p style=\"margin: 0px;\">●\tResponda el cuestionario de evaluación.</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p>',
                            rect: ['0px', '140px', '425px', '184px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '417px', '372px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "text_act4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '416px', '384px', 'auto', 'auto'],
                            id: 'text_act4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/text_act4.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(48,48,48,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text7',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​De acuerdo a la actividad de aprendizaje 4: “Adoptar en el</p><p style=\"margin: 0px;\">ejercicio laboral herramientas para la atención con enfoque</p><p style=\"margin: 0px;\">psicosocial teniendo en cuenta principios de humanización,</p><p style=\"margin: 0px;\">dignificación y reconocimiento de las víctimas del conflicto</p><p style=\"margin: 0px;\">armado, así como fomentar el cuidado emocional mediante</p><p style=\"margin: 0px;\">acciones de bienestar y protección de la salud en el ámbito</p><p style=\"margin: 0px;\">laboral de talento humano que atiende y orienta a víctimas</p><p style=\"margin: 0px;\">teniendo en cuenta lineamientos establecido”.</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">●\tLea atentamente la guía de aprendizaje 4.</p><p style=\"margin: 0px;\">●\tRealice una lectura cuidadosa del Material de formación 4, en versión interactiva y descargable.&nbsp;</p><p style=\"margin: 0px;\">●\tDesarrolle la actividad interactiva de afianzamiento.</p><p style=\"margin: 0px;\">●\tResponda el cuestionario de evaluación.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-style: italic;\"></span></p>',
                            rect: ['0px', '108px', '426px', '218px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '426px', '384px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "creditos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'cortina_creditos',
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cortina_creditos.svg', '0px', '0px']
                        },
                        {
                            rect: ['975px', '37px', '35px', '42px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'BtnCerrar',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "cc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            id: 'cortina_cc',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cortina_cc.svg', '0px', '0px']
                        },
                        {
                            rect: ['1235px', '159px', '32px', '32px', 'auto', 'auto'],
                            id: 'btn_cerrar2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn_cerrar2.svg', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['1232px', '149px', '35px', '42px', 'auto', 'auto'],
                            id: 'BtnCerrar',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "opciones": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'btn_opciones',
                            rect: ['0px', '0px', '207px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn_opciones2.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '54px', '50px', 'auto', 'auto'],
                            transform: [[], [], ['25'], [1, 1, 1]],
                            id: 'btn_home',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['49px', '0px', '155px', '49px', 'auto', 'auto'],
                            transform: [[], [], ['25'], [1, 1, 1]],
                            id: 'btn_desplegar_cintilla',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '207px', '49px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "menu_opciones": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'botones_opcion',
                            rect: ['15px', '155px', '185px', '173px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/botones_opcion.svg', '0px', '0px']
                        },
                        {
                            rect: ['120px', '157px', '40px', '26px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'btn_ocultar',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(215,20,20,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'btn_cc',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['45px', '232px', '151px', '45px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-4'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            id: 'btn_creditos',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['37px', '281px', '161px', '53px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-4'], [], ['0.94047']],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            id: 'btn_descargarpdf',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['15px', '189px', '167px', '45px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-6'], ['7'], [1, 1, 1]],
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '193px', '331px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid658",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_ocultar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid652",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_descargarpdf}",
                            'none',
                            'block'
                        ],
                        [
                            "eid656",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_creditos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid657",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_cc}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-504933622");
