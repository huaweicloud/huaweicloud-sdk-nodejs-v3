import { DeleteIncidentResponseBodyData } from './DeleteIncidentResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteIncidentResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: DeleteIncidentResponseBodyData;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteIncidentResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): DeleteIncidentResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: DeleteIncidentResponseBodyData): DeleteIncidentResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): DeleteIncidentResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}