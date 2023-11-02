import { QualityTaskOverviewVO } from './QualityTaskOverviewVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQualityTaskResponse extends SdkResponse {
    public count?: number;
    public resources?: Array<QualityTaskOverviewVO>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListQualityTaskResponse {
        this['count'] = count;
        return this;
    }
    public withResources(resources: Array<QualityTaskOverviewVO>): ListQualityTaskResponse {
        this['resources'] = resources;
        return this;
    }
}