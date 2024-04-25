

export class DebugSecurityDlfDataWareHousesRequest {
    public workspace?: string;
    private 'dw_id'?: string;
    public constructor(workspace?: string, dwId?: string) { 
        this['workspace'] = workspace;
        this['dw_id'] = dwId;
    }
    public withWorkspace(workspace: string): DebugSecurityDlfDataWareHousesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDwId(dwId: string): DebugSecurityDlfDataWareHousesRequest {
        this['dw_id'] = dwId;
        return this;
    }
    public set dwId(dwId: string  | undefined) {
        this['dw_id'] = dwId;
    }
    public get dwId(): string | undefined {
        return this['dw_id'];
    }
}