import { CdmQueryClusterInstanceDetail } from './CdmQueryClusterInstanceDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceDetailResponse extends SdkResponse {
    public instance?: CdmQueryClusterInstanceDetail;
    public constructor() { 
        super();
    }
    public withInstance(instance: CdmQueryClusterInstanceDetail): ShowInstanceDetailResponse {
        this['instance'] = instance;
        return this;
    }
}