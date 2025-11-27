

export class EnableClustergroupPolicyRequest {
    public clustergroupid?: string;
    public retry?: string;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): EnableClustergroupPolicyRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
    public withRetry(retry: string): EnableClustergroupPolicyRequest {
        this['retry'] = retry;
        return this;
    }
}