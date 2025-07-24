import { ApiError } from './ApiError';
import { ResultValueTestCaseDetailVo } from './ResultValueTestCaseDetailVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTestCaseResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueTestCaseDetailVo;
    public error?: ApiError;
    private 'request_id'?: string;
    private 'server_address'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowTestCaseResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueTestCaseDetailVo): ShowTestCaseResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): ShowTestCaseResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): ShowTestCaseResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerAddress(serverAddress: string): ShowTestCaseResponse {
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