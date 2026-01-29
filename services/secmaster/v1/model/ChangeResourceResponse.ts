import { ChangeResourceRequestBody } from './ChangeResourceRequestBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeResourceResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: ChangeResourceRequestBody;
    public constructor() { 
        super();
    }
    public withCode(code: string): ChangeResourceResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ChangeResourceResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: ChangeResourceRequestBody): ChangeResourceResponse {
        this['data'] = data;
        return this;
    }
}