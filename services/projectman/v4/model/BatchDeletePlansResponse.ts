import { BatchResultVO } from './BatchResultVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeletePlansResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: BatchResultVO;
    public constructor() { 
        super();
    }
    public withStatus(status: string): BatchDeletePlansResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): BatchDeletePlansResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: BatchResultVO): BatchDeletePlansResponse {
        this['result'] = result;
        return this;
    }
}