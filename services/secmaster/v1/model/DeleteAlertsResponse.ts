import { BatchOperateAlertResult } from './BatchOperateAlertResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAlertsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: BatchOperateAlertResult;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteAlertsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): DeleteAlertsResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: BatchOperateAlertResult): DeleteAlertsResponse {
        this['data'] = data;
        return this;
    }
}