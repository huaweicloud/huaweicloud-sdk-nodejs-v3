import { BatchTargetResult } from './BatchTargetResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RetryBatchTaskResponse extends SdkResponse {
    public targets?: Array<BatchTargetResult>;
    public constructor() { 
        super();
    }
    public withTargets(targets: Array<BatchTargetResult>): RetryBatchTaskResponse {
        this['targets'] = targets;
        return this;
    }
}