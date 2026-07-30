

export class CopyAiPolicyGroupRequestInfo {
    private 'group_id'?: string;
    private 'group_name'?: string;
    public description?: string;
    public constructor(groupId?: string, groupName?: string) { 
        this['group_id'] = groupId;
        this['group_name'] = groupName;
    }
    public withGroupId(groupId: string): CopyAiPolicyGroupRequestInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): CopyAiPolicyGroupRequestInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withDescription(description: string): CopyAiPolicyGroupRequestInfo {
        this['description'] = description;
        return this;
    }
}