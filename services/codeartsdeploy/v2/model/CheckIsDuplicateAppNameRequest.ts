

export class CheckIsDuplicateAppNameRequest {
    public name?: string;
    private 'project_id'?: string;
    public constructor(name?: string, projectId?: string) { 
        this['name'] = name;
        this['project_id'] = projectId;
    }
    public withName(name: string): CheckIsDuplicateAppNameRequest {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): CheckIsDuplicateAppNameRequest {
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