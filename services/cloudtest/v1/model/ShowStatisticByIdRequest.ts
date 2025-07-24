

export class ShowStatisticByIdRequest {
    private 'project_id'?: string;
    private 'mindmap_id'?: string;
    public constructor(projectId?: string, mindmapId?: string) { 
        this['project_id'] = projectId;
        this['mindmap_id'] = mindmapId;
    }
    public withProjectId(projectId: string): ShowStatisticByIdRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withMindmapId(mindmapId: string): ShowStatisticByIdRequest {
        this['mindmap_id'] = mindmapId;
        return this;
    }
    public set mindmapId(mindmapId: string  | undefined) {
        this['mindmap_id'] = mindmapId;
    }
    public get mindmapId(): string | undefined {
        return this['mindmap_id'];
    }
}