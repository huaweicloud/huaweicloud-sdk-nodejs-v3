

export class CreateInstanceUserReq {
    private 'user_name'?: string;
    private 'user_passwd'?: string;
    public constructor() { 
    }
    public withUserName(userName: string): CreateInstanceUserReq {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserPasswd(userPasswd: string): CreateInstanceUserReq {
        this['user_passwd'] = userPasswd;
        return this;
    }
    public set userPasswd(userPasswd: string  | undefined) {
        this['user_passwd'] = userPasswd;
    }
    public get userPasswd(): string | undefined {
        return this['user_passwd'];
    }
}