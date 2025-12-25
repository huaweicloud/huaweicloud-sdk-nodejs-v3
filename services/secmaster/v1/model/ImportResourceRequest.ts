import { ImportResourceRequestBody } from './ImportResourceRequestBody';


export class ImportResourceRequest {
    private 'workspace_id'?: string;
    private 'X-Language'?: string;
    private 'content-type'?: string;
    public type?: string;
    public provider?: string;
    public body?: ImportResourceRequestBody;
    public constructor(workspaceId?: string, xLanguage?: string, contentType?: string, type?: string, provider?: string) { 
        this['workspace_id'] = workspaceId;
        this['X-Language'] = xLanguage;
        this['content-type'] = contentType;
        this['type'] = type;
        this['provider'] = provider;
    }
    public withWorkspaceId(workspaceId: string): ImportResourceRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withXLanguage(xLanguage: string): ImportResourceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withContentType(contentType: string): ImportResourceRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withType(type: string): ImportResourceRequest {
        this['type'] = type;
        return this;
    }
    public withProvider(provider: string): ImportResourceRequest {
        this['provider'] = provider;
        return this;
    }
    public withBody(body: ImportResourceRequestBody): ImportResourceRequest {
        this['body'] = body;
        return this;
    }
}