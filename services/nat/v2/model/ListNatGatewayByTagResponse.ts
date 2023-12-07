import { PublicResource } from './PublicResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNatGatewayByTagResponse extends SdkResponse {
    public resources?: Array<PublicResource>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<PublicResource>): ListNatGatewayByTagResponse {
        this['resources'] = resources;
        return this;
    }
    public withTotalCount(totalCount: number): ListNatGatewayByTagResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}