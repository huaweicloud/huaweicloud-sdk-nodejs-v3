import { AopWorkflowInfo } from './AopWorkflowInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkflowsResponse extends SdkResponse {
    public code?: string;
    public total?: number;
    public offset?: number;
    public limit?: number;
    public message?: string;
    public success?: boolean;
    public data?: Array<AopWorkflowInfo>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListWorkflowsResponse {
        this['code'] = code;
        return this;
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
    public withMessage(message: string): ListWorkflowsResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): ListWorkflowsResponse {
        this['success'] = success;
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