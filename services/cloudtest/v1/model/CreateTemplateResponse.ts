import { Template } from './Template';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTemplateResponse extends SdkResponse {
    public code?: string;
    public data?: Template;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateTemplateResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: Template): CreateTemplateResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): CreateTemplateResponse {
        this['message'] = message;
        return this;
    }
}