import { CreateDpeClassifyRequestBody } from './CreateDpeClassifyRequestBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClassifierResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: CreateDpeClassifyRequestBody;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateClassifierResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CreateClassifierResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: CreateDpeClassifyRequestBody): CreateClassifierResponse {
        this['data'] = data;
        return this;
    }
}