import { StatusStatistics } from './StatusStatistics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceStatisticsResponse extends SdkResponse {
    private 'cluster_statistics'?: StatusStatistics;
    private 'node_statistics'?: StatusStatistics;
    public constructor() { 
        super();
    }
    public withClusterStatistics(clusterStatistics: StatusStatistics): ShowResourceStatisticsResponse {
        this['cluster_statistics'] = clusterStatistics;
        return this;
    }
    public set clusterStatistics(clusterStatistics: StatusStatistics  | undefined) {
        this['cluster_statistics'] = clusterStatistics;
    }
    public get clusterStatistics(): StatusStatistics | undefined {
        return this['cluster_statistics'];
    }
    public withNodeStatistics(nodeStatistics: StatusStatistics): ShowResourceStatisticsResponse {
        this['node_statistics'] = nodeStatistics;
        return this;
    }
    public set nodeStatistics(nodeStatistics: StatusStatistics  | undefined) {
        this['node_statistics'] = nodeStatistics;
    }
    public get nodeStatistics(): StatusStatistics | undefined {
        return this['node_statistics'];
    }
}