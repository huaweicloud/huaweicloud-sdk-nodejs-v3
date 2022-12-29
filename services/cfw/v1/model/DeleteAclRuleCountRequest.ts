import { ClearAccessLogRuleHitCountsDto } from './ClearAccessLogRuleHitCountsDto';


export class DeleteAclRuleCountRequest {
    private 'project_id': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'fw_instance_id'?: string | undefined;
    public body?: ClearAccessLogRuleHitCountsDto;
    public constructor(projectId?: any) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): DeleteAclRuleCountRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteAclRuleCountRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): DeleteAclRuleCountRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId() {
        return this['fw_instance_id'];
    }
    public withBody(body: ClearAccessLogRuleHitCountsDto): DeleteAclRuleCountRequest {
        this['body'] = body;
        return this;
    }
}