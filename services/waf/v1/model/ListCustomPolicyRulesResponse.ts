import { CustomRule } from './CustomRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCustomPolicyRulesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<CustomRule>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListCustomPolicyRulesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<CustomRule>): ListCustomPolicyRulesResponse {
        this['items'] = items;
        return this;
    }
}