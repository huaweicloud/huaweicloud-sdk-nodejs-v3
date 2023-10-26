import { Clusters } from './Clusters';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClustersResponse extends SdkResponse {
    public clusters?: Array<Clusters>;
    public constructor() { 
        super();
    }
    public withClusters(clusters: Array<Clusters>): ListClustersResponse {
        this['clusters'] = clusters;
        return this;
    }
}