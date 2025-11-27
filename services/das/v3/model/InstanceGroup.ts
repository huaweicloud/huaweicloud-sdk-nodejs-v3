

export class InstanceGroup {
    private 'group_id'?: number;
    private 'group_name'?: string;
    public description?: string;
    public constructor(groupId?: number, groupName?: string, description?: string) { 
        this['group_id'] = groupId;
        this['group_name'] = groupName;
        this['description'] = description;
    }
    public withGroupId(groupId: number): InstanceGroup {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): InstanceGroup {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withDescription(description: string): InstanceGroup {
        this['description'] = description;
        return this;
    }
}