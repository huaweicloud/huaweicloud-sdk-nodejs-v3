import { TopoRingInfo } from './TopoRingInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTopoRingsResponse extends SdkResponse {
    private 'cluster_rings'?: Array<TopoRingInfo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withClusterRings(clusterRings: Array<TopoRingInfo>): ListTopoRingsResponse {
        this['cluster_rings'] = clusterRings;
        return this;
    }
    public set clusterRings(clusterRings: Array<TopoRingInfo>  | undefined) {
        this['cluster_rings'] = clusterRings;
    }
    public get clusterRings(): Array<TopoRingInfo> | undefined {
        return this['cluster_rings'];
    }
    public withCount(count: number): ListTopoRingsResponse {
        this['count'] = count;
        return this;
    }
}