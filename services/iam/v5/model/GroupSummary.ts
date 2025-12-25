

export class GroupSummary {
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'created_at'?: Date;
    public urn?: string;
    public description?: string;
    private 'user_count'?: number;
    public constructor(groupId?: string, groupName?: string, createdAt?: Date, urn?: string, userCount?: number) { 
        this['group_id'] = groupId;
        this['group_name'] = groupName;
        this['created_at'] = createdAt;
        this['urn'] = urn;
        this['user_count'] = userCount;
    }
    public withGroupId(groupId: string): GroupSummary {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): GroupSummary {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withCreatedAt(createdAt: Date): GroupSummary {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUrn(urn: string): GroupSummary {
        this['urn'] = urn;
        return this;
    }
    public withDescription(description: string): GroupSummary {
        this['description'] = description;
        return this;
    }
    public withUserCount(userCount: number): GroupSummary {
        this['user_count'] = userCount;
        return this;
    }
    public set userCount(userCount: number  | undefined) {
        this['user_count'] = userCount;
    }
    public get userCount(): number | undefined {
        return this['user_count'];
    }
}