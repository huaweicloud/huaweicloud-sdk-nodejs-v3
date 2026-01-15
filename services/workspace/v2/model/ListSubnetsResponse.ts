import { SingleSubnetInfo } from './SingleSubnetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubnetsResponse extends SdkResponse {
    public subnets?: Array<SingleSubnetInfo>;
    private 'subnet_size'?: number;
    public constructor() { 
        super();
    }
    public withSubnets(subnets: Array<SingleSubnetInfo>): ListSubnetsResponse {
        this['subnets'] = subnets;
        return this;
    }
    public withSubnetSize(subnetSize: number): ListSubnetsResponse {
        this['subnet_size'] = subnetSize;
        return this;
    }
    public set subnetSize(subnetSize: number  | undefined) {
        this['subnet_size'] = subnetSize;
    }
    public get subnetSize(): number | undefined {
        return this['subnet_size'];
    }
}