import { ApiError } from './ApiError';
import { ResultValueBoolean } from './ResultValueBoolean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDisclaimerRecordResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueBoolean;
    public error?: ApiError;
    private 'request_id'?: string;
    private 'server_address'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowDisclaimerRecordResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueBoolean): ShowDisclaimerRecordResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): ShowDisclaimerRecordResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): ShowDisclaimerRecordResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerAddress(serverAddress: string): ShowDisclaimerRecordResponse {
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