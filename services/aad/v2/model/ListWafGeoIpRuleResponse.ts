import { WafGeoIpRule } from './WafGeoIpRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWafGeoIpRuleResponse extends SdkResponse {
    public total?: number;
    public items?: Array<WafGeoIpRule>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListWafGeoIpRuleResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<WafGeoIpRule>): ListWafGeoIpRuleResponse {
        this['items'] = items;
        return this;
    }
}