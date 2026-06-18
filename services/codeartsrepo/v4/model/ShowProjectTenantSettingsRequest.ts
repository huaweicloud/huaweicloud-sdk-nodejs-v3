

export class ShowProjectTenantSettingsRequest {
    private 'project_id'?: string;
    public constructor() { 
    }
    public withProjectId(projectId: string): ShowProjectTenantSettingsRequest {
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