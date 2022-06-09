import { ResourcesByTag } from './ResourcesByTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListListenersByTagsResponse extends SdkResponse {
    private 'total_count'?: number | undefined;
    public resources?: Array<ResourcesByTag>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListListenersByTagsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount() {
        return this['total_count'];
    }
    public withResources(resources: Array<ResourcesByTag>): ListListenersByTagsResponse {
        this['resources'] = resources;
        return this;
    }
}