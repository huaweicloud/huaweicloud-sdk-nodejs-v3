import { ApiError } from './ApiError';
import { ResultValueTestResultVo } from './ResultValueTestResultVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddCaseResultFourResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueTestResultVo;
    public error?: ApiError;
    private 'request_id'?: string;
    private 'server_address'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): AddCaseResultFourResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueTestResultVo): AddCaseResultFourResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): AddCaseResultFourResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): AddCaseResultFourResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerAddress(serverAddress: string): AddCaseResultFourResponse {
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