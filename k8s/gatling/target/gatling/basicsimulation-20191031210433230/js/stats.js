var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30000",
        "ok": "3110",
        "ko": "26890"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "12",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "31879",
        "ok": "7328",
        "ko": "31879"
    },
    "meanResponseTime": {
        "total": "1079",
        "ok": "1141",
        "ko": "1072"
    },
    "standardDeviation": {
        "total": "1517",
        "ok": "1075",
        "ko": "1560"
    },
    "percentiles1": {
        "total": "1023",
        "ok": "876",
        "ko": "1023"
    },
    "percentiles2": {
        "total": "1028",
        "ok": "1403",
        "ko": "1027"
    },
    "percentiles3": {
        "total": "3073",
        "ok": "3104",
        "ko": "3073"
    },
    "percentiles4": {
        "total": "7173",
        "ok": "5522",
        "ko": "7209"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1419,
    "percentage": 5
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 655,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1036,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 26890,
    "percentage": 90
},
    "meanNumberOfRequestsPerSecond": {
        "total": "223.881",
        "ok": "23.209",
        "ko": "200.672"
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
        "ok": "3110",
        "ko": "26890"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "12",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "31879",
        "ok": "7328",
        "ko": "31879"
    },
    "meanResponseTime": {
        "total": "1079",
        "ok": "1141",
        "ko": "1072"
    },
    "standardDeviation": {
        "total": "1517",
        "ok": "1075",
        "ko": "1560"
    },
    "percentiles1": {
        "total": "1023",
        "ok": "876",
        "ko": "1023"
    },
    "percentiles2": {
        "total": "1028",
        "ok": "1403",
        "ko": "1027"
    },
    "percentiles3": {
        "total": "3073",
        "ok": "3104",
        "ko": "3073"
    },
    "percentiles4": {
        "total": "7174",
        "ok": "5522",
        "ko": "7209"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1419,
    "percentage": 5
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 655,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1036,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 26890,
    "percentage": 90
},
    "meanNumberOfRequestsPerSecond": {
        "total": "223.881",
        "ok": "23.209",
        "ko": "200.672"
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
