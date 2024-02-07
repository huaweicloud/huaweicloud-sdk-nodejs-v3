import { ListGlobalEipsResponseBodyPageInfo } from './ListGlobalEipsResponseBodyPageInfo';
import { ListSupportMasks } from './ListSupportMasks';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSupportMasksResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'support_masks'?: Array<ListSupportMasks>;
    private 'page_info'?: ListGlobalEipsResponseBodyPageInfo;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListSupportMasksResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSupportMasks(supportMasks: Array<ListSupportMasks>): ListSupportMasksResponse {
        this['support_masks'] = supportMasks;
        return this;
    }
    public set supportMasks(supportMasks: Array<ListSupportMasks>  | undefined) {
        this['support_masks'] = supportMasks;
    }
    public get supportMasks(): Array<ListSupportMasks> | undefined {
        return this['support_masks'];
    }
    public withPageInfo(pageInfo: ListGlobalEipsResponseBodyPageInfo): ListSupportMasksResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: ListGlobalEipsResponseBodyPageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): ListGlobalEipsResponseBodyPageInfo | undefined {
        return this['page_info'];
    }
    public withXRequestId(xRequestId: string): ListSupportMasksResponse {
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