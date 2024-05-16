import { HtapFlavorInfoFlavors } from './HtapFlavorInfoFlavors';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHtapFlavorResponse extends SdkResponse {
    public flavors?: Array<HtapFlavorInfoFlavors>;
    public constructor() { 
        super();
    }
    public withFlavors(flavors: Array<HtapFlavorInfoFlavors>): ListHtapFlavorResponse {
        this['flavors'] = flavors;
        return this;
    }
}