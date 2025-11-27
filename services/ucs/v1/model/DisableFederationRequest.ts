

export class DisableFederationRequest {
    public clustergroupid?: string;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): DisableFederationRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
}