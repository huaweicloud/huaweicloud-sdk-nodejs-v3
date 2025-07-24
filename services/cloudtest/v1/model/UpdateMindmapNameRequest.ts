

export class UpdateMindmapNameRequest {
    private 'project_id'?: string;
    public id?: string;
    public name?: string;
    public constructor(projectId?: string, id?: string, name?: string) { 
        this['project_id'] = projectId;
        this['id'] = id;
        this['name'] = name;
    }
    public withProjectId(projectId: string): UpdateMindmapNameRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withId(id: string): UpdateMindmapNameRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateMindmapNameRequest {
        this['name'] = name;
        return this;
    }
}