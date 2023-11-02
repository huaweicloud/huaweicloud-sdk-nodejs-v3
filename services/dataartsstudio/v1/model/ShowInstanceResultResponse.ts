import { SubInstanceResult } from './SubInstanceResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceResultResponse extends SdkResponse {
    public count?: number;
    public resources?: Array<SubInstanceResult>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowInstanceResultResponse {
        this['count'] = count;
        return this;
    }
    public withResources(resources: Array<SubInstanceResult>): ShowInstanceResultResponse {
        this['resources'] = resources;
        return this;
    }
}