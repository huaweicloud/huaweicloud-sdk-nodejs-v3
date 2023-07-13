import { ClusterInfo } from './ClusterInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClustersResponse extends SdkResponse {
    public clusters?: Array<ClusterInfo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withClusters(clusters: Array<ClusterInfo>): ListClustersResponse {
        this['clusters'] = clusters;
        return this;
    }
    public withCount(count: number): ListClustersResponse {
        this['count'] = count;
        return this;
    }
}