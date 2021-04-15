import { InsertPublicipInfo } from './InsertPublicipInfo';


export class AddPublicipsIntoSharedBandwidthOption {
    private 'publicip_info': Array<InsertPublicipInfo> | undefined;
    public constructor(publicipInfo?: any) { 
        this['publicip_info'] = publicipInfo;
    }
    public withPublicipInfo(publicipInfo: Array<InsertPublicipInfo>): AddPublicipsIntoSharedBandwidthOption {
        this['publicip_info'] = publicipInfo;
        return this;
    }
    public set publicipInfo(publicipInfo: Array<InsertPublicipInfo> | undefined) {
        this['publicip_info'] = publicipInfo;
    }
    public get publicipInfo() {
        return this['publicip_info'];
    }
}