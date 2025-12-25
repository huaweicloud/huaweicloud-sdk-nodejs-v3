

export class ShowLayoutWizardByFieldRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'layout_id'?: string;
    private 'field_id'?: string;
    public constructor(contentType?: string, workspaceId?: string, layoutId?: string, fieldId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['layout_id'] = layoutId;
        this['field_id'] = fieldId;
    }
    public withContentType(contentType: string): ShowLayoutWizardByFieldRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ShowLayoutWizardByFieldRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withLayoutId(layoutId: string): ShowLayoutWizardByFieldRequest {
        this['layout_id'] = layoutId;
        return this;
    }
    public set layoutId(layoutId: string  | undefined) {
        this['layout_id'] = layoutId;
    }
    public get layoutId(): string | undefined {
        return this['layout_id'];
    }
    public withFieldId(fieldId: string): ShowLayoutWizardByFieldRequest {
        this['field_id'] = fieldId;
        return this;
    }
    public set fieldId(fieldId: string  | undefined) {
        this['field_id'] = fieldId;
    }
    public get fieldId(): string | undefined {
        return this['field_id'];
    }
}