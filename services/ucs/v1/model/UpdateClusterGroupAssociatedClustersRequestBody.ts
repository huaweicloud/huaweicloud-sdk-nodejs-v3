

export class UpdateClusterGroupAssociatedClustersRequestBody {
    public clusterIds?: Array<string>;
    public constructor() { 
    }
    public withClusterIds(clusterIds: Array<string>): UpdateClusterGroupAssociatedClustersRequestBody {
        this['clusterIds'] = clusterIds;
        return this;
    }
}