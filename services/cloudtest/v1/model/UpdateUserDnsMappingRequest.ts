

export class UpdateUserDnsMappingRequest {
    private 'project_id'?: string;
    public body?: string;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): UpdateUserDnsMappingRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: string): UpdateUserDnsMappingRequest {
        this['body'] = body;
        return this;
    }
}