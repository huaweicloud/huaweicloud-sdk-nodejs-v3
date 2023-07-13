import { UpdateRuleAclDto } from './UpdateRuleAclDto';


export class UpdateRuleAclUsingPutRequest {
    private 'project_id': string | undefined;
    private 'acl_rule_id': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'fw_instance_id'?: string | undefined;
    public body?: UpdateRuleAclDto;
    public constructor(projectId?: any, aclRuleId?: any) { 
        this['project_id'] = projectId;
        this['acl_rule_id'] = aclRuleId;
    }
    public withProjectId(projectId: string): UpdateRuleAclUsingPutRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withAclRuleId(aclRuleId: string): UpdateRuleAclUsingPutRequest {
        this['acl_rule_id'] = aclRuleId;
        return this;
    }
    public set aclRuleId(aclRuleId: string | undefined) {
        this['acl_rule_id'] = aclRuleId;
    }
    public get aclRuleId() {
        return this['acl_rule_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateRuleAclUsingPutRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): UpdateRuleAclUsingPutRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId() {
        return this['fw_instance_id'];
    }
    public withBody(body: UpdateRuleAclDto): UpdateRuleAclUsingPutRequest {
        this['body'] = body;
        return this;
    }
}