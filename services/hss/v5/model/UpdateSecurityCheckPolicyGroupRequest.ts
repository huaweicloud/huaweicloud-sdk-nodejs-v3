import { SecurityCheckPolicyGroupInfoResponseInfo } from './SecurityCheckPolicyGroupInfoResponseInfo';


export class UpdateSecurityCheckPolicyGroupRequest {
    private 'enterprise_project_id'?: string;
    private 'group_id'?: string;
    public body?: SecurityCheckPolicyGroupInfoResponseInfo;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateSecurityCheckPolicyGroupRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withGroupId(groupId: string): UpdateSecurityCheckPolicyGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: SecurityCheckPolicyGroupInfoResponseInfo): UpdateSecurityCheckPolicyGroupRequest {
        this['body'] = body;
        return this;
    }
}