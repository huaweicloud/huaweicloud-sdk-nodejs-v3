import { ClouddcnSubnet } from './ClouddcnSubnet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateClouddcnSubnetResponse extends SdkResponse {
    private 'clouddcn_subnet'?: ClouddcnSubnet;
    public constructor() { 
        super();
    }
    public withClouddcnSubnet(clouddcnSubnet: ClouddcnSubnet): UpdateClouddcnSubnetResponse {
        this['clouddcn_subnet'] = clouddcnSubnet;
        return this;
    }
    public set clouddcnSubnet(clouddcnSubnet: ClouddcnSubnet  | undefined) {
        this['clouddcn_subnet'] = clouddcnSubnet;
    }
    public get clouddcnSubnet(): ClouddcnSubnet | undefined {
        return this['clouddcn_subnet'];
    }
}