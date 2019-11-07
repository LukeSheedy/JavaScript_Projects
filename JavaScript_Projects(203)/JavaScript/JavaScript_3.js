function displayType(truck) {
    var truckType= truck.getAttribute("data-truck_type");
    alert(truckType + "is the main truck in" + truck.innerHTML + "Lineup.");
}