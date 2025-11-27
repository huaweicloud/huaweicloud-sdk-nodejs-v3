import { Rule } from './Rule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRuleResponse extends SdkResponse {
    public items?: Array<Rule>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withItems(items: Array<Rule>): ListRuleResponse {
        this['items'] = items;
        return this;
    }
    public withTotal(total: number): ListRuleResponse {
        this['total'] = total;
        return this;
    }
}