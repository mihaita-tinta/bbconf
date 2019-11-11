var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "50000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1002",
        "ok": "1002",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3034",
        "ok": "3034",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2511",
        "ok": "2511",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "478",
        "ok": "478",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2846",
        "ok": "2847",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2923",
        "ok": "2923",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2961",
        "ok": "2961",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2983",
        "ok": "2983",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1884,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 48116,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "196.078",
        "ok": "196.078",
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
        "total": "50000",
        "ok": "50000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1002",
        "ok": "1002",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3034",
        "ok": "3034",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2511",
        "ok": "2511",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "478",
        "ok": "478",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2846",
        "ok": "2846",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2923",
        "ok": "2923",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2961",
        "ok": "2961",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2983",
        "ok": "2983",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1884,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 48116,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "196.078",
        "ok": "196.078",
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
