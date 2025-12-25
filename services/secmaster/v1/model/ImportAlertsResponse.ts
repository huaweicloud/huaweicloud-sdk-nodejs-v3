import { ImportAlertResponseBodyData } from './ImportAlertResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportAlertsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: ImportAlertResponseBodyData;
    public constructor() { 
        super();
    }
    public withCode(code: string): ImportAlertsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ImportAlertsResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: ImportAlertResponseBodyData): ImportAlertsResponse {
        this['data'] = data;
        return this;
    }
}