import { IncidentDetail } from './IncidentDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIncidentResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: IncidentDetail;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowIncidentResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowIncidentResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: IncidentDetail): ShowIncidentResponse {
        this['data'] = data;
        return this;
    }
}