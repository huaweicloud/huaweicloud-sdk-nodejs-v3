

export class SearchDwByTypeRequest {
    public workspace?: string;
    private 'force_refresh'?: boolean;
    private 'dw_type'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string, dwType?: string) { 
        this['workspace'] = workspace;
        this['dw_type'] = dwType;
    }
    public withWorkspace(workspace: string): SearchDwByTypeRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withForceRefresh(forceRefresh: boolean): SearchDwByTypeRequest {
        this['force_refresh'] = forceRefresh;
        return this;
    }
    public set forceRefresh(forceRefresh: boolean  | undefined) {
        this['force_refresh'] = forceRefresh;
    }
    public get forceRefresh(): boolean | undefined {
        return this['force_refresh'];
    }
    public withDwType(dwType: string): SearchDwByTypeRequest {
        this['dw_type'] = dwType;
        return this;
    }
    public set dwType(dwType: string  | undefined) {
        this['dw_type'] = dwType;
    }
    public get dwType(): string | undefined {
        return this['dw_type'];
    }
    public withLimit(limit: number): SearchDwByTypeRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchDwByTypeRequest {
        this['offset'] = offset;
        return this;
    }
}