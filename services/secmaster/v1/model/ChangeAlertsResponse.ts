import { AlertDetail } from './AlertDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeAlertsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: AlertDetail;
    public constructor() { 
        super();
    }
    public withCode(code: string): ChangeAlertsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ChangeAlertsResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: AlertDetail): ChangeAlertsResponse {
        this['data'] = data;
        return this;
    }
}