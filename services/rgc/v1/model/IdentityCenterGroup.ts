

export class IdentityCenterGroup {
    private 'group_id'?: string;
    private 'group_name'?: string;
    public description?: string;
    public constructor() { 
    }
    public withGroupId(groupId: string): IdentityCenterGroup {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): IdentityCenterGroup {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withDescription(description: string): IdentityCenterGroup {
        this['description'] = description;
        return this;
    }
}