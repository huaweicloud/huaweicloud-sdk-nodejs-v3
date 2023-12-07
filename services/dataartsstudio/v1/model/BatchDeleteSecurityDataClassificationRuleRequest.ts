import { BatchDeleteRulesBaseDTO } from './BatchDeleteRulesBaseDTO';


export class BatchDeleteSecurityDataClassificationRuleRequest {
    public workspace?: string;
    public body?: BatchDeleteRulesBaseDTO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): BatchDeleteSecurityDataClassificationRuleRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: BatchDeleteRulesBaseDTO): BatchDeleteSecurityDataClassificationRuleRequest {
        this['body'] = body;
        return this;
    }
}