

export class AddonInstanceRollbackRequest {
    public clusterID?: string;
    public constructor(clusterID?: string) { 
        this['clusterID'] = clusterID;
    }
    public withClusterID(clusterID: string): AddonInstanceRollbackRequest {
        this['clusterID'] = clusterID;
        return this;
    }
}