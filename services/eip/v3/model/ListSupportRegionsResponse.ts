import { ListGlobalEipsResponseBodyPageInfo } from './ListGlobalEipsResponseBodyPageInfo';
import { ListSupportRegions } from './ListSupportRegions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSupportRegionsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'support_regions'?: Array<ListSupportRegions>;
    private 'page_info'?: ListGlobalEipsResponseBodyPageInfo;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListSupportRegionsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSupportRegions(supportRegions: Array<ListSupportRegions>): ListSupportRegionsResponse {
        this['support_regions'] = supportRegions;
        return this;
    }
    public set supportRegions(supportRegions: Array<ListSupportRegions>  | undefined) {
        this['support_regions'] = supportRegions;
    }
    public get supportRegions(): Array<ListSupportRegions> | undefined {
        return this['support_regions'];
    }
    public withPageInfo(pageInfo: ListGlobalEipsResponseBodyPageInfo): ListSupportRegionsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: ListGlobalEipsResponseBodyPageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): ListGlobalEipsResponseBodyPageInfo | undefined {
        return this['page_info'];
    }
    public withXRequestId(xRequestId: string): ListSupportRegionsResponse {
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