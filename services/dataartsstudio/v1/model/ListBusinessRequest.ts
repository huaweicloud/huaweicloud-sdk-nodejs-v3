

export class ListBusinessRequest {
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListBusinessRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ListBusinessRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListBusinessRequest {
        this['offset'] = offset;
        return this;
    }
}