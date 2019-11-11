var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8250",
        "ok": "8250",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "56",
        "ok": "56",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "44137",
        "ok": "44137",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "900",
        "ok": "900",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2882",
        "ok": "2882",
        "ko": "-"
    },
    "percentiles1": {
        "total": "341",
        "ok": "341",
        "ko": "-"
    },
    "percentiles2": {
        "total": "735",
        "ok": "735",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2481",
        "ok": "2481",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9530",
        "ok": "9530",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6363,
    "percentage": 77
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 761,
    "percentage": 9
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1126,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "104.43",
        "ok": "104.43",
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
        "total": "8250",
        "ok": "8250",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "56",
        "ok": "56",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "44137",
        "ok": "44137",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "900",
        "ok": "900",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2882",
        "ok": "2882",
        "ko": "-"
    },
    "percentiles1": {
        "total": "341",
        "ok": "341",
        "ko": "-"
    },
    "percentiles2": {
        "total": "735",
        "ok": "735",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2481",
        "ok": "2481",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9530",
        "ok": "9530",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6363,
    "percentage": 77
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 761,
    "percentage": 9
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1126,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "104.43",
        "ok": "104.43",
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
