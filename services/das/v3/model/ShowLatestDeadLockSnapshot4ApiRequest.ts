

export class ShowLatestDeadLockSnapshot4ApiRequest {
    private 'connection_id'?: string;
    public id?: number;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): ShowLatestDeadLockSnapshot4ApiRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withId(id: number): ShowLatestDeadLockSnapshot4ApiRequest {
        this['id'] = id;
        return this;
    }
}