import { ValidateAuthorizationRequestBody } from './ValidateAuthorizationRequestBody';


export class ValidateAuthorizationRequest {
    private 'workspace_id'?: string;
    public body?: ValidateAuthorizationRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ValidateAuthorizationRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: ValidateAuthorizationRequestBody): ValidateAuthorizationRequest {
        this['body'] = body;
        return this;
    }
}