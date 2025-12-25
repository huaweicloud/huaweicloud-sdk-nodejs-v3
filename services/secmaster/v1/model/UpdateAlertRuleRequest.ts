import { UpdateAlertRuleRequestBody } from './UpdateAlertRuleRequestBody';


export class UpdateAlertRuleRequest {
    private 'workspace_id'?: string;
    private 'rule_id'?: string;
    public body?: UpdateAlertRuleRequestBody;
    public constructor(workspaceId?: string, ruleId?: string) { 
        this['workspace_id'] = workspaceId;
        this['rule_id'] = ruleId;
    }
    public withWorkspaceId(workspaceId: string): UpdateAlertRuleRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withRuleId(ruleId: string): UpdateAlertRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withBody(body: UpdateAlertRuleRequestBody): UpdateAlertRuleRequest {
        this['body'] = body;
        return this;
    }
}