import { AgentDimension } from './AgentDimension';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAgentDimensionInfoResponse extends SdkResponse {
    public dimensions?: Array<AgentDimension>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withDimensions(dimensions: Array<AgentDimension>): ListAgentDimensionInfoResponse {
        this['dimensions'] = dimensions;
        return this;
    }
    public withCount(count: number): ListAgentDimensionInfoResponse {
        this['count'] = count;
        return this;
    }
}