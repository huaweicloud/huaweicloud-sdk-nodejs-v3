

export class ShowWaitingLocksSnapshotRequest {
    private 'connection_id'?: string;
    public id?: number;
    public constructor(connectionId?: string, id?: number) { 
        this['connection_id'] = connectionId;
        this['id'] = id;
    }
    public withConnectionId(connectionId: string): ShowWaitingLocksSnapshotRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withId(id: number): ShowWaitingLocksSnapshotRequest {
        this['id'] = id;
        return this;
    }
}