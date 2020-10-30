
const sample = [
    { "id": 118748738, "playTime": 12002,   "auto": false },
    { "id": 118805291, "playTime": 17307,   "auto": false },
    { "id": 118801891, "playTime": 15466,   "auto": false },
    { "id": 118793510, "playTime": 5971,    "auto": true  },
    { "id": 118793313, "playTime": 5865,    "auto": false },
    { "id": 118793313, "playTime": 2302,    "auto": false },
    { "id": 118793510, "playTime": 6578,    "auto": false },
    { "id": 118764182, "playTime": 5726,    "auto": false },
    { "id": 118793510, "playTime": 6557,    "auto": false },
    { "id": 118793510, "playTime": 4103,    "auto": false },
    { "id": 118793510, "playTime": 16396,   "auto": false },
    { "id": 118748738, "playTime": 4203,    "auto": false },
    { "id": 118805291, "playTime": 24946,   "auto": false },
    { "id": 118805291, "playTime": 13112,   "auto": false },
    { "id": 118748738, "playTime": 3062,    "auto": false },
    { "id": 118805291, "playTime": 11299,   "auto": false },
    { "id": 118805291, "playTime": 3227,    "auto": false },
    { "id": 118748738, "playTime": 5113,    "auto": true  },
    { "id": 118805291, "playTime": 7186,    "auto": false },
    { "id": 118748738, "playTime": 10609,   "auto": true  },
    { "id": 118748738, "playTime": 3638,    "auto": false },
    { "id": 118805291, "playTime": 5801,    "auto": false },
    { "id": 118801891, "playTime": 2033206, "auto": false },
    { "id": 118805291, "playTime": 5749,    "auto": false },
    { "id": 116687134, "playTime": 4466,    "auto": false },
    { "id": 32124569,  "playTime": 124994,  "auto": false },
    { "id": 116687134, "playTime": 4466,    "auto": false },
    { "id": 32124569,  "playTime": 2355,    "auto": true  },
    { "id": 32124569,  "playTime": 124097,  "auto": false },
    { "id": 116687134, "playTime": 4466,    "auto": false },
    { "id": 32124569,  "playTime": 13493,   "auto": true  },
    { "id": 32124569,  "playTime": 112959,  "auto": false },
    { "id": 116687134, "playTime": 4466,    "auto": false },
    { "id": 32124569,  "playTime": 126453,  "auto": true  },
    { "id": 116687134, "playTime": 4466,    "auto": false },
    { "id": 32124569,  "playTime": 6273,    "auto": true  },
    { "id": 32124569,  "playTime": 120179,  "auto": false },
    { "id": 116687134, "playTime": 4466,    "auto": false },
    { "id": 32124569,  "playTime": 126453,  "auto": true  },
    { "id": 116687134, "playTime": 4466,    "auto": true  },
    { "id": 98491839,  "playTime": 5048,    "auto": true  },
    { "id": 118357426, "playTime": 7221,    "auto": false },
    { "id": 111091415, "playTime": 8682,    "auto": false },
    { "id": 116676275, "playTime": 9050,    "auto": false },
    { "id": 72504949,  "playTime": 6001,    "auto": false },
    { "id": 115286030, "playTime": 7416,    "auto": false },
    { "id": 111091415, "playTime": 6600,    "auto": false },
    { "id": 97604034,  "playTime": 6275,    "auto": false },
    { "id": 97610160,  "playTime": 10820,   "auto": false },
    { "id": 116676275, "playTime": 5833,    "auto": false }
]

const Select = (dataSet, options) => {
    const keysSet = Object.keys(options);
    let filterKey = 0;
    let filteredData = [];

    getFilteredDataSet(dataSet, filterKey);

    function getFilteredDataSet(filteredDataSet, filterKey) {
        if (filter < keysSet.length) {
            console.log("keys: ", keysSet[filterKey]);

            if(keysSet[filterKey] === "id") {
                filteredData = getItemsById();
            }
            if(keysSet[filterKey] === "auto") {
                filteredData = getItemsByAutoOption()
            }
            if(keysSet[filterKey] === "minPlayTime"){
                filteredData = getItemsByMinPlayTime()
            }
            if(keysSet[filterKey] === "merge"){
                filteredData = mergeItems()
            }

            console.log("filteredData: ", filteredData);
            filterKey++;
            getFilteredDataSet(filteredData, filterKey);
        }
    }

    function getItemsById() {
        return dataSet.filter(record => record.id === options.id);
    }

    function getItemsByAutoOption() {
        return dataSet.filter(record => record.auto === options.auto);
    }

    function getItemsByMinPlayTime() {
        return dataSet.filter(record => record.playTime >= options.minPlaytime);
    }

    function mergeItems() {
        console.log("mergeItems")
    }
}

