import { FlavorResult } from './FlavorResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlavorsDetailsResponse extends SdkResponse {
    public flavors?: Array<FlavorResult>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withFlavors(flavors: Array<FlavorResult>): ListFlavorsDetailsResponse {
        this['flavors'] = flavors;
        return this;
    }
    public withTotal(total: number): ListFlavorsDetailsResponse {
        this['total'] = total;
        return this;
    }
}