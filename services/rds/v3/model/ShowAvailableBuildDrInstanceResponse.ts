import { DRInstance } from './DRInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAvailableBuildDrInstanceResponse extends SdkResponse {
    public instances?: Array<DRInstance>;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<DRInstance>): ShowAvailableBuildDrInstanceResponse {
        this['instances'] = instances;
        return this;
    }
}