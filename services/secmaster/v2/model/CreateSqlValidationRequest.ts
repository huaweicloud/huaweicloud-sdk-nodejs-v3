import { CreateSqlValidationRequestBody } from './CreateSqlValidationRequestBody';


export class CreateSqlValidationRequest {
    private 'workspace_id'?: string;
    public body?: CreateSqlValidationRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateSqlValidationRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateSqlValidationRequestBody): CreateSqlValidationRequest {
        this['body'] = body;
        return this;
    }
}