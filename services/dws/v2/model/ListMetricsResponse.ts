import { ClusterMetric } from './ClusterMetric';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMetricsResponse extends SdkResponse {
    public code?: number;
    public msg?: string;
    public data?: Array<ClusterMetric>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withCode(code: number): ListMetricsResponse {
        this['code'] = code;
        return this;
    }
    public withMsg(msg: string): ListMetricsResponse {
        this['msg'] = msg;
        return this;
    }
    public withData(data: Array<ClusterMetric>): ListMetricsResponse {
        this['data'] = data;
        return this;
    }
    public withCount(count: number): ListMetricsResponse {
        this['count'] = count;
        return this;
    }
}