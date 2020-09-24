const testObj = {
    country: 'Belarus',
    capital: {
        name: 'Minsk',
        population: 2000000,
        districts: [
            {
                districtName: 'Фрунзенский',
                population: 700000,
                ///transport: [1, 2, 4],
            },
            {
                districtName: 'Московский',
                population: 350000, /// 400000
            },
            /// {districtName: 'Уручье', population: 250000}
        ],
        isFootballTeam: true, /// false
    },
    population: 10000000
}
const payload = 'bus';

// function f1(state, payload = true) {
//     return {
//         ...state,
//         capital: {...state.capital, isFootballTeam: payload}
//     }
// }

// function f(state, payload) {
//     return {
//         ...state,
//         capital: {...state.capital, districts:  state.capital.districts.map(dist => {
//                 if (dist.districtName === 'Фрунзенский') {
//                     if (dist.transport) {
//                         return {
//                             ...dist, transport: [...dist.transport, payload],
//                         }
//                     }
//                     return {
//                         ...dist, transport: [payload],
//                     }
//                 }
//                 return dist;
//             })}
//     }
// }

// function f(state, payload) {
//     return {
//         ...state,
//         capital: {...state.capital, districts: state.capital.districts.map(dist => {
//             if (dist.districtName === 'Московский') {
//                 return {
//                     ...dist,
//                     population: 400000,
//                 }
//             }
//             return dist;
//             }) }
//     }
// }

// function f(state) {
//    return {
//        ...state,
//        capital: {...state.capital, districts: [...state.capital.districts, payload]}
//    }
// }