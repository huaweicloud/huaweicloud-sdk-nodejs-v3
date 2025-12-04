import { InstanceResumeResult } from './InstanceResumeResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RestoreRecycleInstanceResponse extends SdkResponse {
    public instances?: Array<InstanceResumeResult>;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<InstanceResumeResult>): RestoreRecycleInstanceResponse {
        this['instances'] = instances;
        return this;
    }
}