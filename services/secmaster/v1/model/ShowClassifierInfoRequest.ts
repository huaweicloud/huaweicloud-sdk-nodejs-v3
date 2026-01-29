

export class ShowClassifierInfoRequest {
    private 'Content-Type'?: string;
    private 'workspace_id'?: string;
    private 'classifier_id'?: string;
    public constructor(contentType?: string, workspaceId?: string, classifierId?: string) { 
        this['Content-Type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['classifier_id'] = classifierId;
    }
    public withContentType(contentType: string): ShowClassifierInfoRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withWorkspaceId(workspaceId: string): ShowClassifierInfoRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withClassifierId(classifierId: string): ShowClassifierInfoRequest {
        this['classifier_id'] = classifierId;
        return this;
    }
    public set classifierId(classifierId: string  | undefined) {
        this['classifier_id'] = classifierId;
    }
    public get classifierId(): string | undefined {
        return this['classifier_id'];
    }
}