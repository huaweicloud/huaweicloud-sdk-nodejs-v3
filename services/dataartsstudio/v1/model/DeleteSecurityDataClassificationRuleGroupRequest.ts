import { BatchDeleteRuleGroupsBaseDTO } from './BatchDeleteRuleGroupsBaseDTO';


export class DeleteSecurityDataClassificationRuleGroupRequest {
    public workspace?: string;
    public body?: BatchDeleteRuleGroupsBaseDTO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): DeleteSecurityDataClassificationRuleGroupRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: BatchDeleteRuleGroupsBaseDTO): DeleteSecurityDataClassificationRuleGroupRequest {
        this['body'] = body;
        return this;
    }
}