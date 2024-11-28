import { ListGlobalEipSegments } from './ListGlobalEipSegments';
import { ListGlobalEipsResponseBodyPageInfo } from './ListGlobalEipsResponseBodyPageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGlobalEipSegmentsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'global_eip_segments'?: Array<ListGlobalEipSegments>;
    private 'page_info'?: ListGlobalEipsResponseBodyPageInfo;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListGlobalEipSegmentsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGlobalEipSegments(globalEipSegments: Array<ListGlobalEipSegments>): ListGlobalEipSegmentsResponse {
        this['global_eip_segments'] = globalEipSegments;
        return this;
    }
    public set globalEipSegments(globalEipSegments: Array<ListGlobalEipSegments>  | undefined) {
        this['global_eip_segments'] = globalEipSegments;
    }
    public get globalEipSegments(): Array<ListGlobalEipSegments> | undefined {
        return this['global_eip_segments'];
    }
    public withPageInfo(pageInfo: ListGlobalEipsResponseBodyPageInfo): ListGlobalEipSegmentsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: ListGlobalEipsResponseBodyPageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): ListGlobalEipsResponseBodyPageInfo | undefined {
        return this['page_info'];
    }
    public withXRequestId(xRequestId: string): ListGlobalEipSegmentsResponse {
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