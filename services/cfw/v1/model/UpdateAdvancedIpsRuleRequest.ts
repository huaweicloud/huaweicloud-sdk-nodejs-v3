import { AdvancedIpsRuleDto } from './AdvancedIpsRuleDto';


export class UpdateAdvancedIpsRuleRequest {
    private 'fw_instance_id'?: string;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    public body?: AdvancedIpsRuleDto;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withFwInstanceId(fwInstanceId: string): UpdateAdvancedIpsRuleRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withProjectId(projectId: string): UpdateAdvancedIpsRuleRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateAdvancedIpsRuleRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: AdvancedIpsRuleDto): UpdateAdvancedIpsRuleRequest {
        this['body'] = body;
        return this;
    }
}