import { BatchResultVO } from './BatchResultVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateBaselineResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: BatchResultVO;
    public constructor() { 
        super();
    }
    public withStatus(status: string): BatchUpdateBaselineResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): BatchUpdateBaselineResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: BatchResultVO): BatchUpdateBaselineResponse {
        this['result'] = result;
        return this;
    }
}