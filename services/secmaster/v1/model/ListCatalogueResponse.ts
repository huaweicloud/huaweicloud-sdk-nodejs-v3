import { CatalogueDetailInfo } from './CatalogueDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCatalogueResponse extends SdkResponse {
    public code?: string;
    public data?: Array<CatalogueDetailInfo>;
    public message?: string;
    private 'request_id'?: string;
    public success?: boolean;
    public total?: number;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListCatalogueResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: Array<CatalogueDetailInfo>): ListCatalogueResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ListCatalogueResponse {
        this['message'] = message;
        return this;
    }
    public withRequestId(requestId: string): ListCatalogueResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSuccess(success: boolean): ListCatalogueResponse {
        this['success'] = success;
        return this;
    }
    public withTotal(total: number): ListCatalogueResponse {
        this['total'] = total;
        return this;
    }
    public withXRequestId(xRequestId: string): ListCatalogueResponse {
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