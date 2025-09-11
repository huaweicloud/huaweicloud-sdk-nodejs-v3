import { MetricDataResult } from './MetricDataResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceMetricDataResponse extends SdkResponse {
    private 'instance_id'?: string;
    public metrics?: Array<MetricDataResult>;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowInstanceMetricDataResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withMetrics(metrics: Array<MetricDataResult>): ShowInstanceMetricDataResponse {
        this['metrics'] = metrics;
        return this;
    }
}