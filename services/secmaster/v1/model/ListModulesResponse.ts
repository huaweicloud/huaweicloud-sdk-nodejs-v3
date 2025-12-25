import { ModuleDetailInfo } from './ModuleDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListModulesResponse extends SdkResponse {
    public code?: string;
    public data?: Array<ModuleDetailInfo>;
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
    public withCode(code: string): ListModulesResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: Array<ModuleDetailInfo>): ListModulesResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ListModulesResponse {
        this['message'] = message;
        return this;
    }
    public withOffset(offset: number): ListModulesResponse {
        this['offset'] = offset;
        return this;
    }
    public withRequestId(requestId: string): ListModulesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withLimit(limit: number): ListModulesResponse {
        this['limit'] = limit;
        return this;
    }
    public withSuccess(success: boolean): ListModulesResponse {
        this['success'] = success;
        return this;
    }
    public withTotal(total: number): ListModulesResponse {
        this['total'] = total;
        return this;
    }
    public withXRequestId(xRequestId: string): ListModulesResponse {
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