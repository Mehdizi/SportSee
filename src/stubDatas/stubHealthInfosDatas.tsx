export const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: "Karl",
      lastName: "Dovineau",
      age: 31,
    },
    todayScore: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
  },
  {
    id: 18,
    userInfos: {
      firstName: "Cecilia",
      lastName: "Ratorez",
      age: 34,
    },
    score: 0.3,
    keyData: {
      calorieCount: 2500,
      proteinCount: 90,
      carbohydrateCount: 150,
      lipidCount: 120,
    },
  },
];

export type UserHealthInfos = {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
};

export interface UserHealthGateway {
  load: (id: number) => Promise<UserHealthInfos>;
}

export class StubUserHealthInfos implements UserHealthGateway {
  private _stubValue?: UserHealthInfos;

  feedWith(stubValue: UserHealthInfos) {
    this._stubValue = stubValue;
  }

  async load(id: number) {
    return Promise.resolve(this._stubValue!);
  }
}

// export class AxiosUserHealthInfosGateway implements UserHealthGateway {
//   async load(id:number) {
//     const data = (await axios.get(`endpoint/${id}`)

//     return remap(data)

//   }

//   remap(datas) {
//     const { blabla, bloblo, blublu} = datas
//     if (datas.score) {
//       const {score} = datas
//       return {
//         nomUniformisé: score,
//         blabla,
//         bloblo,
//       }
//     }
//     return {

//     }
//   }
// }
