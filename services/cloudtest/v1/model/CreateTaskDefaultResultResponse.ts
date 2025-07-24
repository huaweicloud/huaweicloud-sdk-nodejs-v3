import { ApiError } from './ApiError';
import { ResultValueExecuteTaskVo } from './ResultValueExecuteTaskVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTaskDefaultResultResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueExecuteTaskVo;
    public error?: ApiError;
    private 'request_id'?: string;
    private 'server_address'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CreateTaskDefaultResultResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueExecuteTaskVo): CreateTaskDefaultResultResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): CreateTaskDefaultResultResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): CreateTaskDefaultResultResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerAddress(serverAddress: string): CreateTaskDefaultResultResponse {
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