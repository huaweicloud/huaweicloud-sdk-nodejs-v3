import { DataClassificationGroupUpdateDTO } from './DataClassificationGroupUpdateDTO';


export class UpdateSecurityDataClassificationRuleGroupRequest {
    public workspace?: string;
    public id?: string;
    public body?: DataClassificationGroupUpdateDTO;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): UpdateSecurityDataClassificationRuleGroupRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): UpdateSecurityDataClassificationRuleGroupRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: DataClassificationGroupUpdateDTO): UpdateSecurityDataClassificationRuleGroupRequest {
        this['body'] = body;
        return this;
    }
}