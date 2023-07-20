import { Flavor } from './Flavor';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlavorsResponse extends SdkResponse {
    public flavors?: Array<Flavor>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withFlavors(flavors: Array<Flavor>): ListFlavorsResponse {
        this['flavors'] = flavors;
        return this;
    }
    public withTotal(total: number): ListFlavorsResponse {
        this['total'] = total;
        return this;
    }
}