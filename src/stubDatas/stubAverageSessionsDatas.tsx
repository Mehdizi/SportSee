export const USER_AVERAGE_SESSIONS = [
  {
    userId: 12,
    sessions: [
      {
        day: 1,
        sessionLength: 30,
      },
      {
        day: 2,
        sessionLength: 23,
      },
      {
        day: 3,
        sessionLength: 45,
      },
      {
        day: 4,
        sessionLength: 50,
      },
      {
        day: 5,
        sessionLength: 0,
      },
      {
        day: 6,
        sessionLength: 0,
      },
      {
        day: 7,
        sessionLength: 60,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: 1,
        sessionLength: 30,
      },
      {
        day: 2,
        sessionLength: 40,
      },
      {
        day: 3,
        sessionLength: 50,
      },
      {
        day: 4,
        sessionLength: 30,
      },
      {
        day: 5,
        sessionLength: 30,
      },
      {
        day: 6,
        sessionLength: 50,
      },
      {
        day: 7,
        sessionLength: 50,
      },
    ],
  },
];

export type UserAverageSessionsItems = {
  day: number;
  sessionLength: number;
};

export type UserAverageSessions = UserAverageSessionsItems[];

export interface UserAverageSessionsGateway {
  load: (id: number) => Promise<UserAverageSessions>;
}

export class StubUserAverageSessions implements UserAverageSessionsGateway {
  private _stubValue?: UserAverageSessions;
  feedWith(stubValue: UserAverageSessions) {
    this._stubValue = stubValue;
  }

  async load(id: number) {
    return Promise.resolve(this._stubValue!);
  }
}
