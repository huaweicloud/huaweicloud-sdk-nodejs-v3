import { DedicatedCluster } from './DedicatedCluster';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceClustersResponse extends SdkResponse {
    private 'dedicated_cluster'?: Array<DedicatedCluster>;
    public constructor() { 
        super();
    }
    public withDedicatedCluster(dedicatedCluster: Array<DedicatedCluster>): ShowResourceClustersResponse {
        this['dedicated_cluster'] = dedicatedCluster;
        return this;
    }
    public set dedicatedCluster(dedicatedCluster: Array<DedicatedCluster>  | undefined) {
        this['dedicated_cluster'] = dedicatedCluster;
    }
    public get dedicatedCluster(): Array<DedicatedCluster> | undefined {
        return this['dedicated_cluster'];
    }
}