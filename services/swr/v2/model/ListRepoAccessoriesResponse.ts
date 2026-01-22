import { AccessoryListAccessories } from './AccessoryListAccessories';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepoAccessoriesResponse extends SdkResponse {
    public total?: number;
    public accessories?: Array<AccessoryListAccessories>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListRepoAccessoriesResponse {
        this['total'] = total;
        return this;
    }
    public withAccessories(accessories: Array<AccessoryListAccessories>): ListRepoAccessoriesResponse {
        this['accessories'] = accessories;
        return this;
    }
}