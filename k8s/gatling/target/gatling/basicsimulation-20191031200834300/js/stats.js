var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4000",
        "ok": "4000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3695",
        "ok": "3695",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1363",
        "ok": "1363",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "623",
        "ok": "623",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1280",
        "ok": "1280",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1595",
        "ok": "1595",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3055",
        "ok": "3055",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3361",
        "ok": "3361",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 595,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1140,
    "percentage": 28
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2265,
    "percentage": 57
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "137.931",
        "ok": "137.931",
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
        "total": "4000",
        "ok": "4000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3695",
        "ok": "3695",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1363",
        "ok": "1363",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "623",
        "ok": "623",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1280",
        "ok": "1280",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1595",
        "ok": "1595",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3055",
        "ok": "3055",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3361",
        "ok": "3361",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 595,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1140,
    "percentage": 28
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2265,
    "percentage": 57
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "137.931",
        "ok": "137.931",
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
