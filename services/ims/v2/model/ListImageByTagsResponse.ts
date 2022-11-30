import { ShowImageByTagsResource } from './ShowImageByTagsResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageByTagsResponse extends SdkResponse {
    public resources?: Array<ShowImageByTagsResource>;
    private 'total_count'?: number | undefined;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<ShowImageByTagsResource>): ListImageByTagsResponse {
        this['resources'] = resources;
        return this;
    }
    public withTotalCount(totalCount: number): ListImageByTagsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount() {
        return this['total_count'];
    }
}