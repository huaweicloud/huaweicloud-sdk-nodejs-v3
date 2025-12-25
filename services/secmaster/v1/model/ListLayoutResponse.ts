import { LayoutDetailInfo } from './LayoutDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLayoutResponse extends SdkResponse {
    public code?: string;
    public data?: Array<LayoutDetailInfo>;
    public message?: string;
    public offset?: number;
    private 'request_id'?: string;
    public limit?: number;
    public success?: boolean;
    public total?: number;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListLayoutResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: Array<LayoutDetailInfo>): ListLayoutResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ListLayoutResponse {
        this['message'] = message;
        return this;
    }
    public withOffset(offset: number): ListLayoutResponse {
        this['offset'] = offset;
        return this;
    }
    public withRequestId(requestId: string): ListLayoutResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withLimit(limit: number): ListLayoutResponse {
        this['limit'] = limit;
        return this;
    }
    public withSuccess(success: boolean): ListLayoutResponse {
        this['success'] = success;
        return this;
    }
    public withTotal(total: number): ListLayoutResponse {
        this['total'] = total;
        return this;
    }
    public withXRequestId(xRequestId: string): ListLayoutResponse {
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