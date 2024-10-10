import { FrequencyControlRule } from './FrequencyControlRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFrequencyControlRuleResponse extends SdkResponse {
    public total?: number;
    public items?: Array<FrequencyControlRule>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListFrequencyControlRuleResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<FrequencyControlRule>): ListFrequencyControlRuleResponse {
        this['items'] = items;
        return this;
    }
}