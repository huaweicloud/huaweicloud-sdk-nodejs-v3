import { FlavorView } from './FlavorView';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlavorsResponse extends SdkResponse {
    public flavors?: Array<FlavorView>;
    public constructor() { 
        super();
    }
    public withFlavors(flavors: Array<FlavorView>): ListFlavorsResponse {
        this['flavors'] = flavors;
        return this;
    }
}