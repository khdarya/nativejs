import {
    addMoneyToBudget,
    CityType,
    demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen, getHousesOnTheStreet,
    getStreetsTitlesOfGovernmentsBuildings, getStreetsTitlesOfHouses,
    repairHouse,
    toFireStaff,
    toHireStaff
} from './01_02';

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: { title: "White street"}
                }
            },
            {
                id: 2, buildedAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: { title: "Happy street" }
                }
            },
            {
                id: 3, buildedAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: { title: "Happy street" }
                }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                address: { street: { title: "Central Str"}, number: 12},
                budget: 200000, staffCount: 200
            },
            {
                type: "FIRE-STATION",
                address: { street: { title: "South Str" }, number: 12 },
                budget: 500000, staffCount: 1000
            }
        ],
        citizensNumber: 1000000
    }
})

// 01. создайте тип CityType
// 02.заполните объект city, чтобы тесты ниже прошли
test("test city should contains 3 houses", () => {

    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White street");

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe("Happy street");

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe("Happy street");
})

// 01. дополните тип GovernmentBuildingType
// 02. заполните объект city, чтобы тесты ниже прошли
test("test city should contains hospital and fire station", () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe("HOSPITAL");
    expect(city.governmentBuildings[0].budget).toBe(200000);
    expect(city.governmentBuildings[0].staffCount).toBe(200);
    expect(city.governmentBuildings[0].address.street.title).toBe("Central Str");

    expect(city.governmentBuildings[1].type).toBe("FIRE-STATION");
    expect(city.governmentBuildings[1].budget).toBe(500000);
    expect(city.governmentBuildings[1].staffCount).toBe(1000);
    expect(city.governmentBuildings[1].address.street.title).toBe("South Str");
})

// 01. создайте в отдельном файле функцию, чтобы тесты прошли
test("Budget should be changed for HOSPITAL ", () => {
    addMoneyToBudget(city.governmentBuildings, 'HOSPITAL', 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000)
    expect(city.governmentBuildings[1].budget).toBe(500000)
})

// 01. Тесты должны пройти
test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings, 'FIRE-STATION', -100000);

    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

// 01. дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test("Houses should be destroyed", () => {
    demolishHousesOnTheStreet(city, "Happy street");

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test("House shoulhd be repared", () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
})

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test("staff should be increased", () => {
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180);
})
// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test("House shoulhd be repared", () => {
    toHireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(220);
})

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test("list of streets titles of goverments buildings", () => {
    let streets = getStreetsTitlesOfGovernmentsBuildings(
        city.governmentBuildings);

    expect(streets.length).toBe(2);
    expect(streets[0]).toBe("Central Str");
    expect(streets[1]).toBe("South Str");
})
// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test("list of streets titles", () => {
    let streets = getStreetsTitlesOfHouses(city.houses);

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("White street");
    expect(streets[1]).toBe("Happy street");
    expect(streets[2]).toBe("Happy street");
})
// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test("list of streets titles of houses", () => {
    let happyHouses = getHousesOnTheStreet(city.houses, "Happy street");
    let whiteHouses = getHousesOnTheStreet(city.houses, "White street");

    expect(happyHouses.length).toBe(2);
    expect(whiteHouses.length).toBe(1);
})

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test("buildings with correct staff count", () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("FIRE-STATION");
})








