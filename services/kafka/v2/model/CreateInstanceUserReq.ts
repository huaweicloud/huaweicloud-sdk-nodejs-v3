

export class CreateInstanceUserReq {
    private 'user_name'?: string | undefined;
    private 'user_passwd'?: string | undefined;
    public constructor() { 
    }
    public withUserName(userName: string): CreateInstanceUserReq {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withUserPasswd(userPasswd: string): CreateInstanceUserReq {
        this['user_passwd'] = userPasswd;
        return this;
    }
    public set userPasswd(userPasswd: string | undefined) {
        this['user_passwd'] = userPasswd;
    }
    public get userPasswd() {
        return this['user_passwd'];
    }
}