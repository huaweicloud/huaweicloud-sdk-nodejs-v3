import { Cluster } from './Cluster';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterDetailsResponse extends SdkResponse {
    public cluster?: Cluster;
    public constructor() { 
        super();
    }
    public withCluster(cluster: Cluster): ShowClusterDetailsResponse {
        this['cluster'] = cluster;
        return this;
    }
}