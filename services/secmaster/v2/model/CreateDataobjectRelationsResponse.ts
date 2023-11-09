import { DataResponse } from './DataResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDataobjectRelationsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    private 'request_id'?: string;
    public success?: boolean;
    public total?: number;
    public limit?: number;
    public offset?: number;
    public data?: DataResponse;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateDataobjectRelationsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CreateDataobjectRelationsResponse {
        this['message'] = message;
        return this;
    }
    public withRequestId(requestId: string): CreateDataobjectRelationsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSuccess(success: boolean): CreateDataobjectRelationsResponse {
        this['success'] = success;
        return this;
    }
    public withTotal(total: number): CreateDataobjectRelationsResponse {
        this['total'] = total;
        return this;
    }
    public withLimit(limit: number): CreateDataobjectRelationsResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): CreateDataobjectRelationsResponse {
        this['offset'] = offset;
        return this;
    }
    public withData(data: DataResponse): CreateDataobjectRelationsResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): CreateDataobjectRelationsResponse {
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