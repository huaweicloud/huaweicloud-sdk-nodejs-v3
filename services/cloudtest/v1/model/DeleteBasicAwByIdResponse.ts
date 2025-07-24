import { CommonResponseErrorString } from './CommonResponseErrorString';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteBasicAwByIdResponse extends SdkResponse {
    public code?: string;
    public error?: CommonResponseErrorString;
    public reason?: string;
    public result?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteBasicAwByIdResponse {
        this['code'] = code;
        return this;
    }
    public withError(error: CommonResponseErrorString): DeleteBasicAwByIdResponse {
        this['error'] = error;
        return this;
    }
    public withReason(reason: string): DeleteBasicAwByIdResponse {
        this['reason'] = reason;
        return this;
    }
    public withResult(result: string): DeleteBasicAwByIdResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): DeleteBasicAwByIdResponse {
        this['status'] = status;
        return this;
    }
}