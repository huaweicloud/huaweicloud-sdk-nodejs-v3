import { RuleResponse } from './RuleResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRuleDetailsResponse extends SdkResponse {
    public rules?: Array<RuleResponse>;
    public constructor() { 
        super();
    }
    public withRules(rules: Array<RuleResponse>): ListRuleDetailsResponse {
        this['rules'] = rules;
        return this;
    }
}