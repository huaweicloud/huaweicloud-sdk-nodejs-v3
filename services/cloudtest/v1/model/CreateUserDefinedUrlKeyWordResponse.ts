import { CommonResponseErrorObject } from './CommonResponseErrorObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateUserDefinedUrlKeyWordResponse extends SdkResponse {
    public code?: string;
    public error?: CommonResponseErrorObject;
    public reason?: string;
    public result?: object;
    public status?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateUserDefinedUrlKeyWordResponse {
        this['code'] = code;
        return this;
    }
    public withError(error: CommonResponseErrorObject): CreateUserDefinedUrlKeyWordResponse {
        this['error'] = error;
        return this;
    }
    public withReason(reason: string): CreateUserDefinedUrlKeyWordResponse {
        this['reason'] = reason;
        return this;
    }
    public withResult(result: object): CreateUserDefinedUrlKeyWordResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CreateUserDefinedUrlKeyWordResponse {
        this['status'] = status;
        return this;
    }
}