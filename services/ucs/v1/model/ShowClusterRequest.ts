

export class ShowClusterRequest {
    public clusterid?: string;
    public constructor(clusterid?: string) { 
        this['clusterid'] = clusterid;
    }
    public withClusterid(clusterid: string): ShowClusterRequest {
        this['clusterid'] = clusterid;
        return this;
    }
}