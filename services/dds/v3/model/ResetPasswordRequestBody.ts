

export class ResetPasswordRequestBody {
    private 'user_pwd'?: string;
    private 'user_name'?: string;
    private 'db_name'?: string;
    public constructor(userPwd?: string) { 
        this['user_pwd'] = userPwd;
    }
    public withUserPwd(userPwd: string): ResetPasswordRequestBody {
        this['user_pwd'] = userPwd;
        return this;
    }
    public set userPwd(userPwd: string  | undefined) {
        this['user_pwd'] = userPwd;
    }
    public get userPwd(): string | undefined {
        return this['user_pwd'];
    }
    public withUserName(userName: string): ResetPasswordRequestBody {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDbName(dbName: string): ResetPasswordRequestBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
}