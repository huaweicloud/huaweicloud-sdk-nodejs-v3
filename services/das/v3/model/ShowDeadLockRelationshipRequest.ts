

export class ShowDeadLockRelationshipRequest {
    private 'instance_id'?: string;
    private 'dead_lock_id'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor(instanceId?: string, deadLockId?: string, startTime?: number, endTime?: number) { 
        this['instance_id'] = instanceId;
        this['dead_lock_id'] = deadLockId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withInstanceId(instanceId: string): ShowDeadLockRelationshipRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDeadLockId(deadLockId: string): ShowDeadLockRelationshipRequest {
        this['dead_lock_id'] = deadLockId;
        return this;
    }
    public set deadLockId(deadLockId: string  | undefined) {
        this['dead_lock_id'] = deadLockId;
    }
    public get deadLockId(): string | undefined {
        return this['dead_lock_id'];
    }
    public withStartTime(startTime: number): ShowDeadLockRelationshipRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowDeadLockRelationshipRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}