import { Cluster } from './Cluster';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClusterV2Response extends SdkResponse {
    public cluster?: Cluster;
    public constructor() { 
        super();
    }
    public withCluster(cluster: Cluster): CreateClusterV2Response {
        this['cluster'] = cluster;
        return this;
    }
}