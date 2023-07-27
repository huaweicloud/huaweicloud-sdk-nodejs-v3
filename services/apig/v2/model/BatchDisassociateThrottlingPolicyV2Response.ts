import { ThrottleBindingBatchFailure } from './ThrottleBindingBatchFailure';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDisassociateThrottlingPolicyV2Response extends SdkResponse {
    private 'success_count'?: number;
    public failure?: Array<ThrottleBindingBatchFailure>;
    public constructor() { 
        super();
    }
    public withSuccessCount(successCount: number): BatchDisassociateThrottlingPolicyV2Response {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withFailure(failure: Array<ThrottleBindingBatchFailure>): BatchDisassociateThrottlingPolicyV2Response {
        this['failure'] = failure;
        return this;
    }
}