

export class PwdResetRequest {
    private 'db_user_pwd'?: string;
    public constructor(dbUserPwd?: string) { 
        this['db_user_pwd'] = dbUserPwd;
    }
    public withDbUserPwd(dbUserPwd: string): PwdResetRequest {
        this['db_user_pwd'] = dbUserPwd;
        return this;
    }
    public set dbUserPwd(dbUserPwd: string  | undefined) {
        this['db_user_pwd'] = dbUserPwd;
    }
    public get dbUserPwd(): string | undefined {
        return this['db_user_pwd'];
    }
}