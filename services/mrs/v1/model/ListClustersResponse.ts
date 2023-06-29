import { Cluster } from './Cluster';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClustersResponse extends SdkResponse {
    public clusterTotal?: number;
    public clusters?: Array<Cluster>;
    public constructor() { 
        super();
    }
    public withClusterTotal(clusterTotal: number): ListClustersResponse {
        this['clusterTotal'] = clusterTotal;
        return this;
    }
    public withClusters(clusters: Array<Cluster>): ListClustersResponse {
        this['clusters'] = clusters;
        return this;
    }
}