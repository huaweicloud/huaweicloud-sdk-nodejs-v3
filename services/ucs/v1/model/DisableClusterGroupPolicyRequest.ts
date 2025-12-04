

export class DisableClusterGroupPolicyRequest {
    public clustergroupid?: string;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): DisableClusterGroupPolicyRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
}