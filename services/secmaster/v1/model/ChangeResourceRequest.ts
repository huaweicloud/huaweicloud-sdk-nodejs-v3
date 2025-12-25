import { ChangeResourceRequestBody } from './ChangeResourceRequestBody';


export class ChangeResourceRequest {
    private 'workspace_id'?: string;
    public id?: string;
    private 'X-Language'?: string;
    private 'content-type'?: string;
    public body?: ChangeResourceRequestBody;
    public constructor(workspaceId?: string, id?: string, xLanguage?: string, contentType?: string) { 
        this['workspace_id'] = workspaceId;
        this['id'] = id;
        this['X-Language'] = xLanguage;
        this['content-type'] = contentType;
    }
    public withWorkspaceId(workspaceId: string): ChangeResourceRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withId(id: string): ChangeResourceRequest {
        this['id'] = id;
        return this;
    }
    public withXLanguage(xLanguage: string): ChangeResourceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withContentType(contentType: string): ChangeResourceRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withBody(body: ChangeResourceRequestBody): ChangeResourceRequest {
        this['body'] = body;
        return this;
    }
}