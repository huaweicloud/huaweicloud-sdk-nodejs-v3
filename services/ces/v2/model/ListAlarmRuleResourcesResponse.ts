import { DimensionResp } from './DimensionResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmRuleResourcesResponse extends SdkResponse {
    public resources?: Array<Array<DimensionResp>>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<Array<DimensionResp>>): ListAlarmRuleResourcesResponse {
        this['resources'] = resources;
        return this;
    }
    public withCount(count: number): ListAlarmRuleResourcesResponse {
        this['count'] = count;
        return this;
    }
}