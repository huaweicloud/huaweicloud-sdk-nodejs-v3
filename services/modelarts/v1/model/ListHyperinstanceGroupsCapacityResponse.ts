import { ServerHpsGroupCapacity } from './ServerHpsGroupCapacity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHyperinstanceGroupsCapacityResponse extends SdkResponse {
    public capacities?: Array<ServerHpsGroupCapacity>;
    public constructor() { 
        super();
    }
    public withCapacities(capacities: Array<ServerHpsGroupCapacity>): ListHyperinstanceGroupsCapacityResponse {
        this['capacities'] = capacities;
        return this;
    }
}