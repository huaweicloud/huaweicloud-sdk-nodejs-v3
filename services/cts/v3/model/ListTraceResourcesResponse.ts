import { TraceResource } from './TraceResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTraceResourcesResponse extends SdkResponse {
    public resources?: Array<TraceResource>;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<TraceResource>): ListTraceResourcesResponse {
        this['resources'] = resources;
        return this;
    }
}