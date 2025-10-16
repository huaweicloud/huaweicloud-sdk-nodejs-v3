import { ShowStatusClusterItem } from './ShowStatusClusterItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStatusClusterResponse extends SdkResponse {
    private 'metric_name'?: string;
    private 'cluster_list'?: Array<ShowStatusClusterItem>;
    public constructor() { 
        super();
    }
    public withMetricName(metricName: string): ShowStatusClusterResponse {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withClusterList(clusterList: Array<ShowStatusClusterItem>): ShowStatusClusterResponse {
        this['cluster_list'] = clusterList;
        return this;
    }
    public set clusterList(clusterList: Array<ShowStatusClusterItem>  | undefined) {
        this['cluster_list'] = clusterList;
    }
    public get clusterList(): Array<ShowStatusClusterItem> | undefined {
        return this['cluster_list'];
    }
}