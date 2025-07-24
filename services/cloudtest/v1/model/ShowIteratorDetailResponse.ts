import { ApiError } from './ApiError';
import { ResultValueIteratorVersionSummaryVo } from './ResultValueIteratorVersionSummaryVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIteratorDetailResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueIteratorVersionSummaryVo;
    public error?: ApiError;
    private 'request_id'?: string;
    private 'server_address'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowIteratorDetailResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueIteratorVersionSummaryVo): ShowIteratorDetailResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): ShowIteratorDetailResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): ShowIteratorDetailResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerAddress(serverAddress: string): ShowIteratorDetailResponse {
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