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
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1485",
        "ok": "1485",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "536",
        "ok": "536",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "192",
        "ok": "192",
        "ko": "-"
    },
    "percentiles1": {
        "total": "499",
        "ok": "499",
        "ko": "-"
    },
    "percentiles2": {
        "total": "646",
        "ok": "646",
        "ko": "-"
    },
    "percentiles3": {
        "total": "895",
        "ok": "895",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1098",
        "ok": "1098",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 26846,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3067,
    "percentage": 10
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
        "total": "270.27",
        "ok": "270.27",
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
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1485",
        "ok": "1485",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "536",
        "ok": "536",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "192",
        "ok": "192",
        "ko": "-"
    },
    "percentiles1": {
        "total": "499",
        "ok": "499",
        "ko": "-"
    },
    "percentiles2": {
        "total": "646",
        "ok": "646",
        "ko": "-"
    },
    "percentiles3": {
        "total": "895",
        "ok": "895",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1098",
        "ok": "1098",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 26846,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3067,
    "percentage": 10
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
        "total": "270.27",
        "ok": "270.27",
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
