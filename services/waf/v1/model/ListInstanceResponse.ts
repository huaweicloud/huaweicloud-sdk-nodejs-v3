import { Instance } from './Instance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceResponse extends SdkResponse {
    public total?: number;
    public purchased?: boolean;
    public items?: Array<Instance>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListInstanceResponse {
        this['total'] = total;
        return this;
    }
    public withPurchased(purchased: boolean): ListInstanceResponse {
        this['purchased'] = purchased;
        return this;
    }
    public withItems(items: Array<Instance>): ListInstanceResponse {
        this['items'] = items;
        return this;
    }
}