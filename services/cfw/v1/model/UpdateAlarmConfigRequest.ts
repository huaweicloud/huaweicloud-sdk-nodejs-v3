import { UpdateAttackLogAlarmConfigDto } from './UpdateAttackLogAlarmConfigDto';


export class UpdateAlarmConfigRequest {
    private 'fw_instance_id'?: string;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    public body?: UpdateAttackLogAlarmConfigDto;
    public constructor(fwInstanceId?: string, projectId?: string) { 
        this['fw_instance_id'] = fwInstanceId;
        this['project_id'] = projectId;
    }
    public withFwInstanceId(fwInstanceId: string): UpdateAlarmConfigRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withProjectId(projectId: string): UpdateAlarmConfigRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateAlarmConfigRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: UpdateAttackLogAlarmConfigDto): UpdateAlarmConfigRequest {
        this['body'] = body;
        return this;
    }
}