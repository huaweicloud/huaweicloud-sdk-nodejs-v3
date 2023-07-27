import { AclBindingBatchFailure } from './AclBindingBatchFailure';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteApiAclBindingV2Response extends SdkResponse {
    private 'success_count'?: number;
    public failure?: Array<AclBindingBatchFailure>;
    public constructor() { 
        super();
    }
    public withSuccessCount(successCount: number): BatchDeleteApiAclBindingV2Response {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withFailure(failure: Array<AclBindingBatchFailure>): BatchDeleteApiAclBindingV2Response {
        this['failure'] = failure;
        return this;
    }
}