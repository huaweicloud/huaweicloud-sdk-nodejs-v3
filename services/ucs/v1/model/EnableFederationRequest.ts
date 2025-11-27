

export class EnableFederationRequest {
    public clustergroupid?: string;
    public retryjoinall?: boolean;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): EnableFederationRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
    public withRetryjoinall(retryjoinall: boolean): EnableFederationRequest {
        this['retryjoinall'] = retryjoinall;
        return this;
    }
}