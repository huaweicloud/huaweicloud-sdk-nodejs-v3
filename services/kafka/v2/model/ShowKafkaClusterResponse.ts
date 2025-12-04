import { ShowKakfaClusterResponseCluster } from './ShowKakfaClusterResponseCluster';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKafkaClusterResponse extends SdkResponse {
    public cluster?: ShowKakfaClusterResponseCluster;
    public constructor() { 
        super();
    }
    public withCluster(cluster: ShowKakfaClusterResponseCluster): ShowKafkaClusterResponse {
        this['cluster'] = cluster;
        return this;
    }
}