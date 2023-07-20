import { ChangeSeversOsMetadataWithoutCloudInitOption } from './ChangeSeversOsMetadataWithoutCloudInitOption';


export class ChangeServerOsWithoutCloudInitOption {
    public adminpass?: string;
    public keyname?: string;
    public userid?: string;
    public imageid?: string;
    public mode?: string;
    public metadata?: ChangeSeversOsMetadataWithoutCloudInitOption;
    public constructor(imageid?: string) { 
        this['imageid'] = imageid;
    }
    public withAdminpass(adminpass: string): ChangeServerOsWithoutCloudInitOption {
        this['adminpass'] = adminpass;
        return this;
    }
    public withKeyname(keyname: string): ChangeServerOsWithoutCloudInitOption {
        this['keyname'] = keyname;
        return this;
    }
    public withUserid(userid: string): ChangeServerOsWithoutCloudInitOption {
        this['userid'] = userid;
        return this;
    }
    public withImageid(imageid: string): ChangeServerOsWithoutCloudInitOption {
        this['imageid'] = imageid;
        return this;
    }
    public withMode(mode: string): ChangeServerOsWithoutCloudInitOption {
        this['mode'] = mode;
        return this;
    }
    public withMetadata(metadata: ChangeSeversOsMetadataWithoutCloudInitOption): ChangeServerOsWithoutCloudInitOption {
        this['metadata'] = metadata;
        return this;
    }
}