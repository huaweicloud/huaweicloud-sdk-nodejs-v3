

export class DeleteConnectionRequest {
    private 'connection_id'?: string;
    private 'X-Language'?: string;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): DeleteConnectionRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withXLanguage(xLanguage: string): DeleteConnectionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
}