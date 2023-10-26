import { OnePermRuleResponseInfo } from './OnePermRuleResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePermRuleResponse extends SdkResponse {
    public rules?: Array<OnePermRuleResponseInfo>;
    public constructor() { 
        super();
    }
    public withRules(rules: Array<OnePermRuleResponseInfo>): CreatePermRuleResponse {
        this['rules'] = rules;
        return this;
    }
}