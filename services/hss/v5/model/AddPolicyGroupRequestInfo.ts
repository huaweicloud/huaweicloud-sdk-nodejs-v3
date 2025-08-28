

export class AddPolicyGroupRequestInfo {
    public description?: string;
    public name?: string;
    private 'group_id'?: string;
    public constructor(name?: string, groupId?: string) { 
        this['name'] = name;
        this['group_id'] = groupId;
    }
    public withDescription(description: string): AddPolicyGroupRequestInfo {
        this['description'] = description;
        return this;
    }
    public withName(name: string): AddPolicyGroupRequestInfo {
        this['name'] = name;
        return this;
    }
    public withGroupId(groupId: string): AddPolicyGroupRequestInfo {
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