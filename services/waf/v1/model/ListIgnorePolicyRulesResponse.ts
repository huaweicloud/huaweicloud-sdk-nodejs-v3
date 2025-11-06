import { IgnoreRuleBody } from './IgnoreRuleBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIgnorePolicyRulesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<IgnoreRuleBody>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListIgnorePolicyRulesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<IgnoreRuleBody>): ListIgnorePolicyRulesResponse {
        this['items'] = items;
        return this;
    }
}