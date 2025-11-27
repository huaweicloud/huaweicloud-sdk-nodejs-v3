

export class UpdateInstanceGroupRequestBody {
    private 'group_id'?: number;
    private 'group_name'?: string;
    public description?: string;
    public constructor(groupId?: number) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: number): UpdateInstanceGroupRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): UpdateInstanceGroupRequestBody {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withDescription(description: string): UpdateInstanceGroupRequestBody {
        this['description'] = description;
        return this;
    }
}