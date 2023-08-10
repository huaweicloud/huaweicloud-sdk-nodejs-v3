

export class GroupInfoSimple {
    public createdAt?: number;
    private 'group_id'?: string;
    public state?: string;
    private 'coordinator_id'?: number;
    private 'group_desc'?: string;
    public lag?: number;
    public constructor() { 
    }
    public withCreatedAt(createdAt: number): GroupInfoSimple {
        this['createdAt'] = createdAt;
        return this;
    }
    public withGroupId(groupId: string): GroupInfoSimple {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withState(state: string): GroupInfoSimple {
        this['state'] = state;
        return this;
    }
    public withCoordinatorId(coordinatorId: number): GroupInfoSimple {
        this['coordinator_id'] = coordinatorId;
        return this;
    }
    public set coordinatorId(coordinatorId: number  | undefined) {
        this['coordinator_id'] = coordinatorId;
    }
    public get coordinatorId(): number | undefined {
        return this['coordinator_id'];
    }
    public withGroupDesc(groupDesc: string): GroupInfoSimple {
        this['group_desc'] = groupDesc;
        return this;
    }
    public set groupDesc(groupDesc: string  | undefined) {
        this['group_desc'] = groupDesc;
    }
    public get groupDesc(): string | undefined {
        return this['group_desc'];
    }
    public withLag(lag: number): GroupInfoSimple {
        this['lag'] = lag;
        return this;
    }
}