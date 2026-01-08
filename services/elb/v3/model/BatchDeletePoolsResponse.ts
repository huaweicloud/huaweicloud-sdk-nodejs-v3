import { BatchDeletePoolsResp } from './BatchDeletePoolsResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeletePoolsResponse extends SdkResponse {
    public pools?: Array<BatchDeletePoolsResp>;
    public constructor() { 
        super();
    }
    public withPools(pools: Array<BatchDeletePoolsResp>): BatchDeletePoolsResponse {
        this['pools'] = pools;
        return this;
    }
}