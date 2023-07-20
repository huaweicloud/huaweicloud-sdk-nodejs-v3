

export class DeleteServerMetadataRequest {
    public key?: string;
    private 'server_id'?: string;
    public constructor(key?: string, serverId?: string) { 
        this['key'] = key;
        this['server_id'] = serverId;
    }
    public withKey(key: string): DeleteServerMetadataRequest {
        this['key'] = key;
        return this;
    }
    public withServerId(serverId: string): DeleteServerMetadataRequest {
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