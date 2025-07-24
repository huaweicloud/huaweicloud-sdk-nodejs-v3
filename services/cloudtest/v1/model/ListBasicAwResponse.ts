import { BasicAwRes } from './BasicAwRes';
import { CommonResponseErrorOfAPITest } from './CommonResponseErrorOfAPITest';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBasicAwResponse extends SdkResponse {
    public code?: string;
    public error?: CommonResponseErrorOfAPITest;
    public reason?: string;
    public result?: BasicAwRes;
    public status?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListBasicAwResponse {
        this['code'] = code;
        return this;
    }
    public withError(error: CommonResponseErrorOfAPITest): ListBasicAwResponse {
        this['error'] = error;
        return this;
    }
    public withReason(reason: string): ListBasicAwResponse {
        this['reason'] = reason;
        return this;
    }
    public withResult(result: BasicAwRes): ListBasicAwResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListBasicAwResponse {
        this['status'] = status;
        return this;
    }
}