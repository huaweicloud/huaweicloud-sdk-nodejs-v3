import { ApiError } from './ApiError';
import { ResultValueListTestCaseListVo } from './ResultValueListTestCaseListVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllTestCasesResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueListTestCaseListVo;
    public error?: ApiError;
    private 'request_id'?: string;
    private 'server_address'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListAllTestCasesResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueListTestCaseListVo): ListAllTestCasesResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): ListAllTestCasesResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): ListAllTestCasesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerAddress(serverAddress: string): ListAllTestCasesResponse {
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