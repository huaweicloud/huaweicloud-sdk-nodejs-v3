

export class UserAuth {
    private 'user_id': string | undefined;
    private 'user_name': string | undefined;
    public auth: UserAuthAuthEnum;
    public constructor(userId?: any, userName?: any, auth?: any) { 
        this['user_id'] = userId;
        this['user_name'] = userName;
        this['auth'] = auth;
    }
    public withUserId(userId: string): UserAuth {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withUserName(userName: string): UserAuth {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withAuth(auth: UserAuthAuthEnum): UserAuth {
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
