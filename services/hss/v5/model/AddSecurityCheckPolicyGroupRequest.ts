import { SecurityCheckPolicyGroupInfoResponseInfo } from './SecurityCheckPolicyGroupInfoResponseInfo';


export class AddSecurityCheckPolicyGroupRequest {
    private 'enterprise_project_id'?: string;
    public body?: SecurityCheckPolicyGroupInfoResponseInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddSecurityCheckPolicyGroupRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SecurityCheckPolicyGroupInfoResponseInfo): AddSecurityCheckPolicyGroupRequest {
        this['body'] = body;
        return this;
    }
}