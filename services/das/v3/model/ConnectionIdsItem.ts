

export class ConnectionIdsItem {
    private 'connection_id'?: string;
    public constructor() { 
    }
    public withConnectionId(connectionId: string): ConnectionIdsItem {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
}