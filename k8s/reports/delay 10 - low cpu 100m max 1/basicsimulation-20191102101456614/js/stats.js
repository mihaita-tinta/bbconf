var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "20000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "58",
        "ok": "58",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5588",
        "ok": "5588",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "464",
        "ok": "464",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "percentiles1": {
        "total": "400",
        "ok": "400",
        "ko": "-"
    },
    "percentiles2": {
        "total": "520",
        "ok": "520",
        "ko": "-"
    },
    "percentiles3": {
        "total": "963",
        "ok": "963",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1674",
        "ok": "1674",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18357,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1093,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 550,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "210.526",
        "ok": "210.526",
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
        "total": "20000",
        "ok": "20000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "58",
        "ok": "58",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5588",
        "ok": "5588",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "464",
        "ok": "464",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "percentiles1": {
        "total": "400",
        "ok": "400",
        "ko": "-"
    },
    "percentiles2": {
        "total": "520",
        "ok": "520",
        "ko": "-"
    },
    "percentiles3": {
        "total": "963",
        "ok": "963",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1674",
        "ok": "1674",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18357,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1093,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 550,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "210.526",
        "ok": "210.526",
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
