import { QualityTaskOverviewVO2 } from './QualityTaskOverviewVO2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConsistencyTaskResponse extends SdkResponse {
    public count?: number;
    public resources?: Array<QualityTaskOverviewVO2>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListConsistencyTaskResponse {
        this['count'] = count;
        return this;
    }
    public withResources(resources: Array<QualityTaskOverviewVO2>): ListConsistencyTaskResponse {
        this['resources'] = resources;
        return this;
    }
}