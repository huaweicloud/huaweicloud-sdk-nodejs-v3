

export class ShowClusterGroupRequest {
    public clustergroupid?: string;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): ShowClusterGroupRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
}