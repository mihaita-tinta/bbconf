var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "17420",
        "ok": "17420",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2011",
        "ok": "2011",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "203",
        "ok": "203",
        "ko": "-"
    },
    "percentiles1": {
        "total": "314",
        "ok": "314",
        "ko": "-"
    },
    "percentiles2": {
        "total": "432",
        "ok": "432",
        "ko": "-"
    },
    "percentiles3": {
        "total": "701",
        "ok": "701",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1095",
        "ok": "1095",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 16857,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 477,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 86,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "276.508",
        "ok": "276.508",
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
        "total": "17420",
        "ok": "17420",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2011",
        "ok": "2011",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "203",
        "ok": "203",
        "ko": "-"
    },
    "percentiles1": {
        "total": "314",
        "ok": "314",
        "ko": "-"
    },
    "percentiles2": {
        "total": "432",
        "ok": "432",
        "ko": "-"
    },
    "percentiles3": {
        "total": "701",
        "ok": "701",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1095",
        "ok": "1095",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 16857,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 477,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 86,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "276.508",
        "ok": "276.508",
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
