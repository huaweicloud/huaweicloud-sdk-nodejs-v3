import { Cluster } from './Cluster';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDbEncryptInstancesResponse extends SdkResponse {
    public clusters?: Array<Cluster>;
    public constructor() { 
        super();
    }
    public withClusters(clusters: Array<Cluster>): ListDbEncryptInstancesResponse {
        this['clusters'] = clusters;
        return this;
    }
}