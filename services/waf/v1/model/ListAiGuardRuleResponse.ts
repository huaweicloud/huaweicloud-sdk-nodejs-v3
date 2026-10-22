import { AiGuardRuleItem } from './AiGuardRuleItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAiGuardRuleResponse extends SdkResponse {
    public total?: number;
    public items?: Array<AiGuardRuleItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAiGuardRuleResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<AiGuardRuleItem>): ListAiGuardRuleResponse {
        this['items'] = items;
        return this;
    }
}