import { NeutronSubnet } from './NeutronSubnet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronShowSubnetResponse extends SdkResponse {
    public subnet?: NeutronSubnet;
    public constructor() { 
        super();
    }
    public withSubnet(subnet: NeutronSubnet): NeutronShowSubnetResponse {
        this['subnet'] = subnet;
        return this;
    }
}