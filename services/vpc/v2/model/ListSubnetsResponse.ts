import { Subnet } from './Subnet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubnetsResponse extends SdkResponse {
    public subnets?: Array<Subnet>;
    public constructor() { 
        super();
    }
    public withSubnets(subnets: Array<Subnet>): ListSubnetsResponse {
        this['subnets'] = subnets;
        return this;
    }
}