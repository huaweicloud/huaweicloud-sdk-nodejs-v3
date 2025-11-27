

export class RetryClusterActivationRequest {
    public clusterid?: string;
    public constructor(clusterid?: string) { 
        this['clusterid'] = clusterid;
    }
    public withClusterid(clusterid: string): RetryClusterActivationRequest {
        this['clusterid'] = clusterid;
        return this;
    }
}