import { ClusterDetail } from './ClusterDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterDetailsResponse extends SdkResponse {
    public cluster?: ClusterDetail;
    public constructor() { 
        super();
    }
    public withCluster(cluster: ClusterDetail): ListClusterDetailsResponse {
        this['cluster'] = cluster;
        return this;
    }
}