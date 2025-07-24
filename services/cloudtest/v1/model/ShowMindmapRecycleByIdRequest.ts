

export class ShowMindmapRecycleByIdRequest {
    private 'project_id'?: string;
    public id?: string;
    public constructor(projectId?: string, id?: string) { 
        this['project_id'] = projectId;
        this['id'] = id;
    }
    public withProjectId(projectId: string): ShowMindmapRecycleByIdRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withId(id: string): ShowMindmapRecycleByIdRequest {
        this['id'] = id;
        return this;
    }
}