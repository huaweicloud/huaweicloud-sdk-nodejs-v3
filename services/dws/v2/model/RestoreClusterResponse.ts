import { Cluster } from './Cluster';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RestoreClusterResponse extends SdkResponse {
    public cluster?: Cluster;
    public constructor() { 
        super();
    }
    public withCluster(cluster: Cluster): RestoreClusterResponse {
        this['cluster'] = cluster;
        return this;
    }
}