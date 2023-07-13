import { BatchCopyResultVo } from './BatchCopyResultVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCopyDomainResponse extends SdkResponse {
    public result?: Array<BatchCopyResultVo>;
    public constructor() { 
        super();
    }
    public withResult(result: Array<BatchCopyResultVo>): BatchCopyDomainResponse {
        this['result'] = result;
        return this;
    }
}