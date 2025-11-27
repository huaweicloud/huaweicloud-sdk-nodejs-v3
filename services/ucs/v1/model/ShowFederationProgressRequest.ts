

export class ShowFederationProgressRequest {
    public clustergroupid?: string;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): ShowFederationProgressRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
}