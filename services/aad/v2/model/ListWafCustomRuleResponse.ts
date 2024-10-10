import { WafCustomRule } from './WafCustomRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWafCustomRuleResponse extends SdkResponse {
    public total?: number;
    public items?: Array<WafCustomRule>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListWafCustomRuleResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<WafCustomRule>): ListWafCustomRuleResponse {
        this['items'] = items;
        return this;
    }
}