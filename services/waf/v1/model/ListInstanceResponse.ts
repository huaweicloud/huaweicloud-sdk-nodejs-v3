import { ListInstance } from './ListInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceResponse extends SdkResponse {
    public total?: number;
    public purchased?: boolean;
    public items?: Array<ListInstance>;
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
    public withItems(items: Array<ListInstance>): ListInstanceResponse {
        this['items'] = items;
        return this;
    }
}