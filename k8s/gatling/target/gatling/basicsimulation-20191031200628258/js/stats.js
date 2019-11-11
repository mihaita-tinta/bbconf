var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4000",
        "ok": "3946",
        "ko": "54"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "69",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "7380",
        "ok": "7380",
        "ko": "1195"
    },
    "meanResponseTime": {
        "total": "1162",
        "ok": "1170",
        "ko": "542"
    },
    "standardDeviation": {
        "total": "797",
        "ok": "798",
        "ko": "287"
    },
    "percentiles1": {
        "total": "1008",
        "ok": "1013",
        "ko": "626"
    },
    "percentiles2": {
        "total": "1285",
        "ok": "1289",
        "ko": "711"
    },
    "percentiles3": {
        "total": "2232",
        "ok": "2236",
        "ko": "933"
    },
    "percentiles4": {
        "total": "5786",
        "ok": "5786",
        "ko": "1162"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1064,
    "percentage": 27
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1693,
    "percentage": 42
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1189,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 54,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "160",
        "ok": "157.84",
        "ko": "2.16"
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
        "ok": "3946",
        "ko": "54"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "69",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "7380",
        "ok": "7380",
        "ko": "1195"
    },
    "meanResponseTime": {
        "total": "1162",
        "ok": "1170",
        "ko": "542"
    },
    "standardDeviation": {
        "total": "797",
        "ok": "798",
        "ko": "287"
    },
    "percentiles1": {
        "total": "1008",
        "ok": "1013",
        "ko": "626"
    },
    "percentiles2": {
        "total": "1285",
        "ok": "1289",
        "ko": "711"
    },
    "percentiles3": {
        "total": "2232",
        "ok": "2236",
        "ko": "933"
    },
    "percentiles4": {
        "total": "5786",
        "ok": "5786",
        "ko": "1162"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1064,
    "percentage": 27
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1693,
    "percentage": 42
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1189,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 54,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "160",
        "ok": "157.84",
        "ko": "2.16"
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
