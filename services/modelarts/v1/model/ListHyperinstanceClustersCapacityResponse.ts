import { ServerHpsClusterCapacity } from './ServerHpsClusterCapacity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHyperinstanceClustersCapacityResponse extends SdkResponse {
    public capacities?: Array<ServerHpsClusterCapacity>;
    public constructor() { 
        super();
    }
    public withCapacities(capacities: Array<ServerHpsClusterCapacity>): ListHyperinstanceClustersCapacityResponse {
        this['capacities'] = capacities;
        return this;
    }
}