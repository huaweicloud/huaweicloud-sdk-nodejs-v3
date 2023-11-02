

export class ShowStandardTemplateRequest {
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ShowStandardTemplateRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ShowStandardTemplateRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowStandardTemplateRequest {
        this['offset'] = offset;
        return this;
    }
}