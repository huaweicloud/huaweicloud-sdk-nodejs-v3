

export class Sni {
    public status?: string;
    private 'server_name'?: string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): Sni {
        this['status'] = status;
        return this;
    }
    public withServerName(serverName: string): Sni {
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