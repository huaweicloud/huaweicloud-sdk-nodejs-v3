

export class UserAuth {
    private 'user_id'?: string;
    private 'user_name'?: string;
    public auth?: UserAuthAuthEnum | number;
    public constructor(userId?: string, userName?: string, auth?: number) { 
        this['user_id'] = userId;
        this['user_name'] = userName;
        this['auth'] = auth;
    }
    public withUserId(userId: string): UserAuth {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): UserAuth {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAuth(auth: UserAuthAuthEnum | number): UserAuth {
        this['auth'] = auth;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UserAuthAuthEnum {
    NUMBER_7 = 7,
    NUMBER_3 = 3,
    NUMBER_1 = 1
}
