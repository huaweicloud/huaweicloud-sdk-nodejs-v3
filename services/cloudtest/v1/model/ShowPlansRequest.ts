

export class ShowPlansRequest {
    private 'project_id'?: string;
    public name?: string;
    private 'current_stage'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(projectId?: string, offset?: number, limit?: number) { 
        this['project_id'] = projectId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withProjectId(projectId: string): ShowPlansRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): ShowPlansRequest {
        this['name'] = name;
        return this;
    }
    public withCurrentStage(currentStage: string): ShowPlansRequest {
        this['current_stage'] = currentStage;
        return this;
    }
    public set currentStage(currentStage: string  | undefined) {
        this['current_stage'] = currentStage;
    }
    public get currentStage(): string | undefined {
        return this['current_stage'];
    }
    public withOffset(offset: number): ShowPlansRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowPlansRequest {
        this['limit'] = limit;
        return this;
    }
}