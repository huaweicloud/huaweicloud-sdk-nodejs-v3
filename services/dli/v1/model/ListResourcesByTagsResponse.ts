import { Resource } from './Resource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourcesByTagsResponse extends SdkResponse {
    private 'total_count'?: number;
    public resources?: Array<Resource>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListResourcesByTagsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withResources(resources: Array<Resource>): ListResourcesByTagsResponse {
        this['resources'] = resources;
        return this;
    }
}