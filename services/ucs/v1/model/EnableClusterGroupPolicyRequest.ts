

export class EnableClusterGroupPolicyRequest {
    public clustergroupid?: string;
    public retry?: string;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): EnableClusterGroupPolicyRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
    public withRetry(retry: string): EnableClusterGroupPolicyRequest {
        this['retry'] = retry;
        return this;
    }
}