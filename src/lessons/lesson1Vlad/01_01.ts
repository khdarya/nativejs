type CityType = {
    title: string
    countryName: string
}
type AddressType = {
    streetName: string
    city: CityType
}
type HobbyType = {
    title: string
    level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
}
export type UserType = {
    name: string
    age: number
    isMarried: boolean
    address: AddressType
    hobbies: Array<HobbyType>
    children: Array<UserType>
}

let user1: UserType = {
    name: "Dimych",
    age: 33,
    isMarried: true,
    address: {
        streetName: "Nezalejnasci 21",
        city: {
            title: "Minsk",
            countryName: "Belarus"
        }
    },
    hobbies: [
        {title: "Dev", level: 10},
        {title: "Music", level: 3}
    ],
    children: [
        {
            name: "Misha",
            age: 3,
            isMarried: false,
            address: {
                streetName: "Nezalejnasci 21",
                city: {
                    title: "Minsk",
                    countryName: "Belarus"
                }
            },
            hobbies: [
                {title: "Games", level: 10}
            ],
            children: []
        }
    ]
}

console.log(user1.address.city.countryName)
console.log(user1.children[0].hobbies[0].title)

export function sum(a: number, b: number) {
    return a + b;
}
export function renameStreetIfUserLives(user: UserType, oldStreet: string, newStreet: string) {
    if (user.address.streetName === oldStreet) {
        user.address.streetName = newStreet;
    }
}

export const value01_01 = "01_01";
