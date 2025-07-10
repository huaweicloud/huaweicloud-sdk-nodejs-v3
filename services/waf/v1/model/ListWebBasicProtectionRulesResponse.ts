import { WebBasicProtectionRulesItem } from './WebBasicProtectionRulesItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWebBasicProtectionRulesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<WebBasicProtectionRulesItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListWebBasicProtectionRulesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<WebBasicProtectionRulesItem>): ListWebBasicProtectionRulesResponse {
        this['items'] = items;
        return this;
    }
}