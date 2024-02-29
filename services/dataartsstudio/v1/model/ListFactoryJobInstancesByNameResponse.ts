import { JobInstance } from './JobInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFactoryJobInstancesByNameResponse extends SdkResponse {
    public total?: number;
    public instances?: Array<JobInstance>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListFactoryJobInstancesByNameResponse {
        this['total'] = total;
        return this;
    }
    public withInstances(instances: Array<JobInstance>): ListFactoryJobInstancesByNameResponse {
        this['instances'] = instances;
        return this;
    }
}