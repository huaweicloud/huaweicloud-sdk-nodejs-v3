

export class ListCaptureTaskRequest {
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'fw_instance_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(projectId?: string, limit?: number, offset?: number) { 
        this['project_id'] = projectId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListCaptureTaskRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCaptureTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListCaptureTaskRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withLimit(limit: number): ListCaptureTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListCaptureTaskRequest {
        this['offset'] = offset;
        return this;
    }
}