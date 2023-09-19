

export class ChangeModeReq {
    public authorityEnable?: boolean;
    public adminPwd?: string;
    public httpsEnable?: boolean;
    public constructor(authorityEnable?: boolean, httpsEnable?: boolean) { 
        this['authorityEnable'] = authorityEnable;
        this['httpsEnable'] = httpsEnable;
    }
    public withAuthorityEnable(authorityEnable: boolean): ChangeModeReq {
        this['authorityEnable'] = authorityEnable;
        return this;
    }
    public withAdminPwd(adminPwd: string): ChangeModeReq {
        this['adminPwd'] = adminPwd;
        return this;
    }
    public withHttpsEnable(httpsEnable: boolean): ChangeModeReq {
        this['httpsEnable'] = httpsEnable;
        return this;
    }
}