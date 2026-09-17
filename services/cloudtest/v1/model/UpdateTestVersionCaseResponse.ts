import { ApiError } from './ApiError';
import { ResultValueTestCaseVo } from './ResultValueTestCaseVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateTestVersionCaseResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueTestCaseVo;
    public error?: ApiError;
    private 'request_id'?: string;
    private 'server_address'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdateTestVersionCaseResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueTestCaseVo): UpdateTestVersionCaseResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): UpdateTestVersionCaseResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): UpdateTestVersionCaseResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerAddress(serverAddress: string): UpdateTestVersionCaseResponse {
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