import { DataClassificationCombineRuleDTO } from './DataClassificationCombineRuleDTO';


export class CreateSecurityDataClassificationCombineRuleRequest {
    public workspace?: string;
    public body?: DataClassificationCombineRuleDTO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateSecurityDataClassificationCombineRuleRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: DataClassificationCombineRuleDTO): CreateSecurityDataClassificationCombineRuleRequest {
        this['body'] = body;
        return this;
    }
}