import { ChangePolicyGroupRequestInfo } from './ChangePolicyGroupRequestInfo';


export class ChangePolicyGroupRequest {
    private 'enterprise_project_id'?: string;
    public body?: ChangePolicyGroupRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangePolicyGroupRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ChangePolicyGroupRequestInfo): ChangePolicyGroupRequest {
        this['body'] = body;
        return this;
    }
}