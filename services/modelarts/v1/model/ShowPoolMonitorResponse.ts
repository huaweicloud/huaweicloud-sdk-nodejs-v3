import { PoolMonitorMetrics } from './PoolMonitorMetrics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPoolMonitorResponse extends SdkResponse {
    public metrics?: Array<PoolMonitorMetrics>;
    public constructor() { 
        super();
    }
    public withMetrics(metrics: Array<PoolMonitorMetrics>): ShowPoolMonitorResponse {
        this['metrics'] = metrics;
        return this;
    }
}