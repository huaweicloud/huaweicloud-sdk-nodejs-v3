

export class DisableClusterPolicyRequest {
    public clusterid?: string;
    public constructor(clusterid?: string) { 
        this['clusterid'] = clusterid;
    }
    public withClusterid(clusterid: string): DisableClusterPolicyRequest {
        this['clusterid'] = clusterid;
        return this;
    }
}