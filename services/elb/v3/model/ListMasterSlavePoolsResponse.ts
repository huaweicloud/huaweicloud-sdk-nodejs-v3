import { MasterSlavePool } from './MasterSlavePool';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMasterSlavePoolsResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'page_info'?: PageInfo | undefined;
    public pools?: Array<MasterSlavePool>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListMasterSlavePoolsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListMasterSlavePoolsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
    public withPools(pools: Array<MasterSlavePool>): ListMasterSlavePoolsResponse {
        this['pools'] = pools;
        return this;
    }
}