import { ClouddcnSubnet } from './ClouddcnSubnet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClouddcnSubnetsResponse extends SdkResponse {
    private 'clouddcn_subnets'?: Array<ClouddcnSubnet>;
    public constructor() { 
        super();
    }
    public withClouddcnSubnets(clouddcnSubnets: Array<ClouddcnSubnet>): ListClouddcnSubnetsResponse {
        this['clouddcn_subnets'] = clouddcnSubnets;
        return this;
    }
    public set clouddcnSubnets(clouddcnSubnets: Array<ClouddcnSubnet>  | undefined) {
        this['clouddcn_subnets'] = clouddcnSubnets;
    }
    public get clouddcnSubnets(): Array<ClouddcnSubnet> | undefined {
        return this['clouddcn_subnets'];
    }
}