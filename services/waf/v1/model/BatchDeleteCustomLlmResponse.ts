import { FailedLlm } from './FailedLlm';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteCustomLlmResponse extends SdkResponse {
    public deleted?: Array<string>;
    public failed?: Array<FailedLlm>;
    public constructor() { 
        super();
    }
    public withDeleted(deleted: Array<string>): BatchDeleteCustomLlmResponse {
        this['deleted'] = deleted;
        return this;
    }
    public withFailed(failed: Array<FailedLlm>): BatchDeleteCustomLlmResponse {
        this['failed'] = failed;
        return this;
    }
}