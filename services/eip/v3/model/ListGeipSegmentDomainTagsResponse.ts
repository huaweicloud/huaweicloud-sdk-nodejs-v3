import { GetAccountTagsV2 } from './GetAccountTagsV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGeipSegmentDomainTagsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'total_count'?: number;
    public tags?: Array<GetAccountTagsV2>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListGeipSegmentDomainTagsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTotalCount(totalCount: number): ListGeipSegmentDomainTagsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withTags(tags: Array<GetAccountTagsV2>): ListGeipSegmentDomainTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withXRequestId(xRequestId: string): ListGeipSegmentDomainTagsResponse {
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