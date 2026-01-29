import { IncidentDetail } from './IncidentDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIncidentsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public total?: number;
    public size?: number;
    public page?: number;
    public success?: boolean;
    public data?: Array<IncidentDetail>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListIncidentsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ListIncidentsResponse {
        this['message'] = message;
        return this;
    }
    public withTotal(total: number): ListIncidentsResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListIncidentsResponse {
        this['size'] = size;
        return this;
    }
    public withPage(page: number): ListIncidentsResponse {
        this['page'] = page;
        return this;
    }
    public withSuccess(success: boolean): ListIncidentsResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: Array<IncidentDetail>): ListIncidentsResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListIncidentsResponse {
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