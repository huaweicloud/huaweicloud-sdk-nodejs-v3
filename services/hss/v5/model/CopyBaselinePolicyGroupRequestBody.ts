

export class CopyBaselinePolicyGroupRequestBody {
    public description?: string;
    private 'group_name'?: string;
    private 'group_id'?: string;
    public constructor(groupName?: string, groupId?: string) { 
        this['group_name'] = groupName;
        this['group_id'] = groupId;
    }
    public withDescription(description: string): CopyBaselinePolicyGroupRequestBody {
        this['description'] = description;
        return this;
    }
    public withGroupName(groupName: string): CopyBaselinePolicyGroupRequestBody {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupId(groupId: string): CopyBaselinePolicyGroupRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}