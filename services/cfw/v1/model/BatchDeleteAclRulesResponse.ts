import { BatchDeleteAclRulesResponseData } from './BatchDeleteAclRulesResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteAclRulesResponse extends SdkResponse {
    public data?: BatchDeleteAclRulesResponseData;
    public constructor() { 
        super();
    }
    public withData(data: BatchDeleteAclRulesResponseData): BatchDeleteAclRulesResponse {
        this['data'] = data;
        return this;
    }
}