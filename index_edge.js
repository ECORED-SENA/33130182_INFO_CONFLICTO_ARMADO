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
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fondo',
                            type: 'image',
                            rect: ['0px', '-5px', '1272px', '602px', 'auto', 'auto'],
                            opacity: '0.0085470085470085',
                            fill: ["rgba(0,0,0,0)",im+"fondo.svg",'0px','0px']
                        },
                        {
                            id: 'nube-hombre',
                            display: 'none',
                            type: 'image',
                            rect: ['27px', '93px', '1111px', '504px', 'auto', 'auto'],
                            clip: 'rect(0px 0px 504px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"nube-hombre.svg",'0px','0px']
                        },
                        {
                            id: 'nube-hombre1',
                            display: 'none',
                            type: 'image',
                            rect: ['27px', '93px', '1111px', '504px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"nube-hombre1.svg",'0px','0px']
                        },
                        {
                            id: 'pregunta1',
                            type: 'image',
                            rect: ['425px', '172px', '542px', '298px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pregunta1.svg",'0px','0px']
                        },
                        {
                            id: 'pregunta5',
                            type: 'image',
                            rect: ['546', '312px', '330px', '42px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pregunta5.svg",'0px','0px']
                        },
                        {
                            id: 'btones-presentacion-navegacion',
                            type: 'image',
                            rect: ['388px', '370px', '662px', '49px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"btones-presentacion-navegacion.svg",'0px','0px']
                        },
                        {
                            id: 'nube-mujer',
                            display: 'none',
                            type: 'image',
                            rect: ['64px', '86px', '1066px', '510px', 'auto', 'auto'],
                            clip: 'rect(0px 1066px 0px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"nube-mujer.svg",'0px','0px']
                        },
                        {
                            id: 'respuesta1',
                            display: 'none',
                            type: 'image',
                            rect: ['436px', '171px', '572px', '293px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"respuesta1.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 10, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'respuesta2',
                            type: 'image',
                            rect: ['444px', '207px', '572px', '222px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"respuesta2.svg",'0px','0px']
                        },
                        {
                            id: 'respuesta3_1',
                            type: 'image',
                            rect: ['450px', '202px', '542px', '231px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"respuesta3_1.svg",'0px','0px']
                        },
                        {
                            id: 'respuesta3_2',
                            type: 'image',
                            rect: ['464px', '168px', '530px', '361px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"respuesta3_2.svg",'0px','0px']
                        },
                        {
                            id: 'respuesta4',
                            type: 'image',
                            rect: ['438px', '190px', '565px', '256px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"respuesta4.svg",'0px','0px']
                        },
                        {
                            id: 'bton-1y2',
                            display: 'none',
                            type: 'image',
                            rect: ['672px', '109px', '78px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bton-1y2.svg",'0px','0px']
                        },
                        {
                            id: 'marcador-redondo',
                            display: 'none',
                            type: 'image',
                            rect: ['673px', '146px', '35px', '12px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-redondo.svg",'0px','0px']
                        },
                        {
                            id: 'marcador-redondoCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['713px', '146px', '35px', '12px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-redondo.svg",'0px','0px']
                        },
                        {
                            id: 'fondo-azul',
                            display: 'none',
                            type: 'image',
                            rect: ['9px', '9px', '1247px', '582px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo-azul.svg",'0px','0px','0%','0%', 'no-repeat']
                        },
                        {
                            id: 'menu-superior',
                            display: 'none',
                            type: 'image',
                            rect: ['155px', '32px', '1034px', '137px', 'auto', 'auto'],
                            clip: 'rect(0px 1034px 137px 1034px)',
                            fill: ["rgba(0,0,0,0)",im+"menu-superior.svg",'0px','0px']
                        },
                        {
                            id: 'marcador-amarillo',
                            display: 'none',
                            type: 'image',
                            rect: ['153px', '73px', '36px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-amarillo.svg",'0px','0px']
                        },
                        {
                            id: 'marcador-amarilloCopy',
                            type: 'image',
                            rect: ['270px', '73px', '36px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-amarillo.svg",'0px','0px']
                        },
                        {
                            id: 'marcador-amarilloCopy2',
                            type: 'image',
                            rect: ['400px', '73px', '36px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-amarillo.svg",'0px','0px']
                        },
                        {
                            id: 'marcador-amarilloCopy3',
                            type: 'image',
                            rect: ['530px', '73px', '36px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-amarillo.svg",'0px','0px']
                        },
                        {
                            id: 'marcador-amarilloCopy4',
                            type: 'image',
                            rect: ['660px', '73px', '36px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-amarillo.svg",'0px','0px']
                        },
                        {
                            id: 'marcador-amarilloCopy5',
                            type: 'image',
                            rect: ['788px', '73px', '36px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-amarillo.svg",'0px','0px']
                        },
                        {
                            id: 'marcador-amarilloCopy6',
                            type: 'image',
                            rect: ['917px', '73px', '36px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-amarillo.svg",'0px','0px']
                        },
                        {
                            id: 'marcador-amarilloCopy7',
                            type: 'image',
                            rect: ['1047px', '73px', '36px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-amarillo.svg",'0px','0px']
                        },
                        {
                            id: 'infogeneral',
                            symbolName: 'infogeneral',
                            display: 'none',
                            type: 'rect',
                            rect: ['97', '215px', '1140', '294', 'auto', 'auto'],
                            opacity: '0',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],['360'],[],['0','0']]
                        },
                        {
                            id: 'proposito-de-programa',
                            type: 'image',
                            rect: ['-18px', '182px', '1282px', '408px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"proposito-de-programa.svg",'0px','0px']
                        },
                        {
                            id: 'justificacion',
                            type: 'image',
                            rect: ['52px', '278px', '251px', '106px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"justificacion.svg",'0px','0px']
                        },
                        {
                            id: 'marcador-redondo-2',
                            display: 'none',
                            type: 'image',
                            rect: ['130px', '382px', '35px', '12px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-redondo-2.svg",'0px','0px']
                        },
                        {
                            id: 'marcador-redondo-2Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['171px', '382px', '35px', '12px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-redondo-2.svg",'0px','0px']
                        },
                        {
                            id: 'justificacion1',
                            symbolName: 'justificacion1',
                            type: 'rect',
                            rect: ['348', '193', '873', '371', 'auto', 'auto']
                        },
                        {
                            id: 'justificacion2',
                            symbolName: 'justificacion2',
                            type: 'rect',
                            rect: ['349', '197', '833', '371', 'auto', 'auto']
                        },
                        {
                            id: 'estrategiametodologica',
                            symbolName: 'estrategiametodologica',
                            type: 'rect',
                            rect: ['52', '211', '1188', '355', 'auto', 'auto']
                        },
                        {
                            id: 'competencia-',
                            symbolName: 'competencia-',
                            type: 'rect',
                            rect: ['84', '263', '1103', '250', 'auto', 'auto']
                        },
                        {
                            id: 'resultados',
                            symbolName: 'resultados',
                            type: 'rect',
                            rect: ['27', '215', '1194', '335', 'auto', 'auto']
                        },
                        {
                            id: 'criterio',
                            symbolName: 'criterio',
                            type: 'rect',
                            rect: ['0', '195', '1204', '376', 'auto', 'auto']
                        },
                        {
                            id: 'netiqueta2',
                            symbolName: 'netiqueta',
                            type: 'rect',
                            rect: ['41', '208', '1171', '364', 'auto', 'auto']
                        },
                        {
                            id: 'naranja2',
                            type: 'image',
                            rect: ['1119px', '334px', '41px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"naranja2.svg",'0px','0px']
                        },
                        {
                            id: 'naranja3',
                            type: 'image',
                            rect: ['1154px', '334', '41px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"naranja3.svg",'0px','0px']
                        },
                        {
                            id: 'naranja4',
                            type: 'image',
                            rect: ['1083px', '369px', '41px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"naranja4.svg",'0px','0px']
                        },
                        {
                            id: 'Rectangle3Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['1001px', '423px', '137px', '81px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['1001px', '423px', '137px', '81px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['1001px', '423px', '137px', '81px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4',
                            display: 'none',
                            type: 'rect',
                            rect: ['396px', '370px', '349px', '49px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['773px', '370px', '266px', '49px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy4',
                            display: 'none',
                            type: 'rect',
                            rect: ['1008px', '414px', '137px', '81px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy5',
                            display: 'none',
                            type: 'rect',
                            rect: ['1008px', '414px', '137px', '81px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy6',
                            display: 'none',
                            type: 'rect',
                            rect: ['1008px', '414px', '137px', '81px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle5',
                            display: 'none',
                            type: 'rect',
                            rect: ['672px', '109px', '35px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle5Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['713px', '109px', '35px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy7',
                            display: 'none',
                            type: 'rect',
                            rect: ['1008px', '414px', '137px', '81px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6',
                            display: 'none',
                            type: 'rect',
                            rect: ['153px', '73px', '36px', '36px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['267px', '73px', '36px', '36px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['397px', '73px', '36px', '36px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6Copy8',
                            display: 'none',
                            type: 'rect',
                            rect: ['129px', '343px', '36px', '36px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6Copy9',
                            display: 'none',
                            type: 'rect',
                            rect: ['170px', '343px', '36px', '36px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['526px', '73px', '36px', '36px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6Copy4',
                            display: 'none',
                            type: 'rect',
                            rect: ['656px', '73px', '36px', '36px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6Copy5',
                            display: 'none',
                            type: 'rect',
                            rect: ['783px', '73px', '36px', '36px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6Copy6',
                            display: 'none',
                            type: 'rect',
                            rect: ['914px', '73px', '36px', '36px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6Copy7',
                            display: 'none',
                            type: 'rect',
                            rect: ['1045px', '73px', '36px', '36px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle7',
                            display: 'none',
                            type: 'rect',
                            rect: ['1197px', '9px', '65px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btnDos',
                            display: 'none',
                            type: 'rect',
                            rect: ['1119px', '333px', '42px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'btnTres',
                            display: 'none',
                            type: 'rect',
                            rect: ['1155px', '333px', '42px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'btnCuatro',
                            display: 'none',
                            type: 'rect',
                            rect: ['1081px', '368px', '42px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'btnCinco',
                            display: 'none',
                            type: 'rect',
                            rect: ['1122px', '367px', '42px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'menu_opciones',
                            symbolName: 'menu_opciones',
                            display: 'none',
                            type: 'rect',
                            rect: ['1021px', '215px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'opciones',
                            symbolName: 'opciones',
                            display: 'none',
                            type: 'rect',
                            rect: ['1009px', '543px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'creditos',
                            symbolName: 'creditos',
                            display: 'none',
                            type: 'rect',
                            rect: ['-3', '-2', '1280', '600', 'auto', 'auto']
                        },
                        {
                            id: 'cc',
                            symbolName: 'cc',
                            display: 'none',
                            type: 'rect',
                            rect: ['-3', '-2', '1280', '600', 'auto', 'auto']
                        },
                        {
                            id: 'naranja5',
                            display: 'none',
                            type: 'image',
                            rect: ['1048px', '336px', '41px', '32px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"naranja5.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1271px', '596px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 34803,
                    autoPlay: true,
                    labels: {
                        "uno": 2250,
                        "pre2": 2750,
                        "pre3": 3750,
                        "pre4": 4750,
                        "pre5": 5750,
                        "pre51": 6250,
                        "res1": 6750,
                        "res2": 8441,
                        "res3": 9382,
                        "res32": 10323,
                        "res4": 11264,
                        "informacion": 12205,
                        "info": 13500,
                        "info1": 14427,
                        "just": 15354,
                        "just1": 16281,
                        "just2": 17208,
                        "est": 18135,
                        "comp": 19062,
                        "res": 19989,
                        "cri": 20916,
                        "net": 21843
                    },
                    data: [
                        [
                            "eid340",
                            "display",
                            9750,
                            0,
                            "linear",
                            "${Rectangle5Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid341",
                            "display",
                            11124,
                            0,
                            "linear",
                            "${Rectangle5Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid120",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${infogeneral}",
                            'none',
                            'block'
                        ],
                        [
                            "eid121",
                            "display",
                            14296,
                            0,
                            "linear",
                            "${infogeneral}",
                            'block',
                            'none'
                        ],
                        [
                            "eid126",
                            "display",
                            14427,
                            0,
                            "linear",
                            "${proposito-de-programa}",
                            'none',
                            'block'
                        ],
                        [
                            "eid127",
                            "display",
                            15223,
                            0,
                            "linear",
                            "${proposito-de-programa}",
                            'block',
                            'none'
                        ],
                        [
                            "eid348",
                            "display",
                            13479,
                            0,
                            "linear",
                            "${Rectangle6Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid302",
                            "display",
                            18135,
                            0,
                            "linear",
                            "${marcador-amarilloCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid303",
                            "display",
                            18918,
                            0,
                            "linear",
                            "${marcador-amarilloCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid147",
                            "rotateZ",
                            18135,
                            500,
                            "linear",
                            "${estrategiametodologica}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid154",
                            "scaleX",
                            19062,
                            500,
                            "linear",
                            "${competencia-}",
                            '0',
                            '1'
                        ],
                        [
                            "eid409",
                            "display",
                            2561,
                            0,
                            "linear",
                            "${btnCinco}",
                            'none',
                            'block'
                        ],
                        [
                            "eid410",
                            "display",
                            4773,
                            0,
                            "linear",
                            "${btnCinco}",
                            'block',
                            'none'
                        ],
                        [
                            "eid384",
                            "scaleY",
                            3165,
                            190,
                            "linear",
                            "${naranja2}",
                            '1.41139',
                            '1'
                        ],
                        [
                            "eid336",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${Rectangle3Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid337",
                            "display",
                            12071,
                            0,
                            "linear",
                            "${Rectangle3Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid360",
                            "display",
                            13491,
                            0,
                            "linear",
                            "${Rectangle7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid149",
                            "opacity",
                            18135,
                            500,
                            "linear",
                            "${estrategiametodologica}",
                            '0',
                            '1'
                        ],
                        [
                            "eid338",
                            "display",
                            9750,
                            0,
                            "linear",
                            "${Rectangle5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid339",
                            "display",
                            11124,
                            0,
                            "linear",
                            "${Rectangle5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid60",
                            "scaleY",
                            5750,
                            500,
                            "easeInBack",
                            "${pregunta5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid388",
                            "scaleY",
                            4165,
                            190,
                            "linear",
                            "${naranja3}",
                            '1.41139',
                            '1'
                        ],
                        [
                            "eid94",
                            "display",
                            9382,
                            0,
                            "easeInBack",
                            "${bton-1y2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid95",
                            "display",
                            11114,
                            0,
                            "easeInBack",
                            "${bton-1y2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid387",
                            "scaleX",
                            4165,
                            190,
                            "linear",
                            "${naranja3}",
                            '1.41139',
                            '1'
                        ],
                        [
                            "eid363",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${opciones}",
                            'none',
                            'block'
                        ],
                        [
                            "eid146",
                            "scaleY",
                            18135,
                            500,
                            "linear",
                            "${estrategiametodologica}",
                            '0',
                            '1'
                        ],
                        [
                            "eid346",
                            "display",
                            13479,
                            0,
                            "linear",
                            "${Rectangle6Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid142",
                            "scaleX",
                            17208,
                            500,
                            "linear",
                            "${justificacion2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid391",
                            "scaleX",
                            5165,
                            190,
                            "linear",
                            "${naranja4}",
                            '1.41139',
                            '1'
                        ],
                        [
                            "eid296",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${marcador-amarillo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid297",
                            "display",
                            14283,
                            0,
                            "linear",
                            "${marcador-amarillo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid67",
                            "filter.blur",
                            7500,
                            500,
                            "easeInBack",
                            "${respuesta1}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid129",
                            "rotateZ",
                            15354,
                            500,
                            "linear",
                            "${justificacion}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid132",
                            "display",
                            15354,
                            0,
                            "linear",
                            "${justificacion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid133",
                            "display",
                            18135,
                            0,
                            "linear",
                            "${justificacion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid137",
                            "opacity",
                            16281,
                            500,
                            "linear",
                            "${justificacion1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid98",
                            "display",
                            10323,
                            0,
                            "easeInBack",
                            "${marcador-redondoCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            11095,
                            0,
                            "easeInBack",
                            "${marcador-redondoCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid356",
                            "display",
                            16281,
                            0,
                            "linear",
                            "${Rectangle6Copy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid357",
                            "display",
                            18048,
                            0,
                            "linear",
                            "${Rectangle6Copy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid90",
                            "scaleY",
                            5750,
                            500,
                            "easeInBack",
                            "${btones-presentacion-navegacion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid167",
                            "opacity",
                            20916,
                            500,
                            "linear",
                            "${criterio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid115",
                            "scaleX",
                            13500,
                            500,
                            "linear",
                            "${infogeneral}",
                            '0',
                            '1'
                        ],
                        [
                            "eid123",
                            "rotateZ",
                            14427,
                            500,
                            "linear",
                            "${proposito-de-programa}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid141",
                            "rotateZ",
                            17208,
                            500,
                            "linear",
                            "${justificacion2}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid165",
                            "rotateZ",
                            20916,
                            500,
                            "linear",
                            "${criterio}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid170",
                            "scaleY",
                            21866,
                            500,
                            "linear",
                            "${netiqueta2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid153",
                            "rotateZ",
                            19062,
                            500,
                            "linear",
                            "${competencia-}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid407",
                            "display",
                            2561,
                            0,
                            "linear",
                            "${btnCuatro}",
                            'none',
                            'block'
                        ],
                        [
                            "eid408",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${btnCuatro}",
                            'block',
                            'none'
                        ],
                        [
                            "eid354",
                            "display",
                            16281,
                            0,
                            "linear",
                            "${Rectangle6Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid355",
                            "display",
                            18048,
                            0,
                            "linear",
                            "${Rectangle6Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid322",
                            "display",
                            6103,
                            0,
                            "linear",
                            "${Rectangle4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid323",
                            "display",
                            6543,
                            0,
                            "linear",
                            "${Rectangle4Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid71",
                            "filter.blur",
                            8441,
                            500,
                            "easeInBack",
                            "${respuesta2}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid350",
                            "display",
                            13479,
                            0,
                            "linear",
                            "${Rectangle6Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid125",
                            "opacity",
                            14427,
                            500,
                            "linear",
                            "${proposito-de-programa}",
                            '0',
                            '1'
                        ],
                        [
                            "eid300",
                            "display",
                            15354,
                            0,
                            "linear",
                            "${marcador-amarilloCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid301",
                            "display",
                            18004,
                            0,
                            "linear",
                            "${marcador-amarilloCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid77",
                            "filter.blur",
                            10323,
                            500,
                            "easeInBack",
                            "${respuesta3_2}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid6",
                            "clip",
                            750,
                            1000,
                            "linear",
                            "${nube-hombre}",
                            [0,0,504,0],
                            [0,1111,504,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid403",
                            "display",
                            2561,
                            0,
                            "linear",
                            "${btnDos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid404",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${btnDos}",
                            'block',
                            'none'
                        ],
                        [
                            "eid113",
                            "rotateZ",
                            13500,
                            500,
                            "linear",
                            "${infogeneral}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid59",
                            "scaleX",
                            5750,
                            500,
                            "easeInBack",
                            "${pregunta5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid308",
                            "display",
                            20916,
                            0,
                            "linear",
                            "${marcador-amarilloCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid309",
                            "display",
                            21699,
                            0,
                            "linear",
                            "${marcador-amarilloCopy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid158",
                            "scaleY",
                            19989,
                            500,
                            "linear",
                            "${resultados}",
                            '0',
                            '1'
                        ],
                        [
                            "eid316",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${Rectangle3Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid317",
                            "display",
                            4571,
                            0,
                            "linear",
                            "${Rectangle3Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid122",
                            "scaleY",
                            14427,
                            500,
                            "linear",
                            "${proposito-de-programa}",
                            '0',
                            '1'
                        ],
                        [
                            "eid477",
                            "scaleY",
                            1750,
                            500,
                            "easeInBack",
                            "${pregunta1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid159",
                            "rotateZ",
                            19989,
                            500,
                            "linear",
                            "${resultados}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid334",
                            "display",
                            9750,
                            0,
                            "linear",
                            "${Rectangle3Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid335",
                            "display",
                            11095,
                            0,
                            "linear",
                            "${Rectangle3Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid96",
                            "display",
                            9382,
                            0,
                            "easeInBack",
                            "${marcador-redondo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid97",
                            "display",
                            10154,
                            0,
                            "easeInBack",
                            "${marcador-redondo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid162",
                            "display",
                            19989,
                            0,
                            "linear",
                            "${resultados}",
                            'none',
                            'block'
                        ],
                        [
                            "eid163",
                            "display",
                            20785,
                            0,
                            "linear",
                            "${resultados}",
                            'block',
                            'none'
                        ],
                        [
                            "eid304",
                            "display",
                            19062,
                            0,
                            "linear",
                            "${marcador-amarilloCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid305",
                            "display",
                            19845,
                            0,
                            "linear",
                            "${marcador-amarilloCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid349",
                            "display",
                            13479,
                            0,
                            "linear",
                            "${Rectangle6Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid80",
                            "filter.blur",
                            11264,
                            500,
                            "easeInBack",
                            "${respuesta4}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid4",
                            "display",
                            750,
                            0,
                            "linear",
                            "${nube-hombre}",
                            'none',
                            'block'
                        ],
                        [
                            "eid33",
                            "display",
                            5571,
                            0,
                            "linear",
                            "${nube-hombre}",
                            'block',
                            'none'
                        ],
                        [
                            "eid144",
                            "display",
                            17208,
                            0,
                            "linear",
                            "${justificacion2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid145",
                            "display",
                            18004,
                            0,
                            "linear",
                            "${justificacion2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid89",
                            "scaleX",
                            5750,
                            500,
                            "easeInBack",
                            "${btones-presentacion-navegacion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid385",
                            "display",
                            3165,
                            0,
                            "linear",
                            "${naranja2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid386",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${naranja2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            16281,
                            500,
                            "linear",
                            "${justificacion1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid135",
                            "rotateZ",
                            16281,
                            500,
                            "linear",
                            "${justificacion1}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid332",
                            "display",
                            8750,
                            0,
                            "linear",
                            "${Rectangle3Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid333",
                            "display",
                            9321,
                            0,
                            "linear",
                            "${Rectangle3Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid150",
                            "display",
                            18135,
                            0,
                            "linear",
                            "${estrategiametodologica}",
                            'none',
                            'block'
                        ],
                        [
                            "eid151",
                            "display",
                            18931,
                            0,
                            "linear",
                            "${estrategiametodologica}",
                            'block',
                            'none'
                        ],
                        [
                            "eid164",
                            "scaleY",
                            20916,
                            500,
                            "linear",
                            "${criterio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid362",
                            "display",
                            0,
                            0,
                            "linear",
                            "${menu_opciones}",
                            'none',
                            'none'
                        ],
                        [
                            "eid310",
                            "display",
                            21843,
                            0,
                            "linear",
                            "${marcador-amarilloCopy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid311",
                            "display",
                            22626,
                            0,
                            "linear",
                            "${marcador-amarilloCopy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid156",
                            "display",
                            19062,
                            0,
                            "linear",
                            "${competencia-}",
                            'none',
                            'block'
                        ],
                        [
                            "eid157",
                            "display",
                            19858,
                            0,
                            "linear",
                            "${competencia-}",
                            'block',
                            'none'
                        ],
                        [
                            "eid161",
                            "opacity",
                            19989,
                            500,
                            "linear",
                            "${resultados}",
                            '0',
                            '1'
                        ],
                        [
                            "eid128",
                            "scaleY",
                            15354,
                            500,
                            "linear",
                            "${justificacion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid318",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${Rectangle3Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid319",
                            "display",
                            5571,
                            0,
                            "linear",
                            "${Rectangle3Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid298",
                            "display",
                            14427,
                            0,
                            "linear",
                            "${marcador-amarilloCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid299",
                            "display",
                            15210,
                            0,
                            "linear",
                            "${marcador-amarilloCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid63",
                            "display",
                            7500,
                            0,
                            "easeInBack",
                            "${respuesta1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid68",
                            "display",
                            8272,
                            0,
                            "easeInBack",
                            "${respuesta1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid173",
                            "opacity",
                            21866,
                            500,
                            "linear",
                            "${netiqueta2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid143",
                            "opacity",
                            17208,
                            500,
                            "linear",
                            "${justificacion2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "background-size",
                            12191,
                            809,
                            "easeInBack",
                            "${fondo-azul}",
                            [0,0],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid392",
                            "scaleY",
                            5165,
                            190,
                            "linear",
                            "${naranja4}",
                            '1.41139',
                            '1'
                        ],
                        [
                            "eid405",
                            "display",
                            2561,
                            0,
                            "linear",
                            "${btnTres}",
                            'none',
                            'block'
                        ],
                        [
                            "eid406",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${btnTres}",
                            'block',
                            'none'
                        ],
                        [
                            "eid345",
                            "display",
                            13479,
                            0,
                            "linear",
                            "${Rectangle6Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid155",
                            "opacity",
                            19062,
                            500,
                            "linear",
                            "${competencia-}",
                            '0',
                            '1'
                        ],
                        [
                            "eid505",
                            "scaleX",
                            2250,
                            174,
                            "easeOutBack",
                            "${naranja5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid389",
                            "display",
                            4165,
                            0,
                            "linear",
                            "${naranja3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid390",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${naranja3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid314",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid315",
                            "display",
                            3571,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid140",
                            "scaleY",
                            17208,
                            500,
                            "linear",
                            "${justificacion2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid294",
                            "display",
                            17208,
                            0,
                            "linear",
                            "${marcador-redondo-2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid295",
                            "display",
                            18055,
                            0,
                            "linear",
                            "${marcador-redondo-2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            10323,
                            0,
                            "easeInBack",
                            "${respuesta3_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid76",
                            "display",
                            11095,
                            0,
                            "easeInBack",
                            "${respuesta3_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${fondo}",
                            '0.0085470085470085',
                            '1'
                        ],
                        [
                            "eid69",
                            "display",
                            8441,
                            0,
                            "easeInBack",
                            "${respuesta2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid70",
                            "display",
                            9213,
                            0,
                            "easeInBack",
                            "${respuesta2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid174",
                            "display",
                            21866,
                            0,
                            "linear",
                            "${netiqueta2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid175",
                            "display",
                            22662,
                            0,
                            "linear",
                            "${netiqueta2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid172",
                            "scaleX",
                            21866,
                            500,
                            "linear",
                            "${netiqueta2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid347",
                            "display",
                            13479,
                            0,
                            "linear",
                            "${Rectangle6Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid136",
                            "scaleX",
                            16281,
                            500,
                            "linear",
                            "${justificacion1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid108",
                            "display",
                            13000,
                            0,
                            "easeInBack",
                            "${menu-superior}",
                            'none',
                            'block'
                        ],
                        [
                            "eid393",
                            "display",
                            5165,
                            0,
                            "linear",
                            "${naranja4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid394",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${naranja4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid61",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${pregunta5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid62",
                            "display",
                            6561,
                            0,
                            "easeInBack",
                            "${pregunta5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid119",
                            "opacity",
                            13500,
                            500,
                            "linear",
                            "${infogeneral}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "opacity",
                            15354,
                            500,
                            "linear",
                            "${justificacion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid166",
                            "scaleX",
                            20916,
                            500,
                            "linear",
                            "${criterio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid476",
                            "scaleX",
                            1750,
                            500,
                            "easeInBack",
                            "${pregunta1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "scaleX",
                            15354,
                            500,
                            "linear",
                            "${justificacion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid107",
                            "clip",
                            13000,
                            500,
                            "easeInBack",
                            "${menu-superior}",
                            [0,1034,137,1034],
                            [0,1034,137,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid39",
                            "clip",
                            6750,
                            750,
                            "easeInBack",
                            "${nube-mujer}",
                            [0,1066,0,0],
                            [0,1066,510,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid507",
                            "scaleY",
                            2250,
                            174,
                            "easeOutBack",
                            "${naranja5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid74",
                            "filter.blur",
                            9382,
                            500,
                            "easeInBack",
                            "${respuesta3_1}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid37",
                            "display",
                            6750,
                            0,
                            "easeInBack",
                            "${nube-mujer}",
                            'none',
                            'block'
                        ],
                        [
                            "eid93",
                            "display",
                            12044,
                            0,
                            "easeInBack",
                            "${nube-mujer}",
                            'block',
                            'none'
                        ],
                        [
                            "eid344",
                            "display",
                            13479,
                            0,
                            "linear",
                            "${Rectangle6Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid152",
                            "scaleY",
                            19062,
                            500,
                            "linear",
                            "${competencia-}",
                            '0',
                            '1'
                        ],
                        [
                            "eid148",
                            "scaleX",
                            18135,
                            500,
                            "linear",
                            "${estrategiametodologica}",
                            '0',
                            '1'
                        ],
                        [
                            "eid124",
                            "scaleX",
                            14427,
                            500,
                            "linear",
                            "${proposito-de-programa}",
                            '0',
                            '1'
                        ],
                        [
                            "eid160",
                            "scaleX",
                            19989,
                            500,
                            "linear",
                            "${resultados}",
                            '0',
                            '1'
                        ],
                        [
                            "eid171",
                            "rotateZ",
                            21866,
                            500,
                            "linear",
                            "${netiqueta2}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid103",
                            "display",
                            12191,
                            0,
                            "easeInBack",
                            "${fondo-azul}",
                            'none',
                            'block'
                        ],
                        [
                            "eid328",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${Rectangle3Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid329",
                            "display",
                            8321,
                            0,
                            "linear",
                            "${Rectangle3Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid292",
                            "display",
                            16281,
                            0,
                            "linear",
                            "${marcador-redondo-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid293",
                            "display",
                            17123,
                            0,
                            "linear",
                            "${marcador-redondo-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid138",
                            "display",
                            16281,
                            0,
                            "linear",
                            "${justificacion1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid139",
                            "display",
                            17077,
                            0,
                            "linear",
                            "${justificacion1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid72",
                            "display",
                            9382,
                            0,
                            "easeInBack",
                            "${respuesta3_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid73",
                            "display",
                            10154,
                            0,
                            "easeInBack",
                            "${respuesta3_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid478",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${pregunta1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid479",
                            "display",
                            2561,
                            0,
                            "easeInBack",
                            "${pregunta1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid91",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${btones-presentacion-navegacion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid92",
                            "display",
                            6561,
                            0,
                            "easeInBack",
                            "${btones-presentacion-navegacion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid306",
                            "display",
                            19989,
                            0,
                            "linear",
                            "${marcador-amarilloCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid307",
                            "display",
                            20772,
                            0,
                            "linear",
                            "${marcador-amarilloCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid78",
                            "display",
                            11264,
                            0,
                            "easeInBack",
                            "${respuesta4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid79",
                            "display",
                            12036,
                            0,
                            "easeInBack",
                            "${respuesta4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid503",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${naranja5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid508",
                            "display",
                            2504,
                            0,
                            "easeOutBack",
                            "${naranja5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid320",
                            "display",
                            6103,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid321",
                            "display",
                            6543,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid35",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${nube-hombre1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid36",
                            "display",
                            6561,
                            0,
                            "linear",
                            "${nube-hombre1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid383",
                            "scaleX",
                            3165,
                            190,
                            "linear",
                            "${naranja2}",
                            '1.41139',
                            '1'
                        ],
                        [
                            "eid117",
                            "scaleY",
                            13500,
                            500,
                            "linear",
                            "${infogeneral}",
                            '0',
                            '1'
                        ],
                        [
                            "eid168",
                            "display",
                            20916,
                            0,
                            "linear",
                            "${criterio}",
                            'none',
                            'block'
                        ],
                        [
                            "eid169",
                            "display",
                            21712,
                            0,
                            "linear",
                            "${criterio}",
                            'block',
                            'none'
                        ],
                        [
                            "eid343",
                            "display",
                            13479,
                            0,
                            "linear",
                            "${Rectangle6}",
                            'none',
                            'block'
                        ],
                            [ "eid372", "trigger", 20916, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${criterio}', [0] ] ],
                            [ "eid373", "trigger", 21843, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${netiqueta2}', [0] ] ]
                    ]
                }
            },
            "pregunta5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['19px', '0px', '643px', '140px', 'auto', 'auto'],
                            id: 'pregunta4Copy',
                            text: '<p style=\"margin: 0px;\">​Entonces ¡Empecemos!\n</p>',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(20,122,193,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            id: 'btones-presentacion-navegacion',
                            rect: ['0px', '63px', '662px', '49px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btones-presentacion-navegacion.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '662px', '140px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "infogeneral": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1071px', '258px', 'auto', 'auto'],
                            id: 'imformacion-general',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/imformacion-general.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">33130182​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['689px', '5px', '375px', '36px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [19, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text3Copy',
                            text: '<p style=\"margin: 0px;\">Atención con Enfoque Psicosocial a Víctimas del Conflicto Armado.​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['614px', '100px', '526px', '36px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [19, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text3Copy2',
                            text: '<p style=\"margin: 0px;\">El desarrollo del programa tiene una duración de 40 horas.&nbsp;</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['614px', '191px', '526px', '36px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [19, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text3Copy3',
                            text: '<p style=\"margin: 0px;\">Personal de salud​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['614px', '258px', '526px', '36px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1140px', '294px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "justificacion1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'justify',
                            id: 'Text4',
                            text: '<p style=\"margin: 0px;\">​La Política Nacional de Asistencia, Atención y Reparación a las Víctimas del Conflicto Armado en Colombia, exige una adecuación institucional a todos los sectores de la estructura estatal del país, e impone el reto fundamental a las entidades de comprender e integrar el marco ético de la reparación, como orientador de sus políticas y acciones. De igual manera, insta a la integración del enfoque psicosocial como un eje estructurador de las acciones reparadoras hacia las personas que han sido víctimas en el marco del conflicto armado en Colombia.&nbsp;\n\nEn esa medida, el Ministerio de Salud y Protección Social en cumplimiento de lo dispuesto en el artículo 2.2.7.5.7 del Decreto 1084 de 2015, ha expedido la Resolución No. 1166 de 2018 que tiene como objeto <span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 100; font-style: normal; text-decoration: none; font-size: 19px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\"></span></p>',
                            textStyle: ['', '', '22px', '', 'none'],
                            rect: ['0px', '0px', '416px', '371px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'justify',
                            id: 'Text5',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 17px;\">adoptar los “lineamientos para el talento humano que orienta y atiende a las víctimas del conflicto armado” y contiene una serie de disposiciones para que las entidades que conforman el Sistema Nacional de Atención y Reparación Integral a las Víctimas – SNARIV diseñen e implementen planes, programas, estrategias o proyectos institucionales de formación y cuidado emocional.\n\nLa presente propuesta de formación continua responde entonces a lo estipulado por el Ministerio de Salud y Protección Social en dicho acto administrativo, en la medida en que busca aunar esfuerzos para fortalecer competencias en el talento humano del SNARIV tendientes a la dignificación y reconocimiento de las víctimas, visto en el trato y atención que “debe ser siempre respetuoso de su dignidad, solidario,&nbsp;</span></p><p style=\"margin: 0px;\"></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['450px', '0px', '423px', '371px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '873px', '371px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "justificacion2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'justify',
                            id: 'Text6',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 17px;\">comprensivo y tolerante, teniendo en cuenta el enfoque diferencial y las razones por las cuales la persona se ha acercado a solicitar ayuda en la orientación frente a la reparación integral.”   Todo ello, con el objetivo de contribuir a que cada encuentro que tiene una persona víctima con un/a servidor/a público/a, sea reparador en sí mismo, es decir, que la víctima encuentre un/a interlocutor/a que comprenda su situación emocional y sus necesidades, reconozca sus recursos y que la oriente en los mecanismos para el ejercicio de sus derechos a la verdad, justicia, reparación y garantías de no repetición.&nbsp;&nbsp;</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['0px', '0px', '380px', '371px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '833px', '371px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "estrategiametodologica": {
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
                            id: 'estrategia-metodologica',
                            rect: ['0px', '13px', '1188px', '309px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/estrategia-metodologica.svg', '0px', '0px']
                        },
                        {
                            rect: ['276px', '0px', '509px', '355px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'estra',
                            text: '<p style=\"margin: 0px;\">​Centrada en la construcción de autonomía para garantizar la calidad de la formación en el marco de la formación por competencias, el aprendizaje por proyectos y el  uso de  técnicas didácticas activas que estimulan el pensamiento para la resolución de problemas simulados y reales; soportadas en el utilización de las tecnologías de la información y la comunicación, integradas, en ambientes abiertos y pluritecnológicos, que en todo caso recrean el contexto productivo y vinculan al aprendiz con la realidad cotidiana y el desarrollo de las competencias.&nbsp;</p><p style=\"margin: 0px;\">\n\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Igualmente, debe estimular de manera permanente la autocrítica y la reflexión del aprendiz sobre el que hacer y los resultados de aprendizaje que logra a través de la vinculación activa de las cuatro fuentes de información para la construcción de conocimiento:</p>',
                            align: 'justify',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1188px', '355px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "competencia-": {
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
                            id: 'competencia',
                            rect: ['0px', '0px', '1103px', '175px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/competencia.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['701px', '40px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\"><span style=\"font-size: 74px; color: rgb(255, 255, 255);\">230101208</span></p>',
                            id: 'Text8',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [19, 'px'], 'rgba(242,0,255,1.00)', '100', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['417px', '158px', '681px', '92px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​Cuidar a la persona en la recuperación de los patrones funcionales según delegación, ciclo del proceso vital y protocolos institucionales vigentes.<span style=\"font-size: 28px; font-weight: 400; color: rgb(255, 255, 255);\"></span></p>',
                            id: 'Text9',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '100', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1103px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "resultados": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'redultados-aprendizaje',
                            type: 'image',
                            rect: ['0px', '56px', '487px', '222px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/redultados-aprendizaje.svg', '0px', '0px']
                        },
                        {
                            rect: ['543px', '7px', '630px', '328px', 'auto', 'auto'],
                            textStyle: ['', '', '17px', '', ''],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​1.Comprender el ámbito de aplicación de los Derechos Humanos, Derecho Internacional Humanitario en Colombia y mecanismos para el reconocimiento y ejercicio de los derechos de las víctimas del conflicto armado en el marco de la política pública de Atención, asistencia y reparación.&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">2. Emplear recomendaciones para la atención a víctimas del conflicto armado teniendo en cuenta los enfoques psicosocial, diferencial, acción sin daño y curso de vida.&nbsp;&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">3. Fomentar el cuidado emocional mediante acciones de bienestar y protección de la salud en el ámbito laboral de talento humano que atiende y orienta a víctimas teniendo en cuenta lineamientos establecidos.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">&nbsp;4. Adoptar en el ejercicio laboral herramientas para la atención con enfoque psicosocial teniendo en cuenta principios de humanización, dignificación y reconocimiento de las víctimas del conflicto armado.&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><br></p><p style=\"margin: 0px;\">​</p>',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1194px', '335px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "criterios": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'justify',
                            id: 'Text11',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px;\">Para aprobar el programa de formación: </span><span style=\"font-weight: 700;\">Atención con Enfoque Psicosocial a Víctimas del Conflicto Armado</span><span style=\"font-size: 16px;\">, el aprendiz debe demostrar el logro de cada uno de los resultados de aprendizaje que desarrollará mediante las actividades de aprendizaje propuestas, y presentar las evidencias que le plantea el programa; cada evidencia solicitada tiene una finalidad y unos criterios de evaluación, respecto de los cuales el instructor debe emitir un juicio de aprobación o no aprobación.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['36px', '157px', '454px', '212px', 'auto', 'auto']
                        },
                        {
                            rect: ['0', '0', '1204px', '376px', 'auto', 'auto'],
                            id: 'criterios-evaluacion_1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/criterios-evaluacion_1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1204px', '376px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "criterio": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'criterios',
                            symbolName: 'criterios',
                            rect: ['0px', '0px', '1204', '376', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            id: 'criterio1',
                            text: '<p style=\"margin: 0px; text-align: center;\">Identifica el ámbito de aplicación de los derechos humano y derecho internacional humanitario en el marco del conflicto armado en Colombia.​</p>',
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            transform: [[], [], [], ['1', '0']],
                            display: 'block',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['594px', '123px', '558px', '195px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'criterio2',
                            text: '<p style=\"margin: 0px; text-align: center;\">Reconoce las medidas de atención, asistencias y reparación integral a las víctimas en el marco de la política pública.​</p>',
                            align: 'left',
                            rect: ['594px', '161px', '558px', '157px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'criterio3',
                            text: '<p style=\"margin: 0px; text-align: center;\">Reconoce posibilidades de respuesta frente a las necesidades de atención de las víctimas en el marco del PAPSIVI.​</p>',
                            align: 'left',
                            rect: ['594px', '165px', '558px', '153px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'criterio4',
                            text: '<p style=\"margin: 0px;\">Utiliza los enfoques psicosocial, diferencial, acción sin daño y curso de vida en la atención asistencia y reparación integral a las  personas víctimas del conflicto armado según lineamientos vigentes.​</p>',
                            align: 'center',
                            rect: ['594px', '123px', '558px', '195px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'criterio5',
                            text: '<p style=\"margin: 0px; text-align: center;\">Determina fuentes y manifestaciones de desgaste emocional y estrés laboral en la atención y orientación a víctimas según categorías definidas.&nbsp;</p>',
                            align: 'left',
                            rect: ['594px', '123px', '558px', '195px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'criterio6',
                            text: '<p style=\"margin: 0px;\">Diseña acciones de prevención y atención del desgaste emocional y estrés laboral, de acuerdo a estrategias individuales, grupales e institucionales.​</p>',
                            align: 'center',
                            rect: ['594px', '145px', '558px', '173px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'criterio7',
                            text: '<p style=\"margin: 0px;\">Realiza atención  con enfoque psicosocial a personas víctimas del conflicto armado teniendo en cuenta las herramientas propuestas.​</p>',
                            align: 'center',
                            rect: ['594px', '140px', '558px', '178px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'criterio8',
                            text: '<p style=\"margin: 0px;\">Implementa el proceso de certificación y registro de discapacidad en casos reales de acuerdo con el procedimiento establecido por el Ministerio de Salud y marco normativo vigente​.</p>',
                            align: 'left',
                            rect: ['594px', '123px', '558px', '195px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'criterio9',
                            text: '<p style=\"margin: 0px;\">Realiza la valoración de las deficiencias en las funciones y estructuras corporales conforme a las reglas de clasificación y codificación de la CIF​.</p>',
                            align: 'left',
                            rect: ['594px', '123px', '558px', '195px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'criterio10',
                            text: '<p style=\"margin: 0px;\">Desarrolla la valoración de las limitaciones en las actividades  y las restricciones en la participación mediante el instrumento establecido en la Resolución 583 de 2018​.</p>',
                            align: 'left',
                            rect: ['594px', '123px', '558px', '195px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'criterio11',
                            text: '<p style=\"margin: 0px;\">Emite certificados de discapacidad que cumplen con los parámetros establecidos en la normatividad vigente​.</p>',
                            align: 'left',
                            rect: ['594px', '123px', '558px', '195px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'criterio12',
                            text: '<p style=\"margin: 0px;\">Realiza el reporte de información al RLCPD según el procedimiento establecido​.</p>',
                            align: 'left',
                            rect: ['594px', '123px', '558px', '195px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'criterio13',
                            text: '<p style=\"margin: 0px;\">Identifica las señales de alerta generadas por el  aplicativo web del RLCPD ante errores del usuario y sabe cómo corregir dichos errores.​</p>',
                            align: 'left',
                            rect: ['594px', '123px', '558px', '195px', 'auto', 'auto']
                        },
                        {
                            rect: ['524px', '55px', '56px', '16px', 'auto', 'auto'],
                            id: 'marcador-redondo-3',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-redondo-3.svg', '0px', '0px']
                        },
                        {
                            rect: ['576px', '55px', '56px', '16px', 'auto', 'auto'],
                            id: 'marcador-redondo-3Copy',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-redondo-3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-redondo-3Copy2',
                            rect: ['629px', '55px', '56px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-redondo-3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-redondo-3Copy3',
                            rect: ['681px', '55px', '56px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-redondo-3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-redondo-3Copy4',
                            rect: ['735px', '55px', '56px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-redondo-3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-redondo-3Copy5',
                            rect: ['788px', '55px', '56px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-redondo-3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-redondo-3Copy6',
                            rect: ['840px', '55px', '56px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-redondo-3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-redondo-3Copy7',
                            rect: ['893px', '55px', '56px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-redondo-3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-redondo-3Copy8',
                            rect: ['946px', '55px', '56px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-redondo-3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-redondo-3Copy9',
                            rect: ['997px', '55px', '56px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-redondo-3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-redondo-3Copy10',
                            rect: ['1050px', '55px', '56px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-redondo-3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-redondo-3Copy11',
                            rect: ['1103px', '55px', '56px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-redondo-3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-redondo-3Copy12',
                            rect: ['1154px', '55px', '56px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-redondo-3.svg', '0px', '0px']
                        },
                        {
                            rect: ['524px', '13px', '56px', '50px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['580px', '13px', '46px', '50px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['632px', '13px', '46px', '50px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['686px', '13px', '46px', '50px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'RectangleCopy3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['739px', '13px', '46px', '50px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'RectangleCopy4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['791px', '13px', '46px', '50px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'RectangleCopy5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['843px', '13px', '46px', '50px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'RectangleCopy6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1204px', '376px']
                        }
                    }
                },
                timeline: {
                    duration: 13887,
                    autoPlay: false,
                    labels: {
                        "1": 0,
                        "2": 1077,
                        "3": 2154,
                        "4": 3231,
                        "5": 4308,
                        "6": 5385,
                        "7": 6462,
                        "8": 7539,
                        "9": 8616,
                        "10": 9693,
                        "11": 10770,
                        "12": 11847,
                        "13": 12924
                    },
                    data: [
                        [
                            "eid193",
                            "display",
                            4308,
                            0,
                            "linear",
                            "${criterio5}",
                            'block',
                            'block'
                        ],
                        [
                            "eid194",
                            "display",
                            5238,
                            0,
                            "linear",
                            "${criterio5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid183",
                            "scaleY",
                            1077,
                            500,
                            "linear",
                            "${criterio2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid502",
                            "height",
                            7213,
                            0,
                            "easeInBack",
                            "${criterio7}",
                            '178px',
                            '178px'
                        ],
                        [
                            "eid230",
                            "display",
                            4308,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid229",
                            "display",
                            5271,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid184",
                            "display",
                            1077,
                            0,
                            "linear",
                            "${criterio2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid185",
                            "display",
                            2007,
                            0,
                            "linear",
                            "${criterio2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid219",
                            "display",
                            0,
                            0,
                            "linear",
                            "${marcador-redondo-3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid220",
                            "display",
                            897,
                            0,
                            "linear",
                            "${marcador-redondo-3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid207",
                            "scaleY",
                            9693,
                            500,
                            "linear",
                            "${criterio10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid211",
                            "display",
                            10770,
                            0,
                            "linear",
                            "${criterio11}",
                            'block',
                            'block'
                        ],
                        [
                            "eid212",
                            "display",
                            11700,
                            0,
                            "linear",
                            "${criterio11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid232",
                            "display",
                            5385,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid231",
                            "display",
                            6348,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid199",
                            "display",
                            6462,
                            0,
                            "linear",
                            "${criterio7}",
                            'block',
                            'block'
                        ],
                        [
                            "eid200",
                            "display",
                            7392,
                            0,
                            "linear",
                            "${criterio7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid246",
                            "display",
                            12924,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid245",
                            "display",
                            13887,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid180",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${criterio1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid205",
                            "display",
                            8616,
                            0,
                            "linear",
                            "${criterio9}",
                            'block',
                            'block'
                        ],
                        [
                            "eid206",
                            "display",
                            9546,
                            0,
                            "linear",
                            "${criterio9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid204",
                            "scaleY",
                            8616,
                            500,
                            "linear",
                            "${criterio9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid240",
                            "display",
                            9693,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid239",
                            "display",
                            10656,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid198",
                            "scaleY",
                            6462,
                            500,
                            "linear",
                            "${criterio7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid208",
                            "display",
                            9693,
                            0,
                            "linear",
                            "${criterio10}",
                            'block',
                            'block'
                        ],
                        [
                            "eid209",
                            "display",
                            10623,
                            0,
                            "linear",
                            "${criterio10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid214",
                            "display",
                            11847,
                            0,
                            "linear",
                            "${criterio12}",
                            'block',
                            'block'
                        ],
                        [
                            "eid215",
                            "display",
                            12777,
                            0,
                            "linear",
                            "${criterio12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid181",
                            "display",
                            0,
                            0,
                            "linear",
                            "${criterio1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid182",
                            "display",
                            930,
                            0,
                            "linear",
                            "${criterio1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid495",
                            "height",
                            1828,
                            0,
                            "easeInBack",
                            "${criterio2}",
                            '157px',
                            '157px'
                        ],
                        [
                            "eid217",
                            "display",
                            12924,
                            0,
                            "linear",
                            "${criterio13}",
                            'block',
                            'block'
                        ],
                        [
                            "eid218",
                            "display",
                            13854,
                            0,
                            "linear",
                            "${criterio13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid192",
                            "scaleY",
                            4308,
                            500,
                            "linear",
                            "${criterio5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid190",
                            "display",
                            3231,
                            0,
                            "linear",
                            "${criterio4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid191",
                            "display",
                            4161,
                            0,
                            "linear",
                            "${criterio4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid202",
                            "display",
                            7539,
                            0,
                            "linear",
                            "${criterio8}",
                            'block',
                            'block'
                        ],
                        [
                            "eid203",
                            "display",
                            8469,
                            0,
                            "linear",
                            "${criterio8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid195",
                            "scaleY",
                            5385,
                            500,
                            "linear",
                            "${criterio6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid213",
                            "scaleY",
                            11847,
                            500,
                            "linear",
                            "${criterio12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid499",
                            "top",
                            6136,
                            0,
                            "easeInBack",
                            "${criterio6}",
                            '145px',
                            '145px'
                        ],
                        [
                            "eid501",
                            "top",
                            7213,
                            0,
                            "easeInBack",
                            "${criterio7}",
                            '140px',
                            '140px'
                        ],
                        [
                            "eid244",
                            "display",
                            11847,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid243",
                            "display",
                            12810,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid186",
                            "scaleY",
                            2154,
                            500,
                            "linear",
                            "${criterio3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid187",
                            "display",
                            2154,
                            0,
                            "linear",
                            "${criterio3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid188",
                            "display",
                            3084,
                            0,
                            "linear",
                            "${criterio3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid226",
                            "display",
                            2154,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid225",
                            "display",
                            3117,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid238",
                            "display",
                            8616,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid237",
                            "display",
                            9579,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid242",
                            "display",
                            10770,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid241",
                            "display",
                            11733,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid496",
                            "top",
                            1828,
                            0,
                            "easeInBack",
                            "${criterio2}",
                            '161px',
                            '161px'
                        ],
                        [
                            "eid189",
                            "scaleY",
                            3231,
                            500,
                            "linear",
                            "${criterio4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid210",
                            "scaleY",
                            10770,
                            500,
                            "linear",
                            "${criterio11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "display",
                            6462,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid233",
                            "display",
                            7425,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid201",
                            "scaleY",
                            7539,
                            500,
                            "linear",
                            "${criterio8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid228",
                            "display",
                            3231,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid227",
                            "display",
                            4194,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid223",
                            "display",
                            1077,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid224",
                            "display",
                            2040,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid196",
                            "display",
                            5385,
                            0,
                            "linear",
                            "${criterio6}",
                            'block',
                            'block'
                        ],
                        [
                            "eid197",
                            "display",
                            6315,
                            0,
                            "linear",
                            "${criterio6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid498",
                            "top",
                            2905,
                            0,
                            "easeInBack",
                            "${criterio3}",
                            '165px',
                            '165px'
                        ],
                        [
                            "eid216",
                            "scaleY",
                            12924,
                            500,
                            "linear",
                            "${criterio13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid497",
                            "height",
                            2905,
                            0,
                            "easeInBack",
                            "${criterio3}",
                            '153px',
                            '153px'
                        ],
                        [
                            "eid500",
                            "height",
                            6136,
                            0,
                            "easeInBack",
                            "${criterio6}",
                            '173px',
                            '173px'
                        ],
                        [
                            "eid236",
                            "display",
                            7539,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid235",
                            "display",
                            8502,
                            0,
                            "linear",
                            "${marcador-redondo-3Copy7}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "netiqueta": {
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
                            id: 'netiqueta',
                            rect: ['0px', '0px', '631px', '361px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/netiqueta.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'netiqueta1',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(0, 26, 85); font-weight: 900;\">a.</span> Lea todos los correos que le envíe el instructor, esto incluye los &nbsp; &nbsp; &nbsp; archivos adjuntos.&nbsp;</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 26, 85); font-weight: 900;\">b.</span> Recuerde que las personas que leen los mensajes tienen puntos &nbsp; &nbsp; de vista divergentes y por lo tanto pueden tener una ideología &nbsp; &nbsp; &nbsp; &nbsp; distinta, como también formas diferentes de comunicación.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700; color: rgb(0, 26, 85);\">c</span><span style=\"color: rgb(0, 26, 85);\">.</span> Utilice buenos modales, lenguaje adecuado con la &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; correspondiente revisión de ortografía.</p>',
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            transform: [[], [], [], ['0']],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['335px', '73px', '828px', '276px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            rect: ['335px', '73px', '828px', '276px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'netiqueta1Copy',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(0, 26, 85); font-weight: 900;\">d.&nbsp;</span>Escriba en minúscula, recuerde que el uso sostenido de &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; mayúsculas, es sinónimo de grito.<span style=\"color: rgb(0, 26, 85); font-weight: 900;\"></span> </p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 26, 85); font-weight: 900;\">e.&nbsp;</span>Muéstrese amigable cuando esté trabajando en el espacio virtual.\n<span style=\"color: rgb(0, 26, 85); font-weight: 900;\"></span> \n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700; color: rgb(0, 26, 85);\">f</span><span style=\"color: rgb(0, 26, 85);\">. &nbsp;</span>Es importante respetar el ancho de banda de internet de los &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; demás compañeros y su tiempo, enviando mensajes cortos y/o &nbsp; &nbsp; &nbsp; &nbsp; archivos livianos.<span style=\"color: rgb(0, 26, 85);\"></span> </p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['326px', '73px', '845px', '276px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '28px', '', 'none'],
                            id: 'netiqueta1Copy2',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(0, 26, 85); font-weight: 700;\">g</span><span style=\"color: rgb(0, 26, 85); font-weight: 900;\">.&nbsp;</span>Comparta sus conocimientos a los demás compañeros, así ellos &nbsp; &nbsp; &nbsp; se motivarán a participar en cada una de las actividades.<span style=\"color: rgb(0, 26, 85); font-weight: 900;\"></span> </p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 26, 85); font-weight: 900;\">h.&nbsp;</span>Recuerde respetar la privacidad de los compañeros e instructor.<span style=\"color: rgb(0, 26, 85); font-weight: 900;\"></span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 26, 85); font-weight: 900;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700; color: rgb(0, 26, 85);\">i</span><span style=\"color: rgb(0, 26, 85);\">. &nbsp;</span>Al participar en los foros, mantenga un ambiente sano y &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; constructivo.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​<span style=\"color: rgb(0, 26, 85); font-weight: 900;\">j.&nbsp;</span>Disculpe a otros de los errores que puedan cometer, así perdonarán las      equivocaciones que tenga en un futuro.<span style=\"color: rgb(0, 26, 85); font-weight: 900;\"></span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 26, 85);\"></span><span style=\"color: rgb(0, 26, 85);\"></span> </p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['326px', '88px', '845px', '276px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '28px', '', 'none'],
                            id: 'netiqueta1Copy3',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(0, 26, 85); font-weight: 700;\">k</span><span style=\"color: rgb(0, 26, 85); font-weight: 900;\">.&nbsp;</span>Respete el trabajo intelectual de las demás personas, haga uso de &nbsp; &nbsp; las normas APA. Cada vez que haga uso de fuentes de &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; información para consulta, tómelas para aplicarlas a las &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; actividades o exponerlas.<span style=\"color: rgb(0, 26, 85); font-weight: 900;\"></span><span style=\"color: rgb(0, 26, 85); font-weight: 900;\"></span> </p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 26, 85); font-weight: 900;\">l. &nbsp;</span>Realice las actividades propuestas en cada una de las semanas, &nbsp; &nbsp; &nbsp; sea honesto, no deje que otros las hagan.<span style=\"color: rgb(0, 26, 85); font-weight: 900;\"></span><span style=\"color: rgb(0, 26, 85); font-weight: 900;\"></span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 26, 85); font-weight: 900;\">​</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 26, 85);\"></span><span style=\"color: rgb(0, 26, 85);\"></span> </p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['326px', '88px', '845px', '276px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '28px', '', 'none'],
                            id: 'netiqueta1Copy4',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(0, 26, 85); font-weight: 700;\">m</span><span style=\"color: rgb(0, 26, 85); font-weight: 900;\">.&nbsp;</span>Evite enviar mensajes en cadena, debido a que satura las &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;bandejas de entrada del correo, además de robar tiempo a los &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;compañeros y al instructor.<span style=\"color: rgb(0, 26, 85); font-weight: 900;\"></span><span style=\"color: rgb(0, 26, 85); font-weight: 900;\"></span><span style=\"color: rgb(0, 26, 85); font-weight: 900;\"></span> </p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 26, 85); font-weight: 900;\">n. &nbsp;</span>Recuerde que los mensajes de texto están compuestos por cuatro &nbsp; &nbsp; &nbsp;partes: saludo, cuerpo del mensaje, despedida y nombre de la &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;persona que envía el mensaje.<span style=\"color: rgb(0, 26, 85); font-weight: 900;\"></span><span style=\"color: rgb(0, 26, 85); font-weight: 900;\"></span><span style=\"color: rgb(0, 26, 85); font-weight: 900;\"></span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 26, 85); font-weight: 900;\">​</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 26, 85);\"></span><span style=\"color: rgb(0, 26, 85);\"></span> </p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['372px', '50px', '56px', '16px', 'auto', 'auto'],
                            id: 'marcador-redondo-32',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-redondo-3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-redondo-32Copy',
                            rect: ['425px', '50px', '56px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-redondo-3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-redondo-32Copy2',
                            rect: ['478px', '50px', '56px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-redondo-3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-redondo-32Copy3',
                            rect: ['531px', '50px', '56px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-redondo-3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-redondo-32Copy4',
                            rect: ['582px', '50px', '56px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-redondo-3.svg', '0px', '0px']
                        },
                        {
                            rect: ['377px', '3px', '44px', '53px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['430px', '3px', '44px', '53px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['482px', '3px', '44px', '53px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['534px', '3px', '44px', '53px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['588px', '3px', '44px', '53px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1171px', '364px']
                        }
                    }
                },
                timeline: {
                    duration: 5550,
                    autoPlay: false,
                    labels: {
                        "1": 114,
                        "2": 1224,
                        "3": 2334,
                        "4": 3444,
                        "5": 4554
                    },
                    data: [
                        [
                            "eid273",
                            "scaleX",
                            2334,
                            636,
                            "linear",
                            "${netiqueta1Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid288",
                            "display",
                            3444,
                            0,
                            "linear",
                            "${marcador-redondo-32Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid289",
                            "display",
                            4440,
                            0,
                            "linear",
                            "${marcador-redondo-32Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid290",
                            "display",
                            4554,
                            0,
                            "linear",
                            "${marcador-redondo-32Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid291",
                            "display",
                            5550,
                            0,
                            "linear",
                            "${marcador-redondo-32Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid271",
                            "display",
                            1224,
                            0,
                            "linear",
                            "${netiqueta1Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid272",
                            "display",
                            2171,
                            0,
                            "linear",
                            "${netiqueta1Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid274",
                            "display",
                            2334,
                            0,
                            "linear",
                            "${netiqueta1Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid275",
                            "display",
                            3281,
                            0,
                            "linear",
                            "${netiqueta1Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid247",
                            "display",
                            114,
                            0,
                            "linear",
                            "${netiqueta1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid254",
                            "display",
                            1061,
                            0,
                            "linear",
                            "${netiqueta1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid270",
                            "scaleX",
                            1224,
                            636,
                            "linear",
                            "${netiqueta1Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid280",
                            "display",
                            4554,
                            0,
                            "linear",
                            "${netiqueta1Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid281",
                            "display",
                            5501,
                            0,
                            "linear",
                            "${netiqueta1Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid277",
                            "display",
                            3444,
                            0,
                            "linear",
                            "${netiqueta1Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid278",
                            "display",
                            4391,
                            0,
                            "linear",
                            "${netiqueta1Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid276",
                            "scaleX",
                            3444,
                            636,
                            "linear",
                            "${netiqueta1Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid282",
                            "display",
                            114,
                            0,
                            "linear",
                            "${marcador-redondo-32}",
                            'none',
                            'block'
                        ],
                        [
                            "eid283",
                            "display",
                            1110,
                            0,
                            "linear",
                            "${marcador-redondo-32}",
                            'block',
                            'none'
                        ],
                        [
                            "eid253",
                            "scaleX",
                            114,
                            636,
                            "linear",
                            "${netiqueta1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid279",
                            "scaleX",
                            4554,
                            636,
                            "linear",
                            "${netiqueta1Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid284",
                            "display",
                            1224,
                            0,
                            "linear",
                            "${marcador-redondo-32Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid285",
                            "display",
                            2220,
                            0,
                            "linear",
                            "${marcador-redondo-32Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid286",
                            "display",
                            2334,
                            0,
                            "linear",
                            "${marcador-redondo-32Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid287",
                            "display",
                            3330,
                            0,
                            "linear",
                            "${marcador-redondo-32Copy2}",
                            'block',
                            'none'
                        ]
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
                            type: 'image',
                            id: 'cortinilla-cc',
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cortinilla-cc.svg', '0px', '0px']
                        },
                        {
                            rect: ['1224px', '159px', '48px', '31px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle6Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
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
                            id: 'cortinilla-creditos',
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cortinilla-creditos.svg', '0px', '0px']
                        },
                        {
                            rect: ['973px', '36px', '48px', '42px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
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
                            id: 'menu',
                            rect: ['8px', '158px', '185px', '173px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/menu.svg', '0px', '0px']
                        },
                        {
                            rect: ['112px', '160px', '40px', '26px', 'auto', 'auto'],
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
                            rect: ['30px', '235px', '151px', '45px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-4'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            id: 'btn_creditos',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['32px', '284px', '161px', '39px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-4'], ['28'], ['0.94047']],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['13px', '190px', '151px', '45px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'btn_descargarpdf',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
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
})("EDGE-13223963");
