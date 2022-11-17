import { FlavorsItems } from './FlavorsItems';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlavorsResponse extends SdkResponse {
    public flavors?: Array<FlavorsItems>;
    public constructor() { 
        super();
    }
    public withFlavors(flavors: Array<FlavorsItems>): ListFlavorsResponse {
        this['flavors'] = flavors;
        return this;
    }
}