import { DataObjectDetail } from './DataObjectDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDatapanelObjectResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public success?: boolean;
    public data?: DataObjectDetail;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowDatapanelObjectResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowDatapanelObjectResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): ShowDatapanelObjectResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: DataObjectDetail): ShowDatapanelObjectResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowDatapanelObjectResponse {
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