import { TmsTagValues } from './TmsTagValues';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGcbTenantTagsResponse extends SdkResponse {
    public tags?: Array<TmsTagValues>;
    private 'total_count'?: number;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TmsTagValues>): ListGcbTenantTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withTotalCount(totalCount: number): ListGcbTenantTagsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withRequestId(requestId: string): ListGcbTenantTagsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}