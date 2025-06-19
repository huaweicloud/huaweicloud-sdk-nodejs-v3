import { Resource } from './Resource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountResourcesByTagsResponse extends SdkResponse {
    private 'total_count'?: number;
    public resources?: Array<Resource>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): CountResourcesByTagsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withResources(resources: Array<Resource>): CountResourcesByTagsResponse {
        this['resources'] = resources;
        return this;
    }
}