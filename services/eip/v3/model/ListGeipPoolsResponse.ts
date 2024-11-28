import { ListGeipPools } from './ListGeipPools';
import { ListGlobalEipsResponseBodyPageInfo } from './ListGlobalEipsResponseBodyPageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGeipPoolsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'geip_pools'?: Array<ListGeipPools>;
    private 'page_info'?: ListGlobalEipsResponseBodyPageInfo;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListGeipPoolsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGeipPools(geipPools: Array<ListGeipPools>): ListGeipPoolsResponse {
        this['geip_pools'] = geipPools;
        return this;
    }
    public set geipPools(geipPools: Array<ListGeipPools>  | undefined) {
        this['geip_pools'] = geipPools;
    }
    public get geipPools(): Array<ListGeipPools> | undefined {
        return this['geip_pools'];
    }
    public withPageInfo(pageInfo: ListGlobalEipsResponseBodyPageInfo): ListGeipPoolsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: ListGlobalEipsResponseBodyPageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): ListGlobalEipsResponseBodyPageInfo | undefined {
        return this['page_info'];
    }
    public withXRequestId(xRequestId: string): ListGeipPoolsResponse {
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