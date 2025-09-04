

export class ProjectPermissionRequestBody {
    private 'job_id'?: string;
    private 'project_id'?: string;
    private 'project_switch'?: boolean;
    public constructor() { 
    }
    public withJobId(jobId: string): ProjectPermissionRequestBody {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withProjectId(projectId: string): ProjectPermissionRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectSwitch(projectSwitch: boolean): ProjectPermissionRequestBody {
        this['project_switch'] = projectSwitch;
        return this;
    }
    public set projectSwitch(projectSwitch: boolean  | undefined) {
        this['project_switch'] = projectSwitch;
    }
    public get projectSwitch(): boolean | undefined {
        return this['project_switch'];
    }
}