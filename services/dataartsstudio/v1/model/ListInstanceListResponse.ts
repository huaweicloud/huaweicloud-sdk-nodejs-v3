import { InstanceForApiActionDTO } from './InstanceForApiActionDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceListResponse extends SdkResponse {
    public instances?: Array<InstanceForApiActionDTO>;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<InstanceForApiActionDTO>): ListInstanceListResponse {
        this['instances'] = instances;
        return this;
    }
}