import { TmsResourceResp } from './TmsResourceResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesByTagsResponse extends SdkResponse {
    public resources?: Array<TmsResourceResp>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<TmsResourceResp>): ListInstancesByTagsResponse {
        this['resources'] = resources;
        return this;
    }
    public withTotalCount(totalCount: number): ListInstancesByTagsResponse {
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