import { LlmRuleInfo } from './LlmRuleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLlmGuardPolicyRulesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<LlmRuleInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListLlmGuardPolicyRulesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<LlmRuleInfo>): ListLlmGuardPolicyRulesResponse {
        this['items'] = items;
        return this;
    }
}