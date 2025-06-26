import { ServerMetricData } from './ServerMetricData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServerMetricDataResponse extends SdkResponse {
    private 'server_metrics'?: Array<ServerMetricData>;
    public constructor() { 
        super();
    }
    public withServerMetrics(serverMetrics: Array<ServerMetricData>): ListServerMetricDataResponse {
        this['server_metrics'] = serverMetrics;
        return this;
    }
    public set serverMetrics(serverMetrics: Array<ServerMetricData>  | undefined) {
        this['server_metrics'] = serverMetrics;
    }
    public get serverMetrics(): Array<ServerMetricData> | undefined {
        return this['server_metrics'];
    }
}