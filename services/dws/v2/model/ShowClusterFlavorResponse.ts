import { ClusterFlavorDetailInfo } from './ClusterFlavorDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterFlavorResponse extends SdkResponse {
    public flavor?: ClusterFlavorDetailInfo;
    public constructor() { 
        super();
    }
    public withFlavor(flavor: ClusterFlavorDetailInfo): ShowClusterFlavorResponse {
        this['flavor'] = flavor;
        return this;
    }
}