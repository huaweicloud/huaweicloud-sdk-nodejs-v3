import { HyperCluster } from './HyperCluster';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHyperClusterResponse extends SdkResponse {
    private 'hyper_clusters'?: Array<HyperCluster>;
    public constructor() { 
        super();
    }
    public withHyperClusters(hyperClusters: Array<HyperCluster>): ListHyperClusterResponse {
        this['hyper_clusters'] = hyperClusters;
        return this;
    }
    public set hyperClusters(hyperClusters: Array<HyperCluster>  | undefined) {
        this['hyper_clusters'] = hyperClusters;
    }
    public get hyperClusters(): Array<HyperCluster> | undefined {
        return this['hyper_clusters'];
    }
}