import { MetadataInstall } from './MetadataInstall';


export class OsReinstall {
    public adminpass?: string;
    public keyname?: string;
    public userid?: string;
    public metadata?: MetadataInstall;
    public constructor() { 
    }
    public withAdminpass(adminpass: string): OsReinstall {
        this['adminpass'] = adminpass;
        return this;
    }
    public withKeyname(keyname: string): OsReinstall {
        this['keyname'] = keyname;
        return this;
    }
    public withUserid(userid: string): OsReinstall {
        this['userid'] = userid;
        return this;
    }
    public withMetadata(metadata: MetadataInstall): OsReinstall {
        this['metadata'] = metadata;
        return this;
    }
}