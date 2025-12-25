import { WizardUpdateRequestPojos } from './WizardUpdateRequestPojos';


export class UpdateLayoutWizardsRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    public body?: WizardUpdateRequestPojos;
    public constructor(contentType?: string, workspaceId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
    }
    public withContentType(contentType: string): UpdateLayoutWizardsRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): UpdateLayoutWizardsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: WizardUpdateRequestPojos): UpdateLayoutWizardsRequest {
        this['body'] = body;
        return this;
    }
}