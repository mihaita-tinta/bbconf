var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "56",
        "ok": "56",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "41330",
        "ok": "41330",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "900",
        "ok": "900",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2510",
        "ok": "2510",
        "ko": "-"
    },
    "percentiles1": {
        "total": "400",
        "ok": "400",
        "ko": "-"
    },
    "percentiles2": {
        "total": "765",
        "ok": "765",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2439",
        "ok": "2439",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10412",
        "ok": "10412",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7626,
    "percentage": 76
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 958,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1416,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "102.041",
        "ok": "102.041",
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
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "56",
        "ok": "56",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "41330",
        "ok": "41330",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "900",
        "ok": "900",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2510",
        "ok": "2510",
        "ko": "-"
    },
    "percentiles1": {
        "total": "400",
        "ok": "400",
        "ko": "-"
    },
    "percentiles2": {
        "total": "765",
        "ok": "765",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2439",
        "ok": "2439",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10412",
        "ok": "10412",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7626,
    "percentage": 76
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 958,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1416,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "102.041",
        "ok": "102.041",
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
