

export class ListSecurityDlfDataWareHousesRequest {
    public workspace?: string;
    public offset?: number;
    public limit?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListSecurityDlfDataWareHousesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withOffset(offset: number): ListSecurityDlfDataWareHousesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSecurityDlfDataWareHousesRequest {
        this['limit'] = limit;
        return this;
    }
}