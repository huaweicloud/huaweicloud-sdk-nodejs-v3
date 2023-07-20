import { SimplifiedInstanceEntry } from './SimplifiedInstanceEntry';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSimplifiedInstancesResponse extends SdkResponse {
    public instances?: Array<SimplifiedInstanceEntry>;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<SimplifiedInstanceEntry>): ListSimplifiedInstancesResponse {
        this['instances'] = instances;
        return this;
    }
}