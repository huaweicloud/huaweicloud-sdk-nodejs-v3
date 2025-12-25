import { IncidentDetail } from './IncidentDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateIncidentResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: IncidentDetail;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateIncidentResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CreateIncidentResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: IncidentDetail): CreateIncidentResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): CreateIncidentResponse {
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