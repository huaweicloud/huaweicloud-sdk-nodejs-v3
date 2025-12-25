import { UpdateSearchConditionRequestBody } from './UpdateSearchConditionRequestBody';


export class UpdateSearchConditionRequest {
    private 'workspace_id'?: string;
    private 'condition_id'?: string;
    public body?: UpdateSearchConditionRequestBody;
    public constructor(workspaceId?: string, conditionId?: string) { 
        this['workspace_id'] = workspaceId;
        this['condition_id'] = conditionId;
    }
    public withWorkspaceId(workspaceId: string): UpdateSearchConditionRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withConditionId(conditionId: string): UpdateSearchConditionRequest {
        this['condition_id'] = conditionId;
        return this;
    }
    public set conditionId(conditionId: string  | undefined) {
        this['condition_id'] = conditionId;
    }
    public get conditionId(): string | undefined {
        return this['condition_id'];
    }
    public withBody(body: UpdateSearchConditionRequestBody): UpdateSearchConditionRequest {
        this['body'] = body;
        return this;
    }
}