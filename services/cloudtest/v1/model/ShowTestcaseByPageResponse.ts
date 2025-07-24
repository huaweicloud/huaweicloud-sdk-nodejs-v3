import { BasePageInfoTestCase } from './BasePageInfoTestCase';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTestcaseByPageResponse extends SdkResponse {
    public code?: string;
    public data?: BasePageInfoTestCase;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowTestcaseByPageResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: BasePageInfoTestCase): ShowTestcaseByPageResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowTestcaseByPageResponse {
        this['message'] = message;
        return this;
    }
}