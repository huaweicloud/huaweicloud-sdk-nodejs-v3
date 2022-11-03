import { InstanceInfo } from './InstanceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInstanceResponse extends SdkResponse {
    public instances?: Array<InstanceInfo>;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<InstanceInfo>): CreateInstanceResponse {
        this['instances'] = instances;
        return this;
    }
}