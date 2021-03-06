
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

const select = (dataSet, options) => {
    if (!options) {
        return dataSet;
    }

    const optionsKeys = Object.keys(options);
    let optionIndex = 0;
    let filteredDataSet = [];

    if(optionsKeys.find(option => option === 'merge' && options.merge === true)) {
        dataSet = mergeItems(dataSet);
    }

    return getFilteredDataSet(dataSet, optionIndex);

    function getFilteredDataSet(dataSet, optionIndex) {
        if (optionIndex < optionsKeys.length) {
            if(optionsKeys[optionIndex] === "id") {
                filteredDataSet = getItemsById(dataSet);
            }
            if(optionsKeys[optionIndex] === "auto") {
                filteredDataSet = getItemsByAutoOption(dataSet)
            }
            if(optionsKeys[optionIndex] === "minPlayTime"){
                filteredDataSet = getItemsByMinPlayTime(dataSet)
            }

            optionIndex++;
            return getFilteredDataSet(filteredDataSet, optionIndex);
        } else {
            return filteredDataSet;
        }
    }

    function getItemsById(dataSet) {
        return dataSet.filter(record => record.id === options.id);
    }

    function getItemsByAutoOption(dataSet) {
        return dataSet.filter(record => record.auto === options.auto);
    }

    function getItemsByMinPlayTime(dataSet) {
        return dataSet.filter(record => record.playTime >= options.minPlayTime);
    }

    function mergeItems(dataSet) {
        let mergedData = [];
        let map = {};
        let item;

        dataSet.forEach(function(merged) {
            item = map[merged.id];

            if (item) {
                item.playTime += merged.playTime;
                item.auto = item.auto && merged.auto;
            } else {
                map[merged.id] = item = {
                    id: merged.id,
                    playTime: merged.playTime,
                    auto: merged.auto
                };
                mergedData.push(item);
            }
        })

        return mergedData;
    }
}

// Tests:
const example = [
    { id: 8, playTime:  500, auto: false },
    { id: 7, playTime: 1500, auto: true  },
    { id: 1, playTime:  100, auto: true  },
    { id: 7, playTime: 1000, auto: false },
    { id: 7, playTime: 2000, auto: false },
    { id: 2, playTime: 2000, auto: true  },
    { id: 2, playTime: 2000, auto: true  }
]

console.log("Test 1: ", select(example, {merge: false, minPlayTime: 4000}));
 /* Should return an empty array because merge=false */

console.log("Test 2: ", select(sample));
/* Should return original array */

console.log("Test 3: ", select(sample, {minPlayTime: 4000, merge: true}));
/* Should merge first and then apply the other filters */

