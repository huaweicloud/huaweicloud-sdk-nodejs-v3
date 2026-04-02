import { PremiumWafPoolResponse } from './PremiumWafPoolResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancePoolsResponse extends SdkResponse {
    public total?: number;
    public items?: Array<PremiumWafPoolResponse>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListInstancePoolsResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<PremiumWafPoolResponse>): ListInstancePoolsResponse {
        this['items'] = items;
        return this;
    }
}