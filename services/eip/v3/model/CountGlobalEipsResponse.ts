import { CountGlobalEips } from './CountGlobalEips';
import { ListGlobalEipsResponseBodyPageInfo } from './ListGlobalEipsResponseBodyPageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountGlobalEipsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'global_eips'?: Array<CountGlobalEips>;
    private 'page_info'?: ListGlobalEipsResponseBodyPageInfo;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CountGlobalEipsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGlobalEips(globalEips: Array<CountGlobalEips>): CountGlobalEipsResponse {
        this['global_eips'] = globalEips;
        return this;
    }
    public set globalEips(globalEips: Array<CountGlobalEips>  | undefined) {
        this['global_eips'] = globalEips;
    }
    public get globalEips(): Array<CountGlobalEips> | undefined {
        return this['global_eips'];
    }
    public withPageInfo(pageInfo: ListGlobalEipsResponseBodyPageInfo): CountGlobalEipsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: ListGlobalEipsResponseBodyPageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): ListGlobalEipsResponseBodyPageInfo | undefined {
        return this['page_info'];
    }
    public withXRequestId(xRequestId: string): CountGlobalEipsResponse {
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