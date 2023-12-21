import { InstanceDetail } from './InstanceDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesResponse extends SdkResponse {
    public total?: number;
    public instance?: Array<InstanceDetail>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListInstancesResponse {
        this['total'] = total;
        return this;
    }
    public withInstance(instance: Array<InstanceDetail>): ListInstancesResponse {
        this['instance'] = instance;
        return this;
    }
}