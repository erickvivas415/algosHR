function processData(input) {
    //Enter your code here
    // N buildings, H height, I energy he loses

    var inputArr = [],
        n = 0,
        h = 0,
        jumpHeight = 0,
        buildings = [],
        buildingTenants = [],
        maxOnFloor = [],
        buildingSetup = [];

    inputArr = input.split("\n");
    buildingSetup = inputArr[0].split(" ");
    n = parseInt(buildingSetup[0]);
    h = parseInt(buildingSetup[1]);
    jumpHeight = parseInt(buildingSetup[2]);

    // Create the building matrix
    buildings = new Array(n);
    buildingTenants = new Array(n);
    maxOnFloor = new Array(h);
    for (var j = 0; j < n; j++) {
        buildings[j] = (new Array(h)).fill(0);
    }

    // Set tenants count per floor in the building
    for (var i = 1; i < inputArr.length; i++) {
        var floorInfo = inputArr[i].split(" ");
        var buildingIndex = i - 1;
        buildingTenants[buildingIndex] = parseInt(floorInfo[0]);
        for (j = 1; j < floorInfo.length; j++) {
            var floorNumber = parseInt(floorInfo[j]) - 1;
            buildings[buildingIndex][floorNumber]++;
        }
    }

    for (i = 0; i < h; i++) {
        maxOnFloor[i] = 0;
        for (j = 0; j < buildings.length; j++) {
            if (i > jumpHeight - 1) {
                buildings[j][i] += Math.max(buildings[j][i - 1], maxOnFloor[i - jumpHeight]);
            }
            else if (i > 0) {
                buildings[j][i] += buildings[j][i - 1];
            }
            if (maxOnFloor[i] < buildings[j][i]) {
                maxOnFloor[i] = buildings[j][i];
            }
        }
    }
    console.log(maxOnFloor[i - 1]);
} 