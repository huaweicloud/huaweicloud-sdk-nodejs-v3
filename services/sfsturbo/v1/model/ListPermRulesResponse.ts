import { OnePermRuleResponseInfo } from './OnePermRuleResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPermRulesResponse extends SdkResponse {
    public rules?: Array<OnePermRuleResponseInfo>;
    public constructor() { 
        super();
    }
    public withRules(rules: Array<OnePermRuleResponseInfo>): ListPermRulesResponse {
        this['rules'] = rules;
        return this;
    }
}