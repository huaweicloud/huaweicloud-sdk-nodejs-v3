

export class GroupInfoSimple {
    private 'group_id'?: string | undefined;
    public state?: string;
    private 'coordinator_id'?: number | undefined;
    public constructor() { 
    }
    public withGroupId(groupId: string): GroupInfoSimple {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
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
    public set coordinatorId(coordinatorId: number | undefined) {
        this['coordinator_id'] = coordinatorId;
    }
    public get coordinatorId() {
        return this['coordinator_id'];
    }
}