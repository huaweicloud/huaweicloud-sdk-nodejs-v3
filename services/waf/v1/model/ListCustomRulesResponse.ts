import { CustomRule } from './CustomRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCustomRulesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<CustomRule>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListCustomRulesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<CustomRule>): ListCustomRulesResponse {
        this['items'] = items;
        return this;
    }
}