

export class ChangeModeReq {
    private 'authority_enable'?: boolean;
    private 'admin_pwd'?: string;
    private 'https_enable'?: boolean;
    public constructor(authorityEnable?: boolean, httpsEnable?: boolean) { 
        this['authority_enable'] = authorityEnable;
        this['https_enable'] = httpsEnable;
    }
    public withAuthorityEnable(authorityEnable: boolean): ChangeModeReq {
        this['authority_enable'] = authorityEnable;
        return this;
    }
    public set authorityEnable(authorityEnable: boolean  | undefined) {
        this['authority_enable'] = authorityEnable;
    }
    public get authorityEnable(): boolean | undefined {
        return this['authority_enable'];
    }
    public withAdminPwd(adminPwd: string): ChangeModeReq {
        this['admin_pwd'] = adminPwd;
        return this;
    }
    public set adminPwd(adminPwd: string  | undefined) {
        this['admin_pwd'] = adminPwd;
    }
    public get adminPwd(): string | undefined {
        return this['admin_pwd'];
    }
    public withHttpsEnable(httpsEnable: boolean): ChangeModeReq {
        this['https_enable'] = httpsEnable;
        return this;
    }
    public set httpsEnable(httpsEnable: boolean  | undefined) {
        this['https_enable'] = httpsEnable;
    }
    public get httpsEnable(): boolean | undefined {
        return this['https_enable'];
    }
}