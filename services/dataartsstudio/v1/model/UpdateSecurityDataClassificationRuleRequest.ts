import { DataClassificationRuleOperateDTO } from './DataClassificationRuleOperateDTO';


export class UpdateSecurityDataClassificationRuleRequest {
    public workspace?: string;
    public id?: string;
    public body?: DataClassificationRuleOperateDTO;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): UpdateSecurityDataClassificationRuleRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): UpdateSecurityDataClassificationRuleRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: DataClassificationRuleOperateDTO): UpdateSecurityDataClassificationRuleRequest {
        this['body'] = body;
        return this;
    }
}