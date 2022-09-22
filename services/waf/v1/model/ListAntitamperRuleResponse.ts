import { AntiTamperRuleResponseBody } from './AntiTamperRuleResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAntitamperRuleResponse extends SdkResponse {
    public total?: number;
    public items?: Array<AntiTamperRuleResponseBody>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAntitamperRuleResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<AntiTamperRuleResponseBody>): ListAntitamperRuleResponse {
        this['items'] = items;
        return this;
    }
}