import { CheckitemModel } from './CheckitemModel';


export class UpdateCheckitemRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'X-Language'?: string;
    private 'checkitem_id'?: string;
    public body?: CheckitemModel;
    public constructor(contentType?: string, workspaceId?: string, xLanguage?: string, checkitemId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['X-Language'] = xLanguage;
        this['checkitem_id'] = checkitemId;
    }
    public withContentType(contentType: string): UpdateCheckitemRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): UpdateCheckitemRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withXLanguage(xLanguage: string): UpdateCheckitemRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withCheckitemId(checkitemId: string): UpdateCheckitemRequest {
        this['checkitem_id'] = checkitemId;
        return this;
    }
    public set checkitemId(checkitemId: string  | undefined) {
        this['checkitem_id'] = checkitemId;
    }
    public get checkitemId(): string | undefined {
        return this['checkitem_id'];
    }
    public withBody(body: CheckitemModel): UpdateCheckitemRequest {
        this['body'] = body;
        return this;
    }
}