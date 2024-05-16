

export class StarRocksDatabaseUserPWinfo {
    private 'user_name'?: string;
    public password?: string;
    public constructor(userName?: string, password?: string) { 
        this['user_name'] = userName;
        this['password'] = password;
    }
    public withUserName(userName: string): StarRocksDatabaseUserPWinfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPassword(password: string): StarRocksDatabaseUserPWinfo {
        this['password'] = password;
        return this;
    }
}