

export class ServerKeypair {
    private 'server_id'?: string;
    private 'keypair_name'?: string;
    public constructor(serverId?: string, keypairName?: string) { 
        this['server_id'] = serverId;
        this['keypair_name'] = keypairName;
    }
    public withServerId(serverId: string): ServerKeypair {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withKeypairName(keypairName: string): ServerKeypair {
        this['keypair_name'] = keypairName;
        return this;
    }
    public set keypairName(keypairName: string  | undefined) {
        this['keypair_name'] = keypairName;
    }
    public get keypairName(): string | undefined {
        return this['keypair_name'];
    }
}