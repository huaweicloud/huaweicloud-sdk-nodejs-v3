import { IgnoreRuleBody } from './IgnoreRuleBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIgnoreRuleResponse extends SdkResponse {
    public total?: number;
    public items?: Array<IgnoreRuleBody>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListIgnoreRuleResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<IgnoreRuleBody>): ListIgnoreRuleResponse {
        this['items'] = items;
        return this;
    }
}