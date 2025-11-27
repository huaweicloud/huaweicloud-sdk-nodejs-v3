import { Resource } from './Resource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTransitSubnetsByTagsResponse extends SdkResponse {
    public resources?: Array<Resource>;
    private 'request_id'?: string;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<Resource>): ListTransitSubnetsByTagsResponse {
        this['resources'] = resources;
        return this;
    }
    public withRequestId(requestId: string): ListTransitSubnetsByTagsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTotalCount(totalCount: number): ListTransitSubnetsByTagsResponse {
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