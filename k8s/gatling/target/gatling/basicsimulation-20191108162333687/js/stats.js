var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5000",
        "ok": "5000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1046",
        "ok": "1046",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3615",
        "ok": "3615",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1258",
        "ok": "1258",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "417",
        "ok": "417",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1125",
        "ok": "1125",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1202",
        "ok": "1202",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2074",
        "ok": "2074",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3440",
        "ok": "3440",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3738,
    "percentage": 75
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1262,
    "percentage": 25
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "75.758",
        "ok": "75.758",
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
        "total": "5000",
        "ok": "5000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1046",
        "ok": "1046",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3615",
        "ok": "3615",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1258",
        "ok": "1258",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "417",
        "ok": "417",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1125",
        "ok": "1124",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1202",
        "ok": "1202",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2074",
        "ok": "2074",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3440",
        "ok": "3440",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3738,
    "percentage": 75
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1262,
    "percentage": 25
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "75.758",
        "ok": "75.758",
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
