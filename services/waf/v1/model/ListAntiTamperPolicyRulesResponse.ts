import { AntiTamperRuleResponseBody } from './AntiTamperRuleResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAntiTamperPolicyRulesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<AntiTamperRuleResponseBody>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAntiTamperPolicyRulesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<AntiTamperRuleResponseBody>): ListAntiTamperPolicyRulesResponse {
        this['items'] = items;
        return this;
    }
}