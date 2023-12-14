

export class DeleteFirewallRequest {
    private 'project_id'?: string;
    private 'resource_id'?: string;
    public constructor(projectId?: string, resourceId?: string) { 
        this['project_id'] = projectId;
        this['resource_id'] = resourceId;
    }
    public withProjectId(projectId: string): DeleteFirewallRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withResourceId(resourceId: string): DeleteFirewallRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
}