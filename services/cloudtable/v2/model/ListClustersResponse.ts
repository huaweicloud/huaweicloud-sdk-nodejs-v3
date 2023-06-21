import { ClusterDetail } from './ClusterDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClustersResponse extends SdkResponse {
    public clusters?: Array<ClusterDetail>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withClusters(clusters: Array<ClusterDetail>): ListClustersResponse {
        this['clusters'] = clusters;
        return this;
    }
    public withCount(count: number): ListClustersResponse {
        this['count'] = count;
        return this;
    }
}