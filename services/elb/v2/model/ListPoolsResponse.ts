import { PoolResp } from './PoolResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPoolsResponse extends SdkResponse {
    public pools?: Array<PoolResp>;
    public constructor() { 
        super();
    }
    public withPools(pools: Array<PoolResp>): ListPoolsResponse {
        this['pools'] = pools;
        return this;
    }
}