import { FlavorResult } from './FlavorResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDbFlavorsResponse extends SdkResponse {
    public flavors?: Array<FlavorResult>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withFlavors(flavors: Array<FlavorResult>): ListDbFlavorsResponse {
        this['flavors'] = flavors;
        return this;
    }
    public withTotal(total: number): ListDbFlavorsResponse {
        this['total'] = total;
        return this;
    }
}