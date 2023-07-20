

export class MasterInstance {
    private 'instance_id'?: string;
    public region?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    public constructor(instanceId?: string, region?: string, projectId?: string, projectName?: string) { 
        this['instance_id'] = instanceId;
        this['region'] = region;
        this['project_id'] = projectId;
        this['project_name'] = projectName;
    }
    public withInstanceId(instanceId: string): MasterInstance {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withRegion(region: string): MasterInstance {
        this['region'] = region;
        return this;
    }
    public withProjectId(projectId: string): MasterInstance {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): MasterInstance {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
}