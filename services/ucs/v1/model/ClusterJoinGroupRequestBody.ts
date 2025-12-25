

export class ClusterJoinGroupRequestBody {
    public clusterGroupID?: string;
    public constructor(clusterGroupID?: string) { 
        this['clusterGroupID'] = clusterGroupID;
    }
    public withClusterGroupID(clusterGroupID: string): ClusterJoinGroupRequestBody {
        this['clusterGroupID'] = clusterGroupID;
        return this;
    }
}