

export class ListCaptureResultRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    private 'task_id'?: string;
    public type?: number;
    public ip?: Array<string>;
    private 'enterprise_project_id'?: string;
    public constructor(projectId?: string, fwInstanceId?: string, taskId?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['task_id'] = taskId;
    }
    public withProjectId(projectId: string): ListCaptureResultRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListCaptureResultRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withTaskId(taskId: string): ListCaptureResultRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withType(type: number): ListCaptureResultRequest {
        this['type'] = type;
        return this;
    }
    public withIp(ip: Array<string>): ListCaptureResultRequest {
        this['ip'] = ip;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCaptureResultRequest {
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