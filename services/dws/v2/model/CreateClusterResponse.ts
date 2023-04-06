import { Cluster } from './Cluster';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClusterResponse extends SdkResponse {
    public cluster?: Cluster;
    public constructor() { 
        super();
    }
    public withCluster(cluster: Cluster): CreateClusterResponse {
        this['cluster'] = cluster;
        return this;
    }
}