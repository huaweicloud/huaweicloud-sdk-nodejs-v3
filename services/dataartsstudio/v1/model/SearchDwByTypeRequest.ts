

export class SearchDwByTypeRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
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
    public withXProjectId(xProjectId: string): SearchDwByTypeRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): SearchDwByTypeRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
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