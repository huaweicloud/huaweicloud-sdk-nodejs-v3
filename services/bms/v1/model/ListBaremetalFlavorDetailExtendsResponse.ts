import { FlavorsResp } from './FlavorsResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBaremetalFlavorDetailExtendsResponse extends SdkResponse {
    public flavors?: Array<FlavorsResp>;
    public constructor() { 
        super();
    }
    public withFlavors(flavors: Array<FlavorsResp>): ListBaremetalFlavorDetailExtendsResponse {
        this['flavors'] = flavors;
        return this;
    }
}