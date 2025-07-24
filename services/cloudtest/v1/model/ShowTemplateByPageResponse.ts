import { BasePageInfoTemplateV2 } from './BasePageInfoTemplateV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTemplateByPageResponse extends SdkResponse {
    public code?: string;
    public data?: BasePageInfoTemplateV2;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowTemplateByPageResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: BasePageInfoTemplateV2): ShowTemplateByPageResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowTemplateByPageResponse {
        this['message'] = message;
        return this;
    }
}