import { BaselineSearchRequestBody } from './BaselineSearchRequestBody';


export class SearchBaselineRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'X-Language'?: string;
    public body?: BaselineSearchRequestBody;
    public constructor(contentType?: string, workspaceId?: string, xLanguage?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['X-Language'] = xLanguage;
    }
    public withContentType(contentType: string): SearchBaselineRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): SearchBaselineRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withXLanguage(xLanguage: string): SearchBaselineRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BaselineSearchRequestBody): SearchBaselineRequest {
        this['body'] = body;
        return this;
    }
}