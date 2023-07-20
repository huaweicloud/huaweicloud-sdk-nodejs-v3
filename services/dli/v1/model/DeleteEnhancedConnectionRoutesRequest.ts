

export class DeleteEnhancedConnectionRoutesRequest {
    private 'connection_id'?: string;
    public name?: string;
    public constructor(connectionId?: string, name?: string) { 
        this['connection_id'] = connectionId;
        this['name'] = name;
    }
    public withConnectionId(connectionId: string): DeleteEnhancedConnectionRoutesRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withName(name: string): DeleteEnhancedConnectionRoutesRequest {
        this['name'] = name;
        return this;
    }
}