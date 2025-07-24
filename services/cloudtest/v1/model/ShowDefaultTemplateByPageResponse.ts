import { BasePageInfoTemplate } from './BasePageInfoTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDefaultTemplateByPageResponse extends SdkResponse {
    public code?: string;
    public data?: BasePageInfoTemplate;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowDefaultTemplateByPageResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: BasePageInfoTemplate): ShowDefaultTemplateByPageResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowDefaultTemplateByPageResponse {
        this['message'] = message;
        return this;
    }
}