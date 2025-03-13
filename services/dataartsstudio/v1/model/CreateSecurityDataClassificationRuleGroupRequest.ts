import { DataClassificationGroupCreateDTO } from './DataClassificationGroupCreateDTO';


export class CreateSecurityDataClassificationRuleGroupRequest {
    public workspace?: string;
    public body?: DataClassificationGroupCreateDTO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateSecurityDataClassificationRuleGroupRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: DataClassificationGroupCreateDTO): CreateSecurityDataClassificationRuleGroupRequest {
        this['body'] = body;
        return this;
    }
}