

export class ShowDeadLockTopologyRequest {
    private 'connection_id'?: string;
    private 'dead_lock_id'?: string;
    public constructor(connectionId?: string, deadLockId?: string) { 
        this['connection_id'] = connectionId;
        this['dead_lock_id'] = deadLockId;
    }
    public withConnectionId(connectionId: string): ShowDeadLockTopologyRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withDeadLockId(deadLockId: string): ShowDeadLockTopologyRequest {
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