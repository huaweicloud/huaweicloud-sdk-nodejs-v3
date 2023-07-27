import { AclBatchResultFailureResp } from './AclBatchResultFailureResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteAclV2Response extends SdkResponse {
    private 'success_count'?: number;
    public failure?: Array<AclBatchResultFailureResp>;
    public constructor() { 
        super();
    }
    public withSuccessCount(successCount: number): BatchDeleteAclV2Response {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withFailure(failure: Array<AclBatchResultFailureResp>): BatchDeleteAclV2Response {
        this['failure'] = failure;
        return this;
    }
}