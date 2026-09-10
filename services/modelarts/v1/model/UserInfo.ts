

export class UserInfo {
    public userName?: string;
    public constructor() { 
    }
    public withUserName(userName: string): UserInfo {
        this['userName'] = userName;
        return this;
    }
}