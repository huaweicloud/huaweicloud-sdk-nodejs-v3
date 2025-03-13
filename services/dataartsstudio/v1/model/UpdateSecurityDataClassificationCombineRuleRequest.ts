import { DataClassificationCombineRuleDTO } from './DataClassificationCombineRuleDTO';


export class UpdateSecurityDataClassificationCombineRuleRequest {
    public workspace?: string;
    public id?: string;
    public body?: DataClassificationCombineRuleDTO;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): UpdateSecurityDataClassificationCombineRuleRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): UpdateSecurityDataClassificationCombineRuleRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: DataClassificationCombineRuleDTO): UpdateSecurityDataClassificationCombineRuleRequest {
        this['body'] = body;
        return this;
    }
}