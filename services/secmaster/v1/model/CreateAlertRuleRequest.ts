import { CreateAlertRuleRequestBody } from './CreateAlertRuleRequestBody';


export class CreateAlertRuleRequest {
    private 'workspace_id'?: string;
    public body?: CreateAlertRuleRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateAlertRuleRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateAlertRuleRequestBody): CreateAlertRuleRequest {
        this['body'] = body;
        return this;
    }
}