

export class DisableGitOpsRequest {
    public clusterid?: string;
    public constructor(clusterid?: string) { 
        this['clusterid'] = clusterid;
    }
    public withClusterid(clusterid: string): DisableGitOpsRequest {
        this['clusterid'] = clusterid;
        return this;
    }
}