import { GeipResource } from './GeipResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGlobalEipFilterTagsResponse extends SdkResponse {
    public resources?: Array<GeipResource>;
    private 'total_count'?: number;
    private 'request_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<GeipResource>): ListGlobalEipFilterTagsResponse {
        this['resources'] = resources;
        return this;
    }
    public withTotalCount(totalCount: number): ListGlobalEipFilterTagsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withRequestId(requestId: string): ListGlobalEipFilterTagsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withXRequestId(xRequestId: string): ListGlobalEipFilterTagsResponse {
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