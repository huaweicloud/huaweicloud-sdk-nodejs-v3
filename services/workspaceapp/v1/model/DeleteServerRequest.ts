

export class DeleteServerRequest {
    private 'server_id'?: string;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): DeleteServerRequest {
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