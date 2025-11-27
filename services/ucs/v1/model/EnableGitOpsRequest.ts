

export class EnableGitOpsRequest {
    public clusterid?: string;
    public retry?: string;
    public constructor(clusterid?: string) { 
        this['clusterid'] = clusterid;
    }
    public withClusterid(clusterid: string): EnableGitOpsRequest {
        this['clusterid'] = clusterid;
        return this;
    }
    public withRetry(retry: string): EnableGitOpsRequest {
        this['retry'] = retry;
        return this;
    }
}