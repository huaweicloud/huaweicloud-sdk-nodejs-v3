

export class ListSecurityDlfDataWareHousesRequest {
    public workspace?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListSecurityDlfDataWareHousesRequest {
        this['workspace'] = workspace;
        return this;
    }
}