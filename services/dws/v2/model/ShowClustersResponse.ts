import { ClusterInfo } from './ClusterInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClustersResponse extends SdkResponse {
    public clusters?: Array<ClusterInfo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withClusters(clusters: Array<ClusterInfo>): ShowClustersResponse {
        this['clusters'] = clusters;
        return this;
    }
    public withCount(count: number): ShowClustersResponse {
        this['count'] = count;
        return this;
    }
}