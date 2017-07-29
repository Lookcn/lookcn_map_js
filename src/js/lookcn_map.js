if (typeof this.search_author_text === 'undefined') {
    var search_author_text = "作者："
}
var DEFAULT_MAP_CONFIG = {minZoom: 3, maxZoom: 16, zoom: 4}
if (typeof this.mapConfig === 'undefined') {
    var mapConfig = DEFAULT_MAP_CONFIG
}
else {
    for (var config in DEFAULT_MAP_CONFIG) {
        if (typeof this.mapConfig[config] === 'undefined') {
            this.mapConfig[config] = DEFAULT_MAP_CONFIG[config]
        }
    }
}

var Mapdata = {
    addressPoints: this.address_points,
    indexs: null,
    ProCou: [{
            tag: "ALL",
            text: "全部",
            count: 0
        },
        {
            tag: "BJ",
            text: "北京",
            count: 0
        },
        {
            tag: "SH",
            text: "上海",
            count: 0
        },
        {
            tag: "TJ",
            text: "天津",
            count: 0
        },
        {
            tag: "CQ",
            text: "重庆",
            count: 0
        },
        {
            tag: "HE",
            text: "河北",
            count: 0
        },
        {
            tag: "SX",
            text: "山西",
            count: 0
        },
        {
            tag: "NM",
            text: "内蒙古",
            count: 0
        },
        {
            tag: "LN",
            text: "辽宁",
            count: 0
        },
        {
            tag: "JL",
            text: "吉林",
            count: 0
        },
        {
            tag: "HL",
            text: "黑龙江",
            count: 0
        },
        {
            tag: "JS",
            text: "江苏",
            count: 0
        },
        {
            tag: "ZJ",
            text: "浙江",
            count: 0
        },
        {
            tag: "AH",
            text: "安徽",
            count: 0
        },
        {
            tag: "FJ",
            text: "福建",
            count: 0
        },
        {
            tag: "JX",
            text: "江西",
            count: 0
        },
        {
            tag: "SD",
            text: "山东",
            count: 0
        },
        {
            tag: "HA",
            text: "河南",
            count: 0
        },
        {
            tag: "HB",
            text: "湖北",
            count: 0
        },
        {
            tag: "HN",
            text: "湖南",
            count: 0
        },
        {
            tag: "GD",
            text: "广东",
            count: 0
        },
        {
            tag: "GX",
            text: "广西",
            count: 0
        },
        {
            tag: "HI",
            text: "海南",
            count: 0
        },
        {
            tag: "SC",
            text: "四川",
            count: 0
        },
        {
            tag: "GZ",
            text: "贵州",
            count: 0
        },
        {
            tag: "YN",
            text: "云南",
            count: 0
        },
        {
            tag: "XZ",
            text: "西藏",
            count: 0
        },
        {
            tag: "SN",
            text: "陕西",
            count: 0
        },
        {
            tag: "GS",
            text: "甘肃",
            count: 0
        },
        {
            tag: "QH",
            text: "青海",
            count: 0
        },
        {
            tag: "NX",
            text: "宁夏",
            count: 0
        },
        {
            tag: "XJ",
            text: "新疆",
            count: 0
        },
        {
            tag: "TW",
            text: "台湾",
            count: 0
        },
        {
            tag: "HK",
            text: "香港",
            count: 0
        },
        {
            tag: "MO",
            text: "澳门",
            count: 0
        }
    ],
    ConCou: [ //一级：ABCDEFGH,二级：I-Z
        {
            tag: "ALL",
            text: "全部",
            count: 0
        },
        {
            tag: "A",
            text: "建筑",
            count: 0,
            child: [{
                    tag: "AI",
                    text: "用途",
                    child: [{
                            tag: "AI1",
                            text: "宗教、祭祀",
                            count: 0
                        },
                        {
                            tag: "AI2",
                            text: "住宅、公用",
                            count: 0
                        },
                        {
                            tag: "AI3",
                            text: "宫殿",
                            count: 0
                        },
                        {
                            tag: "AI4",
                            text: "陵墓",
                            count: 0
                        },
                        {
                            tag: "AI5",
                            text: "园林",
                            count: 0
                        },
                        {
                            tag: "AI6",
                            text: "其它",
                            count: 0
                        }
                    ]
                },
                {
                    tag: "AJ",
                    text: "形制",
                    child: [{
                            tag: "AJ1",
                            text: "房屋",
                            count: 0
                        },
                        {
                            tag: "AJ2",
                            text: "城郭及钟鼓楼",
                            count: 0
                        },
                        {
                            tag: "AJ3",
                            text: "牌坊、亭",
                            count: 0
                        },
                        {
                            tag: "AJ4",
                            text: "桥梁",
                            count: 0
                        },
                        {
                            tag: "AJ5",
                            text: "塔",
                            count: 0
                        },
                        {
                            tag: "AJ6",
                            text: "碑",
                            count: 0
                        },
                        {
                            tag: "AJ7",
                            text: "其它",
                            count: 0
                        }
                    ]
                },
                {
                    tag: "AK",
                    text: "材料",
                    child: [{
                            tag: "AK1",
                            text: "石材",
                            count: 0
                        },
                        {
                            tag: "AK2",
                            text: "木材",
                            count: 0
                        },
                        {
                            tag: "AK3",
                            text: "砖",
                            count: 0
                        },
                        {
                            tag: "AK4",
                            text: "金属",
                            count: 0
                        },
                        {
                            tag: "AK5",
                            text: "夯土",
                            count: 0
                        },
                        {
                            tag: "AK6",
                            text: "其它",
                            count: 0
                        }
                    ]
                }
            ]
        },
        {
            tag: "B",
            text: "手艺",
            count: 0,
            child: [{
                    tag: "BI",
                    text: "成品",
                    child: [{
                            tag: "BI1",
                            text: "日常用具",
                            count: 0
                        },
                        {
                            tag: "BI2",
                            text: "衣着服饰",
                            count: 0
                        },
                        {
                            tag: "BI3",
                            text: "家居摆饰",
                            count: 0
                        },
                        {
                            tag: "BI4",
                            text: "文娱玩具",
                            count: 0
                        },
                        {
                            tag: "BI5",
                            text: "祭庆用品",
                            count: 0
                        },
                        {
                            tag: "BI6",
                            text: "武器工具",
                            count: 0
                        },
                        {
                            tag: "BI7",
                            text: "其它",
                            count: 0
                        }
                    ]
                },
                {
                    tag: "BJ",
                    text: "材质",
                    child: [{
                            tag: "BJ1",
                            text: "木竹草",
                            count: 0
                        },
                        {
                            tag: "BJ2",
                            text: "砖石玉",
                            count: 0
                        },
                        {
                            tag: "BJ3",
                            text: "土陶瓷",
                            count: 0
                        },
                        {
                            tag: "BJ4",
                            text: "金属类",
                            count: 0
                        },
                        {
                            tag: "BJ5",
                            text: "纺织品",
                            count: 0
                        },
                        {
                            tag: "BJ6",
                            text: "牙骨角",
                            count: 0
                        },
                        {
                            tag: "BJ7",
                            text: "叶皮纸",
                            count: 0
                        },
                        {
                            tag: "BJ8",
                            text: "其它",
                            count: 0
                        }
                    ]
                }
            ]
        }
    ],
    loaddata: function () {
        this.allIndexs();
        this.getProTagCount();
        this.getConTagCount();
    },
    allIndexs: function () {
        this.indexs = new Array();
        var len = this.addressPoints.length;
        for (var i = 0; i < len; i++) {
            this.indexs[i] = i;
        }
    },
    tagFilter: function (protag, contag) {
        this.allIndexs();
        //                        alert("过滤条件：" + protag + "+" + contag + "初始" + this.indexs.length);
        if (protag !== "ALL") {
            var newIndexs = new Array();
            var newi = 0;
            for (var i = 0; i < this.indexs.length; i++) {
                if (protag === this.addressPoints[this.indexs[i]].protag) {
                    newIndexs[newi] = this.indexs[i];
                    newi = newi + 1;
                }
            }
            this.indexs = newIndexs;
        }
        //                        alert("省份" + this.indexs.length);
        if (contag !== "ALL") {
            var newIndexs = new Array();
            var newi = 0;
            for (var i = 0; i < this.indexs.length; i++) {
                if (this.addressPoints[this.indexs[i]].contag.indexOf(contag) > -1) {
                    newIndexs[newi] = this.indexs[i];
                    newi = newi + 1;
                }
            }
            this.indexs = newIndexs;
        }
        //                        alert("内容" + this.indexs.length);
    },
    searchFilter: function (type, txt) {
        if (type === "title") {
            var newIndexs = new Array();
            var newi = 0;
            for (var i = 0; i < this.indexs.length; i++) {
                if (this.addressPoints[this.indexs[i]].title.indexOf(txt) > -1) {
                    newIndexs[newi] = this.indexs[i];
                    newi = newi + 1;
                }
            }
            this.indexs = newIndexs;
        }
        if (type === "author") {
            var newIndexs = new Array();
            var newi = 0;
            for (var i = 0; i < this.indexs.length; i++) {
                if (this.addressPoints[this.indexs[i]].author.indexOf(txt) > -1) {
                    newIndexs[newi] = this.indexs[i];
                    newi = newi + 1;
                }
            }
            this.indexs = newIndexs;
        }
        if (type === "location") {
            //                                var newIndexs = new Array();
            //                                var newi = 0;
            //                                for (var i = 0; i < this.indexs.length; i++) {
            //                                    if (this.addressPoints[this.indexs[i]].title.indexOf(txt) > -1) {
            //                                        newIndexs[newi] = this.indexs[i];
            //                                        newi = newi + 1;
            //                                    }
            //                                }
            //                                this.indexs = newIndexs;
        }
    },
    getCenterBounds: function () {
        var r = {
            latmin: 16,
            latmax: 50,
            lngmin: 100,
            lngmax: 120
        };
        if (this.indexs === null) {
            this.allIndexs();
        }
        var len = this.indexs.length;
        if (len > 0) {
            var lati = this.addressPoints[this.indexs[0]].lat;
            var lngi = this.addressPoints[this.indexs[0]].lng;
            r.latmax = lati;
            r.latmin = lati;
            r.lngmax = lngi;
            r.lngmin = lngi;
            for (var i = 1; i < len; i++) {
                var lati = this.addressPoints[this.indexs[i]].lat;
                r.latmax = Math.max(r.latmax, lati);
                r.latmin = Math.min(r.latmin, lati);
                var lngi = this.addressPoints[this.indexs[i]].lng;
                r.lngmax = Math.max(r.lngmax, lngi);
                r.lngmin = Math.min(r.lngmin, lngi);
            }
        }
        return r;
    },
    getProTagCount: function (contag) {
        for (var ii = 0; ii < this.ProCou.length; ii++) {
            this.ProCou[ii].count = 0;
        }
        this.tagFilter("ALL", contag);
        for (var i = 0; i < this.indexs.length; i++) {
            this.ProCou[0].count = this.ProCou[0].count + 1;
            var protagi = this.addressPoints[this.indexs[i]].protag;
            for (var ii = 1; ii < this.ProCou.length; ii++) {
                if (this.ProCou[ii].tag === protagi) {
                    this.ProCou[ii].count = this.ProCou[ii].count + 1;
                    break;
                }
            }
        }
    },
    getConTagCount: function (protag) {
        this.ConCou[0].count = 0;
        for (var i1 = 1; i1 < this.ConCou.length; i1++) {
            this.ConCou[i1].count = 0;
            for (var i2 = 0; i2 < this.ConCou[i1].child.length; i2++) {
                //                                    this.ConCou[i1].child[i2].count = 0;
                for (var i3 = 0; i3 < this.ConCou[i1].child[i2].child.length; i3++) {
                    this.ConCou[i1].child[i2].child[i3].count = 0;
                }
            }
        }
        this.tagFilter(protag, "ALL");
        for (var i = 0; i < this.indexs.length; i++) {
            this.ConCou[0].count = this.ConCou[0].count + 1;
            var contagi = this.addressPoints[this.indexs[i]].contag;
            if (contagi !== "") {
                for (var i1 = 1; i1 < this.ConCou.length; i1++) {
                    if (contagi.indexOf(this.ConCou[i1].tag) > -1) {
                        this.ConCou[i1].count = this.ConCou[i1].count + 1;
                    }
                    for (var i2 = 0; i2 < this.ConCou[i1].child.length; i2++) {
                        //                                            if (contagi.indexOf(this.ConCou[i1].child[i2].tag) > -1) {
                        //                                                this.ConCou[i1].child[i2].count = this.ConCou[i1].child[i2].count + 1;
                        //                                            }
                        for (var i3 = 0; i3 < this.ConCou[i1].child[i2].child.length; i3++) {
                            if (contagi.indexOf(this.ConCou[i1].child[i2].child[i3].tag) > -1) {
                                this.ConCou[i1].child[i2].child[i3].count = this.ConCou[i1].child[i2].child[
                                    i3].count + 1;
                            }
                        }
                    }
                }
            }
        }
    }
};
var UIcontrol = {
    map: null,
    bounds: null,
    markers: null,
    Icons: {
        markerIcon1: L.icon({
            iconUrl: 'http://lookcn.org/wp-content/uploads/2017/03/marker-icon-type1.png',
            iconSize: [30, 40],
            iconAnchor: [15, 34],
            popupAnchor: [0, -16]
        }),
        markerIcon2: L.icon({
            iconUrl: 'http://lookcn.org/wp-content/uploads/2017/03/marker-icon-type2.png',
            iconSize: [30, 40],
            iconAnchor: [15, 34],
            popupAnchor: [0, -16]
        }),
        markerIcon3: L.icon({
            iconUrl: 'http://lookcn.org/wp-content/uploads/2017/03/marker-icon-type3.png',
            iconSize: [30, 40],
            iconAnchor: [15, 34],
            popupAnchor: [0, -16]
        })
    },
    proTagStatus: "ALL",
    proTagText: "全部",
    conTagStatus: "ALL",
    conTagText: "全部",
    searchTitle: "",
    searchAuthor: "",
    searchLocation: "",
    searchType: 1,
    itemStatus: "ALL",
    fullPageStatus: "NORM",
    rightBarStatus: "SHOW",
    reSizeDivs: function () {
        var divback = document.getElementById("back"),
            divmap = document.getElementById("map"),
            divrightBar = document.getElementById("right-bar"),
            divcontent = document.getElementById("contentdiv"),
            divsearchinfo = document.getElementById("searchinfo");
        var parw = divback.clientWidth;
        var clh = Math.round(parw * 0.618);
        if (clh > 610) {
            clh = 610;
        }
        var clw = Math.round(parw * 0.2);
        if (this.fullPageStatus !== "NORM") {
            clh = document.documentElement.clientHeight; //document.body.clientHeight;
            parw = document.documentElement.clientWidth; //document.body.clientWidth;
            clw = Math.round(parw * 0.2);
        }
        if (clw < 200) {
            clw = 200;
        }
        if (clh < 100) {
            clh = 100;
        }
        divback.style.height = clh + "px";
        divmap.style.height = (clh - 2) + "px";
        divrightBar.style.height = (clh - 2) + "px";
        divcontent.style.height = (clh - 108) + "px";
        divrightBar.style.width = (clw - 2) + "px";
        //divcontent.style.width = (clw - 2) + "px";
        if (divsearchinfo) {
            //divsearchinfo.style.width = (clw - 2) + "px";
            divsearchinfo.style.height = (clh - 108 - 125) + "px";
        }
        if (this.rightBarStatus === "SHOW") {
            divmap.style.width = (parw - clw) + "px";
            divrightBar.style.marginRight = "0px";
        } else {
            divmap.style.width = (parw - 2) + "px";
            divrightBar.style.marginRight = "-" + (clw - 2) + "px";
        }
    },
    initMap: function (contag = true, protag = true, searchtag = true) {
        var preFullPageStatus = this.fullPageStatus
        var preRightBarStatus = this.rightBarStatus
        if (767 > window.innerWidth && preFullPageStatus === "NORM") {
            this.fullPageSlide();
        }
        if (767 > window.innerWidth && preRightBarStatus === "SHOW") {
            this.rightBarSlide();
        }
        this.reSizeDivs();
        var tiles = L.tileLayer(
            'http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
                //'http://cache1.arcgisonline.cn/ArcGIS/rest/services/ChinaOnlineStreetColor/MapServer/tile/{z}/{y}/{x}', {
                //<a href="http://cache1.arcgisonline.cn/ArcGIS/rest/services/ChinaOnlineStreetColor/MapServer">ArcGIS</a>
                minZoom: window.mapConfig.minZoom,
                maxZoom: window.mapConfig.maxZoom,
                attribution: '<a href="http://ditu.amap.com/">高德地图</a> &copy;'
            });
        this.map = L.map('map', {
            center: L.latLng(36.69, 107.34),
            zoom: window.mapConfig.zoom,
            layers: [tiles]
        });
        L.control.scale().addTo(this.map);
        //                    this.map.invalidateSize(true);
        this.proTagStatus = "ALL";
        this.conTagStatus = "ALL";
        //                    Mapdata.loaddata();
        this.updateMap();
        if (contag) {
            var top_tag = document.getElementById("top-tag");
            var tag_td = document.createElement("td");
            tag_td.style.width = "25%";
            tag_td.style.padding = "0";
            tag_td.style.margin = "0";
            tag_td.style.border = "0";
            tag_td.align = "center";
            tag_td.vAlign = "middle";
            var tag_div = document.createElement("div");
            tag_div.setAttribute("id", "condiv");
            tag_div.setAttribute("onclick", "UIcontrol.loadContag();");
            tag_div.setAttribute("class", "top-tag-div");
            tag_div.textContent = "标签";
            tag_td.appendChild(tag_div);
            top_tag.appendChild(tag_td);
        };
        if (protag) {
            var top_tag = document.getElementById("top-tag");
            var tag_td = document.createElement("td");
            tag_td.style.width = "25%";
            tag_td.style.padding = "0";
            tag_td.style.margin = "0";
            tag_td.style.border = "0";
            tag_td.align = "center";
            tag_td.vAlign = "middle";
            var tag_div = document.createElement("div");
            tag_div.setAttribute("id", "prodiv");
            tag_div.setAttribute("onclick", "UIcontrol.loadProtag();");
            tag_div.setAttribute("class", "top-tag-div");
            tag_div.textContent = "地域";
            tag_td.appendChild(tag_div);
            top_tag.appendChild(tag_td);
        };
        if (searchtag) {
            var top_tag = document.getElementById("top-tag");
            var tag_td = document.createElement("td");
            tag_td.style.width = "25%";
            tag_td.style.padding = "0";
            tag_td.style.margin = "0";
            tag_td.style.border = "0";
            tag_td.align = "center";
            tag_td.vAlign = "middle";
            var tag_div = document.createElement("div");
            tag_div.setAttribute("id", "seadiv");
            tag_div.setAttribute("onclick", "UIcontrol.loadSearch();");
            tag_div.setAttribute("class", "top-tag-div");
            tag_div.textContent = "查找";
            tag_td.appendChild(tag_div);
            top_tag.appendChild(tag_td);
        };
        var top_tag = document.getElementById("top-tag");
        var tag_td = document.createElement("td");
        tag_td.style.maxWidth = "50px";
        tag_td.style.padding = "0";
        tag_td.style.margin = "0";
        tag_td.style.border = "0";
        tag_td.textContent = " ";
        top_tag.appendChild(tag_td);
        if (contag) {
            this.loadContag(this.proTagStatus);
        } else if (protag) {
            this.loadProtag(this.proTagStatus);
        } else {
            this.loadSearch();
        }
        this.updateBottom();
    },
    updateMap: function () {
        var CenBou = Mapdata.getCenterBounds();
        this.bounds = L.latLngBounds(L.latLng(CenBou.latmin, CenBou.lngmin), L.latLng(CenBou.latmax,
            CenBou.lngmax));
        this.map.fitBounds(this.bounds);
        if (this.markers !== null) {
            this.map.removeLayer(this.markers);
        }
        if (Mapdata.indexs.length > 0) {
            this.markers = L.markerClusterGroup();
            //                    alert("更新结果"+Mapdata.indexs.length);
            var popdiv = document.createElement("div");
            popdiv.setAttribute('class', 'popover-inner-content');
            var popimg = document.createElement("img");
            popimg.setAttribute('width', 180);
            var poptitle = document.createElement("div");
            poptitle.setAttribute('class', 'popover-inner-title');
            for (var i = 0; i < Mapdata.indexs.length; i++) {
                var a = Mapdata.addressPoints[Mapdata.indexs[i]];
                if (a.type === 1) {
                    var marker = L.marker(new L.LatLng(a.lat, a.lng), {
                        title: a.alt,
                        icon: this.Icons.markerIcon1
                    });
                } else if (a.type === 2) {
                    var marker = L.marker(new L.LatLng(a.lat, a.lng), {
                        title: a.alt,
                        icon: this.Icons.markerIcon2
                    });
                } else {
                    var marker = L.marker(new L.LatLng(a.lat, a.lng), {
                        title: a.alt,
                        icon: this.Icons.markerIcon3
                    });
                }
                popimg.alt = a.content;
                poptitle.innerHTML = "<span>" + a.title + "<br>" + a.author + "</span>";
                popdiv.setAttribute("onclick", "window.open('" + a.url + "','_blank');");
                popdiv.innerHTML = popimg.outerHTML
                marker.bindPopup(popdiv.outerHTML + poptitle.outerHTML, {
                    minWidth: 180,
                    maxWidth: 180,
                    closeButton: false
                }).on({
                    popupopen: function(popup) {
                        var popupContentNode = popup.popup._contentNode;
                        popupContentNode.setAttribute('class', 'popover-content');
                        popupContentNode.removeAttribute('style');
                        var popupopen_img = popupContentNode.getElementsByTagName('img')[0];
                        popupopen_img.setAttribute("src", popupopen_img.alt);
                    },
                    mouseover: marker._openPopup
                });
                this.markers.addLayer(marker);
            }
            this.map.addLayer(this.markers);
        }
    },
    fullPageSlide: function () {
        var mainele = document.getElementById("main"),
            divfullPageSlider = document.getElementById("full-page-slider"),
            html = document.getElementsByTagName("html");
        if (this.fullPageStatus === "NORM") {
            this.fullPageStatus = "FULL";
            divfullPageSlider.innerHTML =
                '<img alt="适应屏幕" src="http://lookcn.org/wp-content/uploads/2017/03/renormal.png" width="30" height="30">';
            mainele.style.position = "fixed";
            mainele.style.top = "0";
            mainele.style.left = "0";
            mainele.style.bottom = "0";
            mainele.style.right = "0";
            mainele.style.zIndex = "2333";
            html[0].style.overflowY = "hidden";
        } else {
            this.fullPageStatus = "NORM";
            divfullPageSlider.innerHTML =
                '<img alt="正常页面" src="http://lookcn.org/wp-content/uploads/2017/03/full.png" width="30" height="30">';
            mainele.removeAttribute("style");
            html[0].style.overflowY = "auto";
        }
        this.reSizeDivs();
        setTimeout("UIcontrol.reDrawMap()", 501);
    },
    rightBarSlide: function () {
        var divback = document.getElementById("back"),
            divmap = document.getElementById("map"),
            divrightBar = document.getElementById("right-bar"),
            divrightBarSlider = document.getElementById("right-bar-slider");
        var parw = divback.clientWidth;
        var clw = Math.round(parw * 0.2);
        if (clw < 200) {
            clw = 200;
        }
        if (this.rightBarStatus === "SHOW") {
            this.rightBarStatus = "HIDDEN";
            divrightBarSlider.innerHTML =
                '<img alt="展开索引栏" src="http://lookcn.org/wp-content/uploads/2017/03/open.png" width="30" height="30">';
            divmap.style.width = (parw - 2) + "px";
            divrightBar.style.marginRight = "-" + (clw - 2) + "px";
        } else {
            this.rightBarStatus = "SHOW";
            divrightBarSlider.innerHTML =
                '<img alt="关闭索引栏" src="http://lookcn.org/wp-content/uploads/2017/03/close.png" width="30" height="30">';
            divmap.style.width = (parw - clw) + "px";
            divrightBar.style.marginRight = "0px";
        }
        setTimeout("UIcontrol.reDrawMap()", 501);
    },
    reDrawMap: function () {
        this.map.invalidateSize(true);
        this.map.fitBounds(this.bounds);
    },
    loadContag: function () {
        if (document.getElementById("condiv")) {
            this.updateTop("condiv", "prodiv", "seadiv");
            Mapdata.getConTagCount(this.proTagStatus);
            var ul1 = document.createElement("ul");
            ul1.style.margin = "0";
            for (var i1 = 0; i1 < Mapdata.ConCou.length; i1++) {
                var li1 = document.createElement("li");
                li1.setAttribute("name", "li_con");
                li1.setAttribute("class", "tag-1");
                li1.setAttribute("id", "li_con_" + Mapdata.ConCou[i1].tag);
                li1.setAttribute("onclick", "UIcontrol.tagSelect('con','" + Mapdata.ConCou[i1].tag + "','" +
                    Mapdata.ConCou[i1].text + "');");
                li1.innerHTML = Mapdata.ConCou[i1].text + "(" + Mapdata.ConCou[i1].count + ")";
                ul1.appendChild(li1);
                if (Mapdata.ConCou[i1].child) {
                    var ul2 = document.createElement("ul");
                    ul2.style.margin = "0";
                    for (var i2 = 0; i2 < Mapdata.ConCou[i1].child.length; i2++) {
                        var li2 = document.createElement("li");
                        li2.setAttribute("class", "tag-2");
                        li2.setAttribute("onclick", "UIcontrol.tagSelect('con_open','" + Mapdata.ConCou[i1]
                            .child[i2].tag + "','" + Mapdata.ConCou[i1].child[i2].text + "');");
                        li2.innerHTML = "<img name='img_con' id='img_con_" + Mapdata.ConCou[i1].child[i2].tag +
                            "' src='http://lookcn.org/wp-content/uploads/2017/06/tag2_c1.png' />" + Mapdata
                            .ConCou[i1].child[i2].text // + "(" + Mapdata.ConCou[i1].child[i2].count + ")";
                        ul2.appendChild(li2);
                        if (Mapdata.ConCou[i1].child[i2].child) {
                            var ul3 = document.createElement("ul");
                            ul3.style.margin = "0";
                            ul3.style.display = "none";
                            ul3.setAttribute("name", "ul_con");
                            ul3.setAttribute("id", "ul_con_" + Mapdata.ConCou[i1].child[i2].tag);
                            for (var i3 = 0; i3 < Mapdata.ConCou[i1].child[i2].child.length; i3++) {
                                var li3 = document.createElement("li");
                                li3.setAttribute("class", "tag-3");
                                li3.setAttribute("name", "li_con");
                                li3.setAttribute("id", "li_con_" + Mapdata.ConCou[i1].child[i2].child[i3].tag);
                                li3.setAttribute("onclick", "UIcontrol.tagSelect('con','" + Mapdata.ConCou[
                                        i1].child[i2].child[i3].tag + "','" + Mapdata.ConCou[i1].text +
                                    "-" + Mapdata.ConCou[i1].child[i2].text + "-" + Mapdata.ConCou[i1].child[
                                        i2].child[i3].text + "');");
                                li3.innerHTML = Mapdata.ConCou[i1].child[i2].child[i3].text + "(" + Mapdata
                                    .ConCou[i1].child[i2].child[i3].count + ")";
                                ul3.appendChild(li3);
                            }
                            ul2.appendChild(ul3);
                        }
                    }
                    ul1.appendChild(ul2);
                }
            }
            var contentdiv = document.getElementById("contentdiv");
            contentdiv.innerHTML = ul1.outerHTML;
            this.updateTags("con", this.conTagStatus);
            this.updateTags("con_open", this.conTagStatus);
        }
    },
    loadProtag: function () {
        if (document.getElementById("prodiv")) {
            this.updateTop("prodiv", "condiv", "seadiv");
            Mapdata.getProTagCount(this.conTagStatus);
            var ul = document.createElement("ul");
            ul.style.margin = "0";
            for (var i = 0; i < Mapdata.ProCou.length; i++) {
                if (Mapdata.ProCou[i].tag === "ALL" || Mapdata.ProCou[i].count > 0) {
                    var li = document.createElement("li");
                    li.setAttribute("class", "tag-1");
                    li.setAttribute("name", "li_pro");
                    li.setAttribute("id", "li_pro_" + Mapdata.ProCou[i].tag);
                    li.setAttribute("onclick", "UIcontrol.tagSelect('pro','" + Mapdata.ProCou[i].tag +
                        "','" + Mapdata.ProCou[i].text + "');");
                    li.innerHTML = Mapdata.ProCou[i].text + "(" + Mapdata.ProCou[i].count + ")";
                    ul.appendChild(li);
                }
            }
            var contentdiv = document.getElementById("contentdiv");
            contentdiv.innerHTML = ul.outerHTML;
            this.updateTags("pro", this.proTagStatus);
        }
    },
    loadSearch: function () {
        if (document.getElementById("seadiv")) {
            this.updateTop("seadiv", "condiv", "prodiv");
            var contentdiv = document.getElementById("contentdiv");
            contentdiv.innerHTML = "";
            //var width = contentdiv.clientWidth;
            var height = contentdiv.clientHeight;
            var titlediv = document.createElement("div");
            titlediv.style.height = "25px";
            titlediv.style.lineHeight = "25px";
            titlediv.style.fontSize = "12px";
            titlediv.innerHTML = "标题：";
            var titleinput = document.createElement("input");
            titleinput.setAttribute("type", "text");
            titleinput.setAttribute("id", "titlein");
            titleinput.setAttribute("value", this.searchTitle);
            titleinput.style.width = "60%";
            titleinput.style.borderWidth = "1px";
            titleinput.style.height = "16px";
            titleinput.style.lineHeight = "16px";
            titleinput.style.fontSize = "12px";
            titlediv.appendChild(titleinput);
            contentdiv.appendChild(titlediv);
            var authordiv = document.createElement("div");
            authordiv.style.height = "25px";
            authordiv.style.lineHeight = "25px";
            authordiv.style.fontSize = "12px";
            authordiv.innerHTML = window.search_author_text;
            var authorinput = document.createElement("input");
            authorinput.setAttribute("type", "text");
            authorinput.setAttribute("id", "authorin");
            authorinput.setAttribute("value", this.searchAuthor);
            authorinput.style.width = "60%";
            authorinput.style.borderWidth = "1px";
            authorinput.style.height = "16px";
            authorinput.style.lineHeight = "16px";
            authorinput.style.fontSize = "12px";
            authordiv.appendChild(authorinput);
            contentdiv.appendChild(authordiv);
            var locationdiv = document.createElement("div");
            locationdiv.style.height = "25px";
            locationdiv.style.lineHeight = "25px";
            locationdiv.style.fontSize = "12px";
            locationdiv.innerHTML = "位置：";
            var locationinput = document.createElement("input");
            locationinput.setAttribute("type", "text");
            locationinput.setAttribute("id", "locationin");
            locationinput.setAttribute("value", this.searchLocation);
            locationinput.style.width = "60%";
            locationinput.style.borderWidth = "1px";
            locationinput.style.height = "16px";
            locationinput.style.lineHeight = "16px";
            locationinput.style.fontSize = "12px";
            locationdiv.appendChild(locationinput);
            contentdiv.appendChild(locationdiv);
            var buttondiv = document.createElement("div");
            buttondiv.style.height = "30px";
            buttondiv.style.lineHeight = "30px";
            buttondiv.style.whiteSpace = "nowrap";
            var searchbotton1 = document.createElement("input");
            searchbotton1.setAttribute("type", "button");
            searchbotton1.setAttribute("value", "查找");
            searchbotton1.setAttribute("onclick", "UIcontrol.txtSearch(0)");
            searchbotton1.style.width = "25%";
            searchbotton1.style.border = "2px solid #a79e8d";
            searchbotton1.style.borderRadius = "10px";
            searchbotton1.style.margin = "0";
            searchbotton1.style.padding = "0";
            searchbotton1.style.marginRight = "10%";
            searchbotton1.style.backgroundColor = "#ffffff";
            searchbotton1.style.color = "#000000";
            searchbotton1.style.height = "24px";
            searchbotton1.style.lineHeight = "16px";
            searchbotton1.style.fontSize = "12px";
            searchbotton1.style.display = "inline";
            buttondiv.appendChild(searchbotton1);
            var searchbotton2 = document.createElement("input");
            searchbotton2.setAttribute("type", "button");
            searchbotton2.setAttribute("value", "限定下查找");
            searchbotton2.setAttribute("onclick", "UIcontrol.txtSearch(1)");
            searchbotton2.style.width = "45%";
            searchbotton2.style.border = "2px solid #a79e8d";
            searchbotton2.style.borderRadius = "10px";
            searchbotton2.style.margin = "0";
            searchbotton2.style.padding = "0";
            searchbotton2.style.backgroundColor = "#ffffff";
            searchbotton2.style.color = "#000000";
            searchbotton2.style.height = "24px";
            searchbotton2.style.lineHeight = "16px";
            searchbotton2.style.fontSize = "12px";
            searchbotton2.style.display = "inline";
            buttondiv.appendChild(searchbotton2);
            contentdiv.appendChild(buttondiv);
            var resultul = document.createElement("ul");
            resultul.style.margin = "0";
            resultul.style.height = "20px";
            resultul.setAttribute("id", "searchresultul");
            contentdiv.appendChild(resultul);
            var info = document.createElement("div");
            //info.style.width = "100%";
            info.style.height = (height - 125) + "px";
            info.style.overflowY = "auto";
            info.style.overflowX = "hidden";
            info.id = "searchinfo";
            info.innerHTML = "";
            contentdiv.appendChild(info);
            if (this.searchTitle !== "" || this.searchAuthor !== "" || this.searchLocation !== "") {
                this.txtSearch(this.searchType);
            }
        }
    },
    updateTop: function (idt, idf1, idf2) {
        var iddiv = document.getElementById(idt);
        if (iddiv) {
            iddiv.style.backgroundColor = "rgba(167,158,141,0.8)";
            iddiv.style.color = "#ffffff";
        };
        iddiv = document.getElementById(idf1);
        if (iddiv) {
            iddiv.style.backgroundColor = "#ffffff";
            iddiv.style.color = "#000000";
        };
        iddiv = document.getElementById(idf2);
        if (iddiv) {
            iddiv.style.backgroundColor = "#ffffff";
            iddiv.style.color = "#000000";
        }
    },
    updateTags: function (type, tag) {
        if (type === "con_open") {
            var uls = document.getElementsByName("ul_con");
            var imgs = document.getElementsByName("img_con");
            for (var i = 0; i < uls.length; i++) {
                if (("ul_con_" + tag).indexOf(uls[i].id) > -1) {
                    if (uls[i].style.display === "block") {
                        uls[i].style.display = "none";
                        imgs[i].src = "http://lookcn.org/wp-content/uploads/2017/06/tag2_c1.png";
                    } else {
                        uls[i].style.display = "block";
                        imgs[i].src = "http://lookcn.org/wp-content/uploads/2017/06/tag2_o1.png";
                    }
                } else {
                    uls[i].style.display = "none";
                    imgs[i].src = "http://lookcn.org/wp-content/uploads/2017/06/tag2_c1.png";
                }
            }
        } else {
            var lis = document.getElementsByName("li_" + type);
            for (var i = 0; i < lis.length; i++) {
                if (("li_" + type + "_" + tag) === lis[i].id) {
                    lis[i].classList.add("tag-focus");
                } else {
                    lis[i].classList.remove("tag-focus");
                }
            }
        }
    },
    updateSearch: function () {
        var resultul = document.getElementById("searchresultul");
        var li = document.createElement("li");
        li.style.height = "20px";
        li.style.lineHeight = "20px";
        li.style.fontSize = "12px";
        li.style.fontWeight = "bold";
        li.style.textAlign = "left";
        li.style.paddingLeft = "10px";
        li.style.borderBottom = "1px solid #cccccc";
        li.style.backgroundColor = "#ffffff";
        li.style.color = "#000000";
        li.setAttribute("name", "li_item");
        li.setAttribute("id", "li_item_ALL");
        li.setAttribute("onclick", "UIcontrol.tagSelect('item','ALL','全部结果');");
        if (this.searchType) {
            li.innerHTML = "限定条件下";
        } else {
            li.innerHTML = "";
        }
        li.innerHTML = li.innerHTML + "查找结果：(" + Mapdata.indexs.length + ")";
        resultul.innerHTML = li.outerHTML;
        var ul = document.createElement("ul");
        ul.style.margin = "0";
        for (var i = 0; i < Mapdata.indexs.length; i++) {
            var li = document.createElement("li");
            li.style.height = "16px";
            //li.style.width = "100%";
            li.style.lineHeight = "16px";
            li.style.fontSize = "12px";
            li.style.textAlign = "left";
            //li.style.whiteSpace = "nowrap";
            li.style.overflow = "hidden";
            //li.style.textOverflow = "ellipsis";
            li.style.paddingLeft = "10px";
            li.style.borderBottom = "1px solid #cccccc";
            li.style.backgroundColor = "#ffffff";
            li.style.color = "#000000";
            li.setAttribute("name", "li_item");
            li.setAttribute("id", "li_item_" + i);
            li.setAttribute("onclick", "UIcontrol.tagSelect('item'," + i + ",'" + Mapdata.addressPoints[
                Mapdata.indexs[i]].title + "');");
            li.innerHTML = "[" + Mapdata.addressPoints[Mapdata.indexs[i]].author + "]" + Mapdata.addressPoints[
                Mapdata.indexs[i]].title;
            li.setAttribute("title", "[" + Mapdata.addressPoints[Mapdata.indexs[i]].author + "]" +
                Mapdata.addressPoints[Mapdata.indexs[i]].title);
            ul.appendChild(li);
        }
        var info = document.getElementById("searchinfo");
        info.innerHTML = ul.outerHTML;
    },
    updateBottom: function () {
        var bottomtd = document.getElementById("bottomtd");
        bottomtd.innerHTML = "";
        var islimit = false;
        if (this.conTagStatus !== "ALL") {
            bottomtd.innerHTML = bottomtd.innerHTML + '限定 "' + this.conTagText + '"';
            islimit = true;
        }
        if (this.proTagStatus !== "ALL") {
            if (islimit) {
                bottomtd.innerHTML = bottomtd.innerHTML + ' & ';
            } else {
                bottomtd.innerHTML = bottomtd.innerHTML + '限定 ';
                islimit = true;
            }
            bottomtd.innerHTML = bottomtd.innerHTML + '"' + this.proTagText + '"';
        }
        if (!islimit) {
            bottomtd.innerHTML = "无限定条件，全部" + Mapdata.indexs.length + "条数据";
        } else {
            bottomtd.innerHTML = bottomtd.innerHTML + "，筛选到" + Mapdata.indexs.length + "条";
        }
    },
    tagSelect: function (type, tag, text) {
        this.updateTags(type, tag);
        if (type === "pro") {
            this.proTagStatus = tag;
            this.proTagText = text;
        } else if (type === "con") {
            this.conTagStatus = tag;
            this.conTagText = text;
        } else if (type === "item") {
            this.itemStatus = tag;
        }
        if (type === "pro" || type === "con") {
            Mapdata.tagFilter(this.proTagStatus, this.conTagStatus);
            this.updateMap();
            this.updateBottom();
        } else if (type === "item") {
            //alert("将会在地图上打开：" + text);
        }
    },
    txtSearch: function (islimit) {
        this.searchType = islimit;
        if (islimit) {
            Mapdata.tagFilter(this.proTagStatus, this.conTagStatus);
        } else {
            Mapdata.tagFilter("ALL", "ALL");
        }
        var titletxt = document.getElementById("titlein").value;
        titletxt = this.txtcheck(titletxt);
        this.searchTitle = titletxt;
        if (titletxt !== "") {
            Mapdata.searchFilter("title", titletxt);
        }
        var authortxt = document.getElementById("authorin").value;
        authortxt = this.txtcheck(authortxt);
        this.searchAuthor = authortxt;
        if (authortxt !== "") {
            Mapdata.searchFilter("author", authortxt);
        }
        var locationtxt = document.getElementById("locationin").value;
        locationtxt = this.txtcheck(locationtxt);
        this.searchLocation = locationtxt;
        if (locationtxt !== "") {
            Mapdata.searchFilter("location", locationtxt);
        }
        this.updateMap();
        this.updateSearch();
        this.updateTags("item", "ALL");
        //                        alert("T=[" + this.searchTitle + "]A=[" + this.searchAuthor + "]L=[" + this.searchLocation + "][" + this.searchType + "]");
    },
    txtcheck: function (txt) {
        if (txt === null) {
            return "";
        }
        return txt.replace(" ", "");
    }
};
