import { FailedCustomAnswers } from './FailedCustomAnswers';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteCustomAnswersResponse extends SdkResponse {
    public deleted?: Array<string>;
    public failed?: Array<FailedCustomAnswers>;
    public constructor() { 
        super();
    }
    public withDeleted(deleted: Array<string>): BatchDeleteCustomAnswersResponse {
        this['deleted'] = deleted;
        return this;
    }
    public withFailed(failed: Array<FailedCustomAnswers>): BatchDeleteCustomAnswersResponse {
        this['failed'] = failed;
        return this;
    }
}