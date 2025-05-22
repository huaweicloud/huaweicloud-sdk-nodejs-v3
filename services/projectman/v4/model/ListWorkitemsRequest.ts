

export class ListWorkitemsRequest {
    private 'project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'created_time_interval'?: string;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListWorkitemsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOffset(offset: number): ListWorkitemsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWorkitemsRequest {
        this['limit'] = limit;
        return this;
    }
    public withCreatedTimeInterval(createdTimeInterval: string): ListWorkitemsRequest {
        this['created_time_interval'] = createdTimeInterval;
        return this;
    }
    public set createdTimeInterval(createdTimeInterval: string  | undefined) {
        this['created_time_interval'] = createdTimeInterval;
    }
    public get createdTimeInterval(): string | undefined {
        return this['created_time_interval'];
    }
}