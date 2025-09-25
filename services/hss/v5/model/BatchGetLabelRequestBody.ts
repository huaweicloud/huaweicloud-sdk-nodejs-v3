

export class BatchGetLabelRequestBody {
    private 'cluster_ids'?: Array<string>;
    public constructor(clusterIds?: Array<string>) { 
        this['cluster_ids'] = clusterIds;
    }
    public withClusterIds(clusterIds: Array<string>): BatchGetLabelRequestBody {
        this['cluster_ids'] = clusterIds;
        return this;
    }
    public set clusterIds(clusterIds: Array<string>  | undefined) {
        this['cluster_ids'] = clusterIds;
    }
    public get clusterIds(): Array<string> | undefined {
        return this['cluster_ids'];
    }
}