import { QueryFlavorCapacityAzInfo } from './QueryFlavorCapacityAzInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFlavorCapacityResponse extends SdkResponse {
    public resources?: Array<QueryFlavorCapacityAzInfo>;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<QueryFlavorCapacityAzInfo>): ShowFlavorCapacityResponse {
        this['resources'] = resources;
        return this;
    }
}