import { LogicalClusterRingInfo } from './LogicalClusterRingInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogicalClusterRingsResponse extends SdkResponse {
    private 'cluster_rings'?: Array<LogicalClusterRingInfo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withClusterRings(clusterRings: Array<LogicalClusterRingInfo>): ListLogicalClusterRingsResponse {
        this['cluster_rings'] = clusterRings;
        return this;
    }
    public set clusterRings(clusterRings: Array<LogicalClusterRingInfo>  | undefined) {
        this['cluster_rings'] = clusterRings;
    }
    public get clusterRings(): Array<LogicalClusterRingInfo> | undefined {
        return this['cluster_rings'];
    }
    public withCount(count: number): ListLogicalClusterRingsResponse {
        this['count'] = count;
        return this;
    }
}