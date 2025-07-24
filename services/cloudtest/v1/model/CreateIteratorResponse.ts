import { ApiError } from './ApiError';
import { ResultValueTestVersionVo } from './ResultValueTestVersionVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateIteratorResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueTestVersionVo;
    public error?: ApiError;
    private 'request_id'?: string;
    private 'server_address'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CreateIteratorResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueTestVersionVo): CreateIteratorResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): CreateIteratorResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): CreateIteratorResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerAddress(serverAddress: string): CreateIteratorResponse {
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