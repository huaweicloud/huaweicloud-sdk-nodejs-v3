

export class ClusterJoinGroupRequestBody {
    public clusterGroupID?: string;
    public constructor() { 
    }
    public withClusterGroupID(clusterGroupID: string): ClusterJoinGroupRequestBody {
        this['clusterGroupID'] = clusterGroupID;
        return this;
    }
}