import { OpsflowBaseResponse } from './OpsflowBaseResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListExecutionInstancesResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public data?: Array<object>;
    public total?: number;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): ListExecutionInstancesResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ListExecutionInstancesResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withData(data: Array<object>): ListExecutionInstancesResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): ListExecutionInstancesResponse {
        this['total'] = total;
        return this;
    }
    public withXRequestId(xRequestId: string): ListExecutionInstancesResponse {
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