import { NeutronSubnet } from './NeutronSubnet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronUpdateSubnetResponse extends SdkResponse {
    public subnet?: NeutronSubnet;
    public constructor() { 
        super();
    }
    public withSubnet(subnet: NeutronSubnet): NeutronUpdateSubnetResponse {
        this['subnet'] = subnet;
        return this;
    }
}