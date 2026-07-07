

export class ParseDeadLockRequestBody {
    private 'dead_lock_id'?: string;
    public constructor(deadLockId?: string) { 
        this['dead_lock_id'] = deadLockId;
    }
    public withDeadLockId(deadLockId: string): ParseDeadLockRequestBody {
        this['dead_lock_id'] = deadLockId;
        return this;
    }
    public set deadLockId(deadLockId: string  | undefined) {
        this['dead_lock_id'] = deadLockId;
    }
    public get deadLockId(): string | undefined {
        return this['dead_lock_id'];
    }
}