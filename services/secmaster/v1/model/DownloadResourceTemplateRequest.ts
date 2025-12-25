

export class DownloadResourceTemplateRequest {
    private 'workspace_id'?: string;
    private 'X-Language'?: string;
    private 'content-type'?: string;
    public type?: string;
    public constructor(workspaceId?: string, xLanguage?: string, contentType?: string, type?: string) { 
        this['workspace_id'] = workspaceId;
        this['X-Language'] = xLanguage;
        this['content-type'] = contentType;
        this['type'] = type;
    }
    public withWorkspaceId(workspaceId: string): DownloadResourceTemplateRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withXLanguage(xLanguage: string): DownloadResourceTemplateRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withContentType(contentType: string): DownloadResourceTemplateRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withType(type: string): DownloadResourceTemplateRequest {
        this['type'] = type;
        return this;
    }
}