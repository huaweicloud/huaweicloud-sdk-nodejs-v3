import { VpcPeering } from './VpcPeering';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVpcPeeringResponse extends SdkResponse {
    public peering?: VpcPeering;
    public constructor() { 
        super();
    }
    public withPeering(peering: VpcPeering): CreateVpcPeeringResponse {
        this['peering'] = peering;
        return this;
    }
}