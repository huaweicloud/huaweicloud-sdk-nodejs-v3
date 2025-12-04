import { RespDeh } from './RespDeh';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDedicatedHostsByTagsResponse extends SdkResponse {
    public resources?: Array<RespDeh>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<RespDeh>): ListDedicatedHostsByTagsResponse {
        this['resources'] = resources;
        return this;
    }
    public withTotalCount(totalCount: number): ListDedicatedHostsByTagsResponse {
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