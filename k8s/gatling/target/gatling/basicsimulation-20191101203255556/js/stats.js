var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30000",
        "ok": "30000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1003",
        "ok": "1003",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1993",
        "ok": "1993",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1512",
        "ok": "1512",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "309",
        "ok": "309",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1351",
        "ok": "1351",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1812",
        "ok": "1812",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1900",
        "ok": "1900",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1941",
        "ok": "1941",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5138,
    "percentage": 17
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24862,
    "percentage": 83
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "194.805",
        "ok": "194.805",
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
        "total": "30000",
        "ok": "30000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1003",
        "ok": "1003",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1993",
        "ok": "1993",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1512",
        "ok": "1512",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "309",
        "ok": "309",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1351",
        "ok": "1351",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1812",
        "ok": "1812",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1900",
        "ok": "1900",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1941",
        "ok": "1941",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5138,
    "percentage": 17
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24862,
    "percentage": 83
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "194.805",
        "ok": "194.805",
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
