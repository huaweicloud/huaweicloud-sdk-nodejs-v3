

export class ShowDeadLockTopologyGraphRespConflictGroups {
    private 'group_id'?: string;
    private 'waiting_lock_id'?: string;
    private 'granted_lock_id'?: string;
    public constructor(groupId?: string, waitingLockId?: string, grantedLockId?: string) { 
        this['group_id'] = groupId;
        this['waiting_lock_id'] = waitingLockId;
        this['granted_lock_id'] = grantedLockId;
    }
    public withGroupId(groupId: string): ShowDeadLockTopologyGraphRespConflictGroups {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withWaitingLockId(waitingLockId: string): ShowDeadLockTopologyGraphRespConflictGroups {
        this['waiting_lock_id'] = waitingLockId;
        return this;
    }
    public set waitingLockId(waitingLockId: string  | undefined) {
        this['waiting_lock_id'] = waitingLockId;
    }
    public get waitingLockId(): string | undefined {
        return this['waiting_lock_id'];
    }
    public withGrantedLockId(grantedLockId: string): ShowDeadLockTopologyGraphRespConflictGroups {
        this['granted_lock_id'] = grantedLockId;
        return this;
    }
    public set grantedLockId(grantedLockId: string  | undefined) {
        this['granted_lock_id'] = grantedLockId;
    }
    public get grantedLockId(): string | undefined {
        return this['granted_lock_id'];
    }
}