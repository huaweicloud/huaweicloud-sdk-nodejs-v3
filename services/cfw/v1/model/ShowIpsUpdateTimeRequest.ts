

export class ShowIpsUpdateTimeRequest {
    private 'fw_instance_id'?: string;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(fwInstanceId?: string, projectId?: string) { 
        this['fw_instance_id'] = fwInstanceId;
        this['project_id'] = projectId;
    }
    public withFwInstanceId(fwInstanceId: string): ShowIpsUpdateTimeRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withProjectId(projectId: string): ShowIpsUpdateTimeRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowIpsUpdateTimeRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}