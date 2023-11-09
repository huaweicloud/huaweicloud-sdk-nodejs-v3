import { ListAlertDetail } from './ListAlertDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlertsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public total?: number;
    public limit?: number;
    public offset?: number;
    public success?: boolean;
    public data?: Array<ListAlertDetail>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListAlertsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ListAlertsResponse {
        this['message'] = message;
        return this;
    }
    public withTotal(total: number): ListAlertsResponse {
        this['total'] = total;
        return this;
    }
    public withLimit(limit: number): ListAlertsResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAlertsResponse {
        this['offset'] = offset;
        return this;
    }
    public withSuccess(success: boolean): ListAlertsResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: Array<ListAlertDetail>): ListAlertsResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListAlertsResponse {
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