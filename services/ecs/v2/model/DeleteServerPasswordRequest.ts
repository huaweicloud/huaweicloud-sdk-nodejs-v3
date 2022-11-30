

export class DeleteServerPasswordRequest {
    private 'server_id': string | undefined;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): DeleteServerPasswordRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
}