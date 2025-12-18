import { InstanceDetail } from './InstanceDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDdmDetailResponse extends SdkResponse {
    public instances?: Array<InstanceDetail>;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<InstanceDetail>): ShowDdmDetailResponse {
        this['instances'] = instances;
        return this;
    }
}