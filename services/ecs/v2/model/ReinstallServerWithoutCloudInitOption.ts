

export class ReinstallServerWithoutCloudInitOption {
    public adminpass?: string;
    public keyname?: string;
    public userid?: string;
    public mode?: string;
    public constructor() { 
    }
    public withAdminpass(adminpass: string): ReinstallServerWithoutCloudInitOption {
        this['adminpass'] = adminpass;
        return this;
    }
    public withKeyname(keyname: string): ReinstallServerWithoutCloudInitOption {
        this['keyname'] = keyname;
        return this;
    }
    public withUserid(userid: string): ReinstallServerWithoutCloudInitOption {
        this['userid'] = userid;
        return this;
    }
    public withMode(mode: string): ReinstallServerWithoutCloudInitOption {
        this['mode'] = mode;
        return this;
    }
}