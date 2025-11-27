

export class DeleteClusterGroupRequest {
    public clustergroupid?: string;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): DeleteClusterGroupRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
}