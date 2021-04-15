import { Resource } from './Resource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVolumesByTagsResponse extends SdkResponse {
    private 'total_count'?: number | undefined;
    public resources?: Array<Resource>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListVolumesByTagsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount() {
        return this['total_count'];
    }
    public withResources(resources: Array<Resource>): ListVolumesByTagsResponse {
        this['resources'] = resources;
        return this;
    }
}