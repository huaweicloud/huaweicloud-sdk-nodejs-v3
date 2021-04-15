import { ReinstallSeverMetadata } from './ReinstallSeverMetadata';


export class ReinstallServerWithCloudInitOption {
    public adminpass?: string;
    public keyname?: string;
    public userid?: string;
    public metadata?: ReinstallSeverMetadata;
    public mode?: string;
    public constructor() { 
    }
    public withAdminpass(adminpass: string): ReinstallServerWithCloudInitOption {
        this['adminpass'] = adminpass;
        return this;
    }
    public withKeyname(keyname: string): ReinstallServerWithCloudInitOption {
        this['keyname'] = keyname;
        return this;
    }
    public withUserid(userid: string): ReinstallServerWithCloudInitOption {
        this['userid'] = userid;
        return this;
    }
    public withMetadata(metadata: ReinstallSeverMetadata): ReinstallServerWithCloudInitOption {
        this['metadata'] = metadata;
        return this;
    }
    public withMode(mode: string): ReinstallServerWithCloudInitOption {
        this['mode'] = mode;
        return this;
    }
}