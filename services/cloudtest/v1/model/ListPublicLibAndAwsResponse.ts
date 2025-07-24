import { CommonResponseErrorOfAPITest } from './CommonResponseErrorOfAPITest';
import { GetPublicLibAndAwsResp } from './GetPublicLibAndAwsResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPublicLibAndAwsResponse extends SdkResponse {
    public code?: string;
    public error?: CommonResponseErrorOfAPITest;
    public reason?: string;
    public result?: Array<GetPublicLibAndAwsResp>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListPublicLibAndAwsResponse {
        this['code'] = code;
        return this;
    }
    public withError(error: CommonResponseErrorOfAPITest): ListPublicLibAndAwsResponse {
        this['error'] = error;
        return this;
    }
    public withReason(reason: string): ListPublicLibAndAwsResponse {
        this['reason'] = reason;
        return this;
    }
    public withResult(result: Array<GetPublicLibAndAwsResp>): ListPublicLibAndAwsResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListPublicLibAndAwsResponse {
        this['status'] = status;
        return this;
    }
}