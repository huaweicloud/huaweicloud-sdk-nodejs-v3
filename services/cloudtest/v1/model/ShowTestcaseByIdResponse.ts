import { TestCase } from './TestCase';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTestcaseByIdResponse extends SdkResponse {
    public code?: string;
    public data?: TestCase;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowTestcaseByIdResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: TestCase): ShowTestcaseByIdResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowTestcaseByIdResponse {
        this['message'] = message;
        return this;
    }
}