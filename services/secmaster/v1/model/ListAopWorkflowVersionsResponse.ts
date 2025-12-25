import { AopWorkflowVersionInfo } from './AopWorkflowVersionInfo';
import { SoarRsp } from './SoarRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAopWorkflowVersionsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public total?: number;
    public offset?: number;
    public limit?: number;
    public size?: number;
    public page?: number;
    public data?: Array<AopWorkflowVersionInfo>;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListAopWorkflowVersionsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ListAopWorkflowVersionsResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): ListAopWorkflowVersionsResponse {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): ListAopWorkflowVersionsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTotal(total: number): ListAopWorkflowVersionsResponse {
        this['total'] = total;
        return this;
    }
    public withOffset(offset: number): ListAopWorkflowVersionsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAopWorkflowVersionsResponse {
        this['limit'] = limit;
        return this;
    }
    public withSize(size: number): ListAopWorkflowVersionsResponse {
        this['size'] = size;
        return this;
    }
    public withPage(page: number): ListAopWorkflowVersionsResponse {
        this['page'] = page;
        return this;
    }
    public withData(data: Array<AopWorkflowVersionInfo>): ListAopWorkflowVersionsResponse {
        this['data'] = data;
        return this;
    }
}