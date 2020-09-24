import {renameStreetIfUserLives, sum, UserType} from './01_01';

test("sum should return correct result", function() {
    // start data
    const a = 1;
    const b = 2;
    const c = 3;

    // action
    const result = sum(a, b)
    const result2 = sum(b, c)
    const result3 = sum(10, 20)

    // result datd
    expect(result).toBe(3);
    expect(result2).toBe(5);
    expect(result3).toBe(30);
})

test("Street should be overrided if equals Abc 21", function() {
    // start data
    let user1: UserType = {
        name: "Dimych",
        age: 33,
        isMarried: true,
        address: {
            streetName: "Abc 21",
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
    let user2: UserType = {
        name: "Dimych",
        age: 33,
        isMarried: true,
        address: {
            streetName: "JS 99",
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

    // action
    renameStreetIfUserLives(user1, "Abc 21", "xxx")
    expect(user1.address.streetName).toBe("xxx");

    renameStreetIfUserLives(user2, "Abc 21", "yyy")
    expect(user2.address.streetName).toBe("JS 99");

    renameStreetIfUserLives(user2, "JS 99", "REACT 100")
    expect(user2.address.streetName).toBe("REACT 100");


})
