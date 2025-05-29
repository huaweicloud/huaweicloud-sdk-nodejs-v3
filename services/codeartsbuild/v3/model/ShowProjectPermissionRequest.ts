

export class ShowProjectPermissionRequest {
    private 'project_id'?: string;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ShowProjectPermissionRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}