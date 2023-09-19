import { ClusterList } from './ClusterList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClustersDetailsResponse extends SdkResponse {
    public totalSize?: number;
    public clusters?: Array<ClusterList>;
    public constructor() { 
        super();
    }
    public withTotalSize(totalSize: number): ListClustersDetailsResponse {
        this['totalSize'] = totalSize;
        return this;
    }
    public withClusters(clusters: Array<ClusterList>): ListClustersDetailsResponse {
        this['clusters'] = clusters;
        return this;
    }
}