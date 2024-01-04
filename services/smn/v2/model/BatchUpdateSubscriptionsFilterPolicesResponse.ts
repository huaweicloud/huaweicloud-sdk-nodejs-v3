import { BatchResult } from './BatchResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateSubscriptionsFilterPolicesResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'batch_result'?: Array<BatchResult>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): BatchUpdateSubscriptionsFilterPolicesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withBatchResult(batchResult: Array<BatchResult>): BatchUpdateSubscriptionsFilterPolicesResponse {
        this['batch_result'] = batchResult;
        return this;
    }
    public set batchResult(batchResult: Array<BatchResult>  | undefined) {
        this['batch_result'] = batchResult;
    }
    public get batchResult(): Array<BatchResult> | undefined {
        return this['batch_result'];
    }
}