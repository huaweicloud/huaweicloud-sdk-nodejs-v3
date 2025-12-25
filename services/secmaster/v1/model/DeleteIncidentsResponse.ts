import { DeleteIncidentResponseBodyData } from './DeleteIncidentResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteIncidentsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: DeleteIncidentResponseBodyData;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteIncidentsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): DeleteIncidentsResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: DeleteIncidentResponseBodyData): DeleteIncidentsResponse {
        this['data'] = data;
        return this;
    }
}