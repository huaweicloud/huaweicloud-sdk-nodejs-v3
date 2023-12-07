import { DataClassificationRuleOperateDTO } from './DataClassificationRuleOperateDTO';


export class CreateSecurityDataClassificationRuleRequest {
    public workspace?: string;
    public body?: DataClassificationRuleOperateDTO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateSecurityDataClassificationRuleRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: DataClassificationRuleOperateDTO): CreateSecurityDataClassificationRuleRequest {
        this['body'] = body;
        return this;
    }
}