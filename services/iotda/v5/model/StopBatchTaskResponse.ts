import { BatchTargetResult } from './BatchTargetResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopBatchTaskResponse extends SdkResponse {
    public targets?: Array<BatchTargetResult>;
    public constructor() { 
        super();
    }
    public withTargets(targets: Array<BatchTargetResult>): StopBatchTaskResponse {
        this['targets'] = targets;
        return this;
    }
}