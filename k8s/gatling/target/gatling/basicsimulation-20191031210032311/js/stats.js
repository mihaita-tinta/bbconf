var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "35700",
        "ok": "35700",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1760",
        "ok": "1760",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "522",
        "ok": "522",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "126",
        "ok": "126",
        "ko": "-"
    },
    "percentiles1": {
        "total": "511",
        "ok": "511",
        "ko": "-"
    },
    "percentiles2": {
        "total": "581",
        "ok": "581",
        "ko": "-"
    },
    "percentiles3": {
        "total": "717",
        "ok": "717",
        "ko": "-"
    },
    "percentiles4": {
        "total": "950",
        "ok": "950",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 34779,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 834,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 87,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "557.812",
        "ok": "557.812",
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
        "total": "35700",
        "ok": "35700",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1760",
        "ok": "1760",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "522",
        "ok": "522",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "126",
        "ok": "126",
        "ko": "-"
    },
    "percentiles1": {
        "total": "511",
        "ok": "511",
        "ko": "-"
    },
    "percentiles2": {
        "total": "581",
        "ok": "581",
        "ko": "-"
    },
    "percentiles3": {
        "total": "717",
        "ok": "717",
        "ko": "-"
    },
    "percentiles4": {
        "total": "950",
        "ok": "950",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 34779,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 834,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 87,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "557.812",
        "ok": "557.812",
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
