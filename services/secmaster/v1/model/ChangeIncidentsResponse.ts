import { IncidentDetail } from './IncidentDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeIncidentsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: IncidentDetail;
    public constructor() { 
        super();
    }
    public withCode(code: string): ChangeIncidentsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ChangeIncidentsResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: IncidentDetail): ChangeIncidentsResponse {
        this['data'] = data;
        return this;
    }
}