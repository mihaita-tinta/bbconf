var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60000",
        "ok": "60000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1360",
        "ok": "1360",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "490",
        "ok": "490",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "185",
        "ok": "185",
        "ko": "-"
    },
    "percentiles1": {
        "total": "483",
        "ok": "483",
        "ko": "-"
    },
    "percentiles2": {
        "total": "647",
        "ok": "647",
        "ko": "-"
    },
    "percentiles3": {
        "total": "779",
        "ok": "779",
        "ko": "-"
    },
    "percentiles4": {
        "total": "878",
        "ok": "878",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 57966,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2026,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "600",
        "ok": "600",
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
        "total": "60000",
        "ok": "60000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1360",
        "ok": "1360",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "490",
        "ok": "490",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "185",
        "ok": "185",
        "ko": "-"
    },
    "percentiles1": {
        "total": "483",
        "ok": "483",
        "ko": "-"
    },
    "percentiles2": {
        "total": "647",
        "ok": "647",
        "ko": "-"
    },
    "percentiles3": {
        "total": "779",
        "ok": "779",
        "ko": "-"
    },
    "percentiles4": {
        "total": "878",
        "ok": "878",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 57966,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2026,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "600",
        "ok": "600",
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
