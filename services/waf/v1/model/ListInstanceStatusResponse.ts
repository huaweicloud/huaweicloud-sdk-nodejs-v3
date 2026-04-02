import { PremiumWafInstanceStatusResponse } from './PremiumWafInstanceStatusResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceStatusResponse extends SdkResponse {
    public purchased?: boolean;
    public total?: number;
    public items?: Array<PremiumWafInstanceStatusResponse>;
    public constructor() { 
        super();
    }
    public withPurchased(purchased: boolean): ListInstanceStatusResponse {
        this['purchased'] = purchased;
        return this;
    }
    public withTotal(total: number): ListInstanceStatusResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<PremiumWafInstanceStatusResponse>): ListInstanceStatusResponse {
        this['items'] = items;
        return this;
    }
}