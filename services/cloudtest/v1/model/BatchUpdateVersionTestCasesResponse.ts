import { ApiError } from './ApiError';
import { ResultValueUpdateTestCaseListVo } from './ResultValueUpdateTestCaseListVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateVersionTestCasesResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueUpdateTestCaseListVo;
    public error?: ApiError;
    private 'request_id'?: string;
    private 'server_address'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): BatchUpdateVersionTestCasesResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueUpdateTestCaseListVo): BatchUpdateVersionTestCasesResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): BatchUpdateVersionTestCasesResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): BatchUpdateVersionTestCasesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerAddress(serverAddress: string): BatchUpdateVersionTestCasesResponse {
        this['server_address'] = serverAddress;
        return this;
    }
    public set serverAddress(serverAddress: string  | undefined) {
        this['server_address'] = serverAddress;
    }
    public get serverAddress(): string | undefined {
        return this['server_address'];
    }
}