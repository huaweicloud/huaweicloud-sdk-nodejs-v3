import { ApiError } from './ApiError';
import { ResultValueListResourcePoolVo } from './ResultValueListResourcePoolVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourcePoolsResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueListResourcePoolVo;
    public error?: ApiError;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListResourcePoolsResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueListResourcePoolVo): ListResourcePoolsResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): ListResourcePoolsResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): ListResourcePoolsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}