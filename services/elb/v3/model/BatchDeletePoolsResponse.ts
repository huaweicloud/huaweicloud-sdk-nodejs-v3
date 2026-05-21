import { BatchDeletePoolsResp } from './BatchDeletePoolsResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeletePoolsResponse extends SdkResponse {
    private 'request_id'?: string;
    public pools?: Array<BatchDeletePoolsResp>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): BatchDeletePoolsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPools(pools: Array<BatchDeletePoolsResp>): BatchDeletePoolsResponse {
        this['pools'] = pools;
        return this;
    }
}