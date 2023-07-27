import { MetadataInstall } from './MetadataInstall';


export class OsChange {
    public adminpass?: string;
    public keyname?: string;
    public userid?: string;
    public imageid?: string;
    public metadata?: MetadataInstall;
    public constructor(imageid?: string) { 
        this['imageid'] = imageid;
    }
    public withAdminpass(adminpass: string): OsChange {
        this['adminpass'] = adminpass;
        return this;
    }
    public withKeyname(keyname: string): OsChange {
        this['keyname'] = keyname;
        return this;
    }
    public withUserid(userid: string): OsChange {
        this['userid'] = userid;
        return this;
    }
    public withImageid(imageid: string): OsChange {
        this['imageid'] = imageid;
        return this;
    }
    public withMetadata(metadata: MetadataInstall): OsChange {
        this['metadata'] = metadata;
        return this;
    }
}