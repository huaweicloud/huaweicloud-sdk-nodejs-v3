

export class ShowStandardTemplateRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ShowStandardTemplateRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ShowStandardTemplateRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ShowStandardTemplateRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
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