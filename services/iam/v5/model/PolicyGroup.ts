

export class PolicyGroup {
    private 'group_id'?: string;
    private 'attached_at'?: Date;
    public constructor(groupId?: string, attachedAt?: Date) { 
        this['group_id'] = groupId;
        this['attached_at'] = attachedAt;
    }
    public withGroupId(groupId: string): PolicyGroup {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withAttachedAt(attachedAt: Date): PolicyGroup {
        this['attached_at'] = attachedAt;
        return this;
    }
    public set attachedAt(attachedAt: Date  | undefined) {
        this['attached_at'] = attachedAt;
    }
    public get attachedAt(): Date | undefined {
        return this['attached_at'];
    }
}