import { CreateClusterResp } from './CreateClusterResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClusterResponse extends SdkResponse {
    public cluster?: CreateClusterResp;
    public orderId?: string;
    public constructor() { 
        super();
    }
    public withCluster(cluster: CreateClusterResp): CreateClusterResponse {
        this['cluster'] = cluster;
        return this;
    }
    public withOrderId(orderId: string): CreateClusterResponse {
        this['orderId'] = orderId;
        return this;
    }
}