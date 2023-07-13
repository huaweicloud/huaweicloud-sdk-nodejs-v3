import { ShowClusterRespCluster } from './ShowClusterRespCluster';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterResponse extends SdkResponse {
    public cluster?: ShowClusterRespCluster;
    public constructor() { 
        super();
    }
    public withCluster(cluster: ShowClusterRespCluster): ShowClusterResponse {
        this['cluster'] = cluster;
        return this;
    }
}