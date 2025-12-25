

export class DeleteLayoutWizardRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'wizard_id'?: string;
    public constructor(contentType?: string, workspaceId?: string, wizardId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['wizard_id'] = wizardId;
    }
    public withContentType(contentType: string): DeleteLayoutWizardRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): DeleteLayoutWizardRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withWizardId(wizardId: string): DeleteLayoutWizardRequest {
        this['wizard_id'] = wizardId;
        return this;
    }
    public set wizardId(wizardId: string  | undefined) {
        this['wizard_id'] = wizardId;
    }
    public get wizardId(): string | undefined {
        return this['wizard_id'];
    }
}