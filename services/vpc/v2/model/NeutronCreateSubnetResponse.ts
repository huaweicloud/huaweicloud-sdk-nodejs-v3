import { NeutronSubnet } from './NeutronSubnet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronCreateSubnetResponse extends SdkResponse {
    public subnet?: NeutronSubnet;
    public constructor() { 
        super();
    }
    public withSubnet(subnet: NeutronSubnet): NeutronCreateSubnetResponse {
        this['subnet'] = subnet;
        return this;
    }
}