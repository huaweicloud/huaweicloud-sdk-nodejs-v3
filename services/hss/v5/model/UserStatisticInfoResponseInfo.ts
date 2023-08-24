

export class UserStatisticInfoResponseInfo {
    private 'user_name'?: string;
    public num?: number;
    public constructor() { 
    }
    public withUserName(userName: string): UserStatisticInfoResponseInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withNum(num: number): UserStatisticInfoResponseInfo {
        this['num'] = num;
        return this;
    }
}