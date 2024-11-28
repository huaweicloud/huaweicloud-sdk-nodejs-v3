import { GeipTags } from './GeipTags';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGlobalEipDomainTagsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'total_count'?: number;
    public tags?: Array<GeipTags>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListGlobalEipDomainTagsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTotalCount(totalCount: number): ListGlobalEipDomainTagsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withTags(tags: Array<GeipTags>): ListGlobalEipDomainTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withXRequestId(xRequestId: string): ListGlobalEipDomainTagsResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}