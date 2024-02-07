import { ListGlobalEips } from './ListGlobalEips';
import { ListGlobalEipsResponseBodyPageInfo } from './ListGlobalEipsResponseBodyPageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGlobalEipsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'global_eips'?: Array<ListGlobalEips>;
    private 'page_info'?: ListGlobalEipsResponseBodyPageInfo;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListGlobalEipsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGlobalEips(globalEips: Array<ListGlobalEips>): ListGlobalEipsResponse {
        this['global_eips'] = globalEips;
        return this;
    }
    public set globalEips(globalEips: Array<ListGlobalEips>  | undefined) {
        this['global_eips'] = globalEips;
    }
    public get globalEips(): Array<ListGlobalEips> | undefined {
        return this['global_eips'];
    }
    public withPageInfo(pageInfo: ListGlobalEipsResponseBodyPageInfo): ListGlobalEipsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: ListGlobalEipsResponseBodyPageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): ListGlobalEipsResponseBodyPageInfo | undefined {
        return this['page_info'];
    }
    public withXRequestId(xRequestId: string): ListGlobalEipsResponse {
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