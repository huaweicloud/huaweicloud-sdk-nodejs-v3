import { ApiError } from './ApiError';
import { ResultValueListTestCaseListVo } from './ResultValueListTestCaseListVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTestCasesByConditionResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueListTestCaseListVo;
    public error?: ApiError;
    private 'request_id'?: string;
    private 'server_address'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListTestCasesByConditionResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueListTestCaseListVo): ListTestCasesByConditionResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): ListTestCasesByConditionResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): ListTestCasesByConditionResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerAddress(serverAddress: string): ListTestCasesByConditionResponse {
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