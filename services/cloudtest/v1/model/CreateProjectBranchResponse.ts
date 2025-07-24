import { ApiError } from './ApiError';
import { ResultValueTestVersionVo } from './ResultValueTestVersionVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateProjectBranchResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueTestVersionVo;
    public error?: ApiError;
    private 'request_id'?: string;
    private 'server_address'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CreateProjectBranchResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueTestVersionVo): CreateProjectBranchResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): CreateProjectBranchResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): CreateProjectBranchResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerAddress(serverAddress: string): CreateProjectBranchResponse {
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