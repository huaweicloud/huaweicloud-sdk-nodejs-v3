

export class EnableClusterPolicyRequest {
    public clusterid?: string;
    public retry?: string;
    public constructor(clusterid?: string) { 
        this['clusterid'] = clusterid;
    }
    public withClusterid(clusterid: string): EnableClusterPolicyRequest {
        this['clusterid'] = clusterid;
        return this;
    }
    public withRetry(retry: string): EnableClusterPolicyRequest {
        this['retry'] = retry;
        return this;
    }
}