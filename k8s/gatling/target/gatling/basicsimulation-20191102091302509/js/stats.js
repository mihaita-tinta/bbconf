var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "16203",
        "ko": "33797"
    },
    "minResponseTime": {
        "total": "81",
        "ok": "1047",
        "ko": "81"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "9904",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "1148",
        "ok": "1530",
        "ko": "964"
    },
    "standardDeviation": {
        "total": "4172",
        "ok": "678",
        "ko": "5042"
    },
    "percentiles1": {
        "total": "330",
        "ok": "1117",
        "ko": "270"
    },
    "percentiles2": {
        "total": "1068",
        "ok": "2388",
        "ko": "333"
    },
    "percentiles3": {
        "total": "2636",
        "ok": "2708",
        "ko": "1094"
    },
    "percentiles4": {
        "total": "20107",
        "ok": "2855",
        "ko": "20127"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9788,
    "percentage": 20
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6415,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "count": 33797,
    "percentage": 68
},
    "meanNumberOfRequestsPerSecond": {
        "total": "251.256",
        "ok": "81.422",
        "ko": "169.834"
    }
},
contents: {
"req_me-ab86a": {
        type: "REQUEST",
        name: "me",
path: "me",
pathFormatted: "req_me-ab86a",
stats: {
    "name": "me",
    "numberOfRequests": {
        "total": "50000",
        "ok": "16203",
        "ko": "33797"
    },
    "minResponseTime": {
        "total": "81",
        "ok": "1047",
        "ko": "81"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "9904",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "1148",
        "ok": "1530",
        "ko": "964"
    },
    "standardDeviation": {
        "total": "4172",
        "ok": "678",
        "ko": "5042"
    },
    "percentiles1": {
        "total": "329",
        "ok": "1117",
        "ko": "270"
    },
    "percentiles2": {
        "total": "1068",
        "ok": "2388",
        "ko": "333"
    },
    "percentiles3": {
        "total": "2635",
        "ok": "2708",
        "ko": "1094"
    },
    "percentiles4": {
        "total": "20107",
        "ok": "2854",
        "ko": "20127"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9788,
    "percentage": 20
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6415,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "count": 33797,
    "percentage": 68
},
    "meanNumberOfRequestsPerSecond": {
        "total": "251.256",
        "ok": "81.422",
        "ko": "169.834"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
