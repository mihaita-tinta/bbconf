var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "23500",
        "ok": "23500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1126",
        "ok": "1126",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "261",
        "ok": "261",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "percentiles1": {
        "total": "245",
        "ok": "245",
        "ko": "-"
    },
    "percentiles2": {
        "total": "310",
        "ok": "310",
        "ko": "-"
    },
    "percentiles3": {
        "total": "427",
        "ok": "427",
        "ko": "-"
    },
    "percentiles4": {
        "total": "575",
        "ok": "575",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23469,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 31,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "367.188",
        "ok": "367.188",
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
        "total": "23500",
        "ok": "23500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1126",
        "ok": "1126",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "261",
        "ok": "261",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "percentiles1": {
        "total": "245",
        "ok": "245",
        "ko": "-"
    },
    "percentiles2": {
        "total": "310",
        "ok": "310",
        "ko": "-"
    },
    "percentiles3": {
        "total": "427",
        "ok": "427",
        "ko": "-"
    },
    "percentiles4": {
        "total": "575",
        "ok": "575",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23469,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 31,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "367.188",
        "ok": "367.188",
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
