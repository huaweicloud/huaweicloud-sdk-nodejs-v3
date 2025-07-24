import { CommonResponseErrorObject } from './CommonResponseErrorObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBasicAwByIdResponse extends SdkResponse {
    public code?: string;
    public error?: CommonResponseErrorObject;
    public reason?: string;
    public result?: object;
    public status?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): UpdateBasicAwByIdResponse {
        this['code'] = code;
        return this;
    }
    public withError(error: CommonResponseErrorObject): UpdateBasicAwByIdResponse {
        this['error'] = error;
        return this;
    }
    public withReason(reason: string): UpdateBasicAwByIdResponse {
        this['reason'] = reason;
        return this;
    }
    public withResult(result: object): UpdateBasicAwByIdResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): UpdateBasicAwByIdResponse {
        this['status'] = status;
        return this;
    }
}