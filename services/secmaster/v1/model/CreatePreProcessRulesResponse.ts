import { CreatePreProcessRulesResponseBodyData } from './CreatePreProcessRulesResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePreProcessRulesResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: CreatePreProcessRulesResponseBodyData;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreatePreProcessRulesResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CreatePreProcessRulesResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: CreatePreProcessRulesResponseBodyData): CreatePreProcessRulesResponse {
        this['data'] = data;
        return this;
    }
}