import { ApiError } from './ApiError';
import { ResultValueString } from './ResultValueString';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RemoveIssuesFromIteratorResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueString;
    public error?: ApiError;
    private 'request_id'?: string;
    private 'server_address'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): RemoveIssuesFromIteratorResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueString): RemoveIssuesFromIteratorResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): RemoveIssuesFromIteratorResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): RemoveIssuesFromIteratorResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerAddress(serverAddress: string): RemoveIssuesFromIteratorResponse {
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