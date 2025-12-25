import { DataObjectDetail } from './DataObjectDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataobjectRelationsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public total?: number;
    public limit?: number;
    public offset?: number;
    public success?: boolean;
    public data?: Array<DataObjectDetail>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListDataobjectRelationsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ListDataobjectRelationsResponse {
        this['message'] = message;
        return this;
    }
    public withTotal(total: number): ListDataobjectRelationsResponse {
        this['total'] = total;
        return this;
    }
    public withLimit(limit: number): ListDataobjectRelationsResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDataobjectRelationsResponse {
        this['offset'] = offset;
        return this;
    }
    public withSuccess(success: boolean): ListDataobjectRelationsResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: Array<DataObjectDetail>): ListDataobjectRelationsResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListDataobjectRelationsResponse {
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