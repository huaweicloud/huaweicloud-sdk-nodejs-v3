import { CreateDpeClassifyRequestBody } from './CreateDpeClassifyRequestBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateClassifierResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: CreateDpeClassifyRequestBody;
    public constructor() { 
        super();
    }
    public withCode(code: string): UpdateClassifierResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): UpdateClassifierResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: CreateDpeClassifyRequestBody): UpdateClassifierResponse {
        this['data'] = data;
        return this;
    }
}