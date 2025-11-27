

export class ShowGitOpsStatusRequest {
    public clusterid?: string;
    public constructor(clusterid?: string) { 
        this['clusterid'] = clusterid;
    }
    public withClusterid(clusterid: string): ShowGitOpsStatusRequest {
        this['clusterid'] = clusterid;
        return this;
    }
}