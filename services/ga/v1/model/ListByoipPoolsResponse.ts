import { ByoipPool } from './ByoipPool';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListByoipPoolsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'byoip_pools'?: Array<ByoipPool>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListByoipPoolsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withByoipPools(byoipPools: Array<ByoipPool>): ListByoipPoolsResponse {
        this['byoip_pools'] = byoipPools;
        return this;
    }
    public set byoipPools(byoipPools: Array<ByoipPool>  | undefined) {
        this['byoip_pools'] = byoipPools;
    }
    public get byoipPools(): Array<ByoipPool> | undefined {
        return this['byoip_pools'];
    }
    public withPageInfo(pageInfo: PageInfo): ListByoipPoolsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}