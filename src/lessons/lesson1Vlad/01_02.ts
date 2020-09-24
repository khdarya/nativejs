export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType
}

export type HouseType = {
    id: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type BuildingTypeType = "HOSPITAL" | "FIRE-STATION";

export type GovernmentBuildingType = {
    type: BuildingTypeType
    budget: number
    staffCount: number
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}
export const addMoneyToBudget = (buildings: Array<GovernmentBuildingType>,
                                 type: BuildingTypeType,
                                 moneyCount: number) => {
    for (let i = 0; i < buildings.length; i++) {
        if (buildings[i].type === type) {
            buildings[i].budget += moneyCount
        }
    }
}

export const demolishHousesOnTheStreet = (city: CityType, streetName: string) => {
    city.houses = city.houses.filter((house) => {
        return house.address.street.title !== streetName;
    });
}
export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingType, staffCount: number) => {
    building.staffCount -= staffCount;
}
export const toHireStaff = (building: GovernmentBuildingType, staffCount: number) => {
    building.staffCount += staffCount;
}

export const getStreetsTitlesOfGovernmentsBuildings = (
    buildings: Array<GovernmentBuildingType>
) => {
    const arrayIfTitles: Array<string> = [];

    for (let i = 0; i < buildings.length; i++) {
        arrayIfTitles.push(buildings[i].address.street.title)
    }

    return arrayIfTitles;
}
export const getStreetsTitlesOfHouses = (
    houses: Array<HouseType>
) => {
    return houses.map((house) => {
        return house.address.street.title;
    })
}

export function getHousesOnTheStreet(houses: Array<HouseType>,
                                     streetName: string) {
    return houses.filter((h) => {
        return h.address.street.title === streetName
    })
}

export function getBuildingsWithStaffCountGreaterThen(
    buildings: Array<GovernmentBuildingType>,
    staffCount: number) {

    return buildings.filter((b) => {
        return b.staffCount > staffCount
    })
}
