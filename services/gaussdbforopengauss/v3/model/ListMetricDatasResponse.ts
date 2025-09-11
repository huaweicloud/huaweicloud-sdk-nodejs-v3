import { InstancesMetricResult } from './InstancesMetricResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMetricDatasResponse extends SdkResponse {
    public instances?: Array<InstancesMetricResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<InstancesMetricResult>): ListMetricDatasResponse {
        this['instances'] = instances;
        return this;
    }
    public withTotalCount(totalCount: number): ListMetricDatasResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}