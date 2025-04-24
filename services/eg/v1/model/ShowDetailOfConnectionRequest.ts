

export class ShowDetailOfConnectionRequest {
    private 'connection_id'?: string;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): ShowDetailOfConnectionRequest {
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