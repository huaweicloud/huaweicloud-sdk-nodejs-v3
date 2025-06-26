import { Accessory } from './Accessory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceAccessoriesResponse extends SdkResponse {
    public accessories?: Array<Accessory>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withAccessories(accessories: Array<Accessory>): ListInstanceAccessoriesResponse {
        this['accessories'] = accessories;
        return this;
    }
    public withTotal(total: number): ListInstanceAccessoriesResponse {
        this['total'] = total;
        return this;
    }
}