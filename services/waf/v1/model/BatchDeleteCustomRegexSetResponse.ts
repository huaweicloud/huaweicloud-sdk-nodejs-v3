import { FailedCustomRegexSet } from './FailedCustomRegexSet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteCustomRegexSetResponse extends SdkResponse {
    public deleted?: Array<string>;
    public failed?: Array<FailedCustomRegexSet>;
    public constructor() { 
        super();
    }
    public withDeleted(deleted: Array<string>): BatchDeleteCustomRegexSetResponse {
        this['deleted'] = deleted;
        return this;
    }
    public withFailed(failed: Array<FailedCustomRegexSet>): BatchDeleteCustomRegexSetResponse {
        this['failed'] = failed;
        return this;
    }
}