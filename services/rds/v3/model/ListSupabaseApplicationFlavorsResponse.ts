import { SupabaseSpecFlavorInfo } from './SupabaseSpecFlavorInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSupabaseApplicationFlavorsResponse extends SdkResponse {
    public flavors?: Array<SupabaseSpecFlavorInfo>;
    public constructor() { 
        super();
    }
    public withFlavors(flavors: Array<SupabaseSpecFlavorInfo>): ListSupabaseApplicationFlavorsResponse {
        this['flavors'] = flavors;
        return this;
    }
}