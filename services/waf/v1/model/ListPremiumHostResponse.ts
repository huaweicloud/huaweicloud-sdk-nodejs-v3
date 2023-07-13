import { SimplePremiumWafHost } from './SimplePremiumWafHost';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPremiumHostResponse extends SdkResponse {
    public total?: number;
    public items?: Array<SimplePremiumWafHost>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListPremiumHostResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<SimplePremiumWafHost>): ListPremiumHostResponse {
        this['items'] = items;
        return this;
    }
}