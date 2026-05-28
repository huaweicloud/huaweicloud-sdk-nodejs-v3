

export class ListTasksRequest {
    private 'group_id'?: string;
    public limit?: number;
    public offset?: number;
    public status?: number;
    private 'task_name'?: string;
    public constructor() { 
    }
    public withGroupId(groupId: string): ListTasksRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withLimit(limit: number): ListTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withStatus(status: number): ListTasksRequest {
        this['status'] = status;
        return this;
    }
    public withTaskName(taskName: string): ListTasksRequest {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
}