import { AlertDetail } from './AlertDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAlertResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: AlertDetail;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowAlertResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowAlertResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: AlertDetail): ShowAlertResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowAlertResponse {
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