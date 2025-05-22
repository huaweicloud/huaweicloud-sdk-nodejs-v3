

export class ListProjectWorkHoursTypeRequest {
    private 'project_id'?: string;
    public limit?: number;
    public offset?: number;
    public status?: number;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListProjectWorkHoursTypeRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withLimit(limit: number): ListProjectWorkHoursTypeRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListProjectWorkHoursTypeRequest {
        this['offset'] = offset;
        return this;
    }
    public withStatus(status: number): ListProjectWorkHoursTypeRequest {
        this['status'] = status;
        return this;
    }
}