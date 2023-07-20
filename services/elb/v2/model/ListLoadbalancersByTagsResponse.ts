import { ResourcesByTag } from './ResourcesByTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLoadbalancersByTagsResponse extends SdkResponse {
    private 'total_count'?: number;
    public resources?: Array<ResourcesByTag>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListLoadbalancersByTagsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withResources(resources: Array<ResourcesByTag>): ListLoadbalancersByTagsResponse {
        this['resources'] = resources;
        return this;
    }
}