import { ResourceInstance } from './ResourceInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceByTagsResponse extends SdkResponse {
    private 'total_count'?: number;
    public resources?: Array<ResourceInstance>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListInstanceByTagsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withResources(resources: Array<ResourceInstance>): ListInstanceByTagsResponse {
        this['resources'] = resources;
        return this;
    }
}