

export class UpdateServerNameRequestBody {
    private 'server_name'?: string;
    public constructor(serverName?: string) { 
        this['server_name'] = serverName;
    }
    public withServerName(serverName: string): UpdateServerNameRequestBody {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
}