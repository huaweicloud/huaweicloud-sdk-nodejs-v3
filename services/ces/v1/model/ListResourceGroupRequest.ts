

export class ListResourceGroupRequest {
    private 'group_name'?: string;
    private 'group_id'?: string;
    public status?: string;
    public start?: number;
    public limit?: number;
    public constructor() { 
    }
    public withGroupName(groupName: string): ListResourceGroupRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupId(groupId: string): ListResourceGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withStatus(status: string): ListResourceGroupRequest {
        this['status'] = status;
        return this;
    }
    public withStart(start: number): ListResourceGroupRequest {
        this['start'] = start;
        return this;
    }
    public withLimit(limit: number): ListResourceGroupRequest {
        this['limit'] = limit;
        return this;
    }
}