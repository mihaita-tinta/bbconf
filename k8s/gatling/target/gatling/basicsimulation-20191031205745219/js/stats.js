var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "18300",
        "ok": "18300",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2191",
        "ok": "2191",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "542",
        "ok": "542",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "411",
        "ok": "411",
        "ko": "-"
    },
    "percentiles1": {
        "total": "444",
        "ok": "444",
        "ko": "-"
    },
    "percentiles2": {
        "total": "887",
        "ok": "887",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1288",
        "ok": "1287",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1454",
        "ok": "1454",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12901,
    "percentage": 70
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3942,
    "percentage": 22
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1457,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "234.615",
        "ok": "234.615",
        "ko": "-"
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
        "total": "18300",
        "ok": "18300",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2191",
        "ok": "2191",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "542",
        "ok": "542",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "411",
        "ok": "411",
        "ko": "-"
    },
    "percentiles1": {
        "total": "444",
        "ok": "444",
        "ko": "-"
    },
    "percentiles2": {
        "total": "887",
        "ok": "887",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1288",
        "ok": "1288",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1454",
        "ok": "1454",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12901,
    "percentage": 70
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3942,
    "percentage": 22
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1457,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "234.615",
        "ok": "234.615",
        "ko": "-"
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
