import { InsertPublicipInfo } from './InsertPublicipInfo';


export class AddPublicipsIntoSharedBandwidthOption {
    private 'publicip_info'?: Array<InsertPublicipInfo>;
    public constructor(publicipInfo?: Array<InsertPublicipInfo>) { 
        this['publicip_info'] = publicipInfo;
    }
    public withPublicipInfo(publicipInfo: Array<InsertPublicipInfo>): AddPublicipsIntoSharedBandwidthOption {
        this['publicip_info'] = publicipInfo;
        return this;
    }
    public set publicipInfo(publicipInfo: Array<InsertPublicipInfo>  | undefined) {
        this['publicip_info'] = publicipInfo;
    }
    public get publicipInfo(): Array<InsertPublicipInfo> | undefined {
        return this['publicip_info'];
    }
}