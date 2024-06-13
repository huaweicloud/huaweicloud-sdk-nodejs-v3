import { ListResourceResp } from './ListResourceResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityGroupsByTagsResponse extends SdkResponse {
    public resources?: Array<ListResourceResp>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<ListResourceResp>): ListSecurityGroupsByTagsResponse {
        this['resources'] = resources;
        return this;
    }
    public withTotalCount(totalCount: number): ListSecurityGroupsByTagsResponse {
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