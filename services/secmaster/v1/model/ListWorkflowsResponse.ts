import { AopWorkflowInfo } from './AopWorkflowInfo';
import { SoarRsp } from './SoarRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkflowsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public total?: number;
    public offset?: number;
    public limit?: number;
    public size?: number;
    public page?: number;
    public data?: Array<AopWorkflowInfo>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListWorkflowsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ListWorkflowsResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): ListWorkflowsResponse {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): ListWorkflowsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTotal(total: number): ListWorkflowsResponse {
        this['total'] = total;
        return this;
    }
    public withOffset(offset: number): ListWorkflowsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWorkflowsResponse {
        this['limit'] = limit;
        return this;
    }
    public withSize(size: number): ListWorkflowsResponse {
        this['size'] = size;
        return this;
    }
    public withPage(page: number): ListWorkflowsResponse {
        this['page'] = page;
        return this;
    }
    public withData(data: Array<AopWorkflowInfo>): ListWorkflowsResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListWorkflowsResponse {
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