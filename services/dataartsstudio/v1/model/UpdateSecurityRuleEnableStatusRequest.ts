import { DataClassificationRuleEnableDTO } from './DataClassificationRuleEnableDTO';


export class UpdateSecurityRuleEnableStatusRequest {
    public workspace?: string;
    public id?: string;
    public body?: DataClassificationRuleEnableDTO;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): UpdateSecurityRuleEnableStatusRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): UpdateSecurityRuleEnableStatusRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: DataClassificationRuleEnableDTO): UpdateSecurityRuleEnableStatusRequest {
        this['body'] = body;
        return this;
    }
}