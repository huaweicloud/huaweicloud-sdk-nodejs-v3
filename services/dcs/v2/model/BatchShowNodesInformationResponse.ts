import { InstanceNodesInfoResp } from './InstanceNodesInfoResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchShowNodesInformationResponse extends SdkResponse {
    public count?: number;
    public instances?: Array<InstanceNodesInfoResp>;
    public constructor() { 
        super();
    }
    public withCount(count: number): BatchShowNodesInformationResponse {
        this['count'] = count;
        return this;
    }
    public withInstances(instances: Array<InstanceNodesInfoResp>): BatchShowNodesInformationResponse {
        this['instances'] = instances;
        return this;
    }
}