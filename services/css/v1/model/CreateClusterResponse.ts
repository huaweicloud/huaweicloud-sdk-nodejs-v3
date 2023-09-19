import { CreateClusterClusterResponse } from './CreateClusterClusterResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClusterResponse extends SdkResponse {
    public cluster?: CreateClusterClusterResponse;
    public orderId?: string;
    public constructor() { 
        super();
    }
    public withCluster(cluster: CreateClusterClusterResponse): CreateClusterResponse {
        this['cluster'] = cluster;
        return this;
    }
    public withOrderId(orderId: string): CreateClusterResponse {
        this['orderId'] = orderId;
        return this;
    }
}