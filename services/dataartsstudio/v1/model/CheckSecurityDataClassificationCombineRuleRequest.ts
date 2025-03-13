import { DataClassificationCombineRuleCheckDTO } from './DataClassificationCombineRuleCheckDTO';


export class CheckSecurityDataClassificationCombineRuleRequest {
    public workspace?: string;
    public body?: DataClassificationCombineRuleCheckDTO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CheckSecurityDataClassificationCombineRuleRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: DataClassificationCombineRuleCheckDTO): CheckSecurityDataClassificationCombineRuleRequest {
        this['body'] = body;
        return this;
    }
}