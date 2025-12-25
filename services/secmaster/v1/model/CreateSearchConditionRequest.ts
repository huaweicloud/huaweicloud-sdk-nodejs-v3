import { CreateSearchConditionRequestBody } from './CreateSearchConditionRequestBody';


export class CreateSearchConditionRequest {
    private 'workspace_id'?: string;
    public body?: CreateSearchConditionRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateSearchConditionRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateSearchConditionRequestBody): CreateSearchConditionRequest {
        this['body'] = body;
        return this;
    }
}