import { Instance } from './Instance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceResponse extends SdkResponse {
    public instances?: Array<Instance>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<Instance>): ListInstanceResponse {
        this['instances'] = instances;
        return this;
    }
    public withTotal(total: number): ListInstanceResponse {
        this['total'] = total;
        return this;
    }
}