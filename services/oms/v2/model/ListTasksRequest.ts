

export class ListTasksRequest {
    private 'group_id'?: string;
    public limit?: number;
    public offset?: number;
    public status?: number;
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
}