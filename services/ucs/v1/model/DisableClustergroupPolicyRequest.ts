

export class DisableClustergroupPolicyRequest {
    public clustergroupid?: string;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): DisableClustergroupPolicyRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
}