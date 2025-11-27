

export class DeleteClusterRequest {
    public clusterid?: string;
    public constructor(clusterid?: string) { 
        this['clusterid'] = clusterid;
    }
    public withClusterid(clusterid: string): DeleteClusterRequest {
        this['clusterid'] = clusterid;
        return this;
    }
}