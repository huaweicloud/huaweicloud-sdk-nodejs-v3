import { ChangeSeversOsMetadata } from './ChangeSeversOsMetadata';


export class ChangeServerOsWithCloudInitOption {
    public adminpass?: string;
    public keyname?: string;
    public userid?: string;
    public imageid: string;
    public metadata?: ChangeSeversOsMetadata;
    public mode?: string;
    public constructor(imageid?: any) { 
        this['imageid'] = imageid;
    }
    public withAdminpass(adminpass: string): ChangeServerOsWithCloudInitOption {
        this['adminpass'] = adminpass;
        return this;
    }
    public withKeyname(keyname: string): ChangeServerOsWithCloudInitOption {
        this['keyname'] = keyname;
        return this;
    }
    public withUserid(userid: string): ChangeServerOsWithCloudInitOption {
        this['userid'] = userid;
        return this;
    }
    public withImageid(imageid: string): ChangeServerOsWithCloudInitOption {
        this['imageid'] = imageid;
        return this;
    }
    public withMetadata(metadata: ChangeSeversOsMetadata): ChangeServerOsWithCloudInitOption {
        this['metadata'] = metadata;
        return this;
    }
    public withMode(mode: string): ChangeServerOsWithCloudInitOption {
        this['mode'] = mode;
        return this;
    }
}