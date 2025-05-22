

export class ListProjectIterationsV4Request {
    private 'project_id'?: string;
    private 'updated_time_interval'?: string;
    private 'include_deleted'?: boolean;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListProjectIterationsV4Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withUpdatedTimeInterval(updatedTimeInterval: string): ListProjectIterationsV4Request {
        this['updated_time_interval'] = updatedTimeInterval;
        return this;
    }
    public set updatedTimeInterval(updatedTimeInterval: string  | undefined) {
        this['updated_time_interval'] = updatedTimeInterval;
    }
    public get updatedTimeInterval(): string | undefined {
        return this['updated_time_interval'];
    }
    public withIncludeDeleted(includeDeleted: boolean): ListProjectIterationsV4Request {
        this['include_deleted'] = includeDeleted;
        return this;
    }
    public set includeDeleted(includeDeleted: boolean  | undefined) {
        this['include_deleted'] = includeDeleted;
    }
    public get includeDeleted(): boolean | undefined {
        return this['include_deleted'];
    }
}