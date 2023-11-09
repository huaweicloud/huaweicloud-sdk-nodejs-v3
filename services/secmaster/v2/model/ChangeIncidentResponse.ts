import { IncidentDetail } from './IncidentDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeIncidentResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: IncidentDetail;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ChangeIncidentResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ChangeIncidentResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: IncidentDetail): ChangeIncidentResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ChangeIncidentResponse {
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