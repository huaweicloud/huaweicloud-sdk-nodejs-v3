

export class Group {
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'created_at'?: Date;
    public urn?: string;
    public description?: string;
    public constructor(groupId?: string, groupName?: string, createdAt?: Date, urn?: string) { 
        this['group_id'] = groupId;
        this['group_name'] = groupName;
        this['created_at'] = createdAt;
        this['urn'] = urn;
    }
    public withGroupId(groupId: string): Group {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): Group {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withCreatedAt(createdAt: Date): Group {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUrn(urn: string): Group {
        this['urn'] = urn;
        return this;
    }
    public withDescription(description: string): Group {
        this['description'] = description;
        return this;
    }
}