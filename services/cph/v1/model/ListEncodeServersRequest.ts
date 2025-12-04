

export class ListEncodeServersRequest {
    public offset?: number;
    public limit?: number;
    public type?: number;
    public status?: number;
    private 'server_id'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListEncodeServersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEncodeServersRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: number): ListEncodeServersRequest {
        this['type'] = type;
        return this;
    }
    public withStatus(status: number): ListEncodeServersRequest {
        this['status'] = status;
        return this;
    }
    public withServerId(serverId: string): ListEncodeServersRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
}