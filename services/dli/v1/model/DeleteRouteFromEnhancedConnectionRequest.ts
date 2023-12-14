

export class DeleteRouteFromEnhancedConnectionRequest {
    private 'connection_id'?: string;
    public name?: string;
    public constructor(connectionId?: string, name?: string) { 
        this['connection_id'] = connectionId;
        this['name'] = name;
    }
    public withConnectionId(connectionId: string): DeleteRouteFromEnhancedConnectionRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withName(name: string): DeleteRouteFromEnhancedConnectionRequest {
        this['name'] = name;
        return this;
    }
}