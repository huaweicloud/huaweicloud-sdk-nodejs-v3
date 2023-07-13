import { SubnetResult } from './SubnetResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSubnetResponse extends SdkResponse {
    public subnet?: SubnetResult;
    public constructor() { 
        super();
    }
    public withSubnet(subnet: SubnetResult): UpdateSubnetResponse {
        this['subnet'] = subnet;
        return this;
    }
}