

export class DomainRealServerInfo {
    private 'real_server_type'?: number;
    private 'real_servers'?: string;
    public constructor() { 
    }
    public withRealServerType(realServerType: number): DomainRealServerInfo {
        this['real_server_type'] = realServerType;
        return this;
    }
    public set realServerType(realServerType: number  | undefined) {
        this['real_server_type'] = realServerType;
    }
    public get realServerType(): number | undefined {
        return this['real_server_type'];
    }
    public withRealServers(realServers: string): DomainRealServerInfo {
        this['real_servers'] = realServers;
        return this;
    }
    public set realServers(realServers: string  | undefined) {
        this['real_servers'] = realServers;
    }
    public get realServers(): string | undefined {
        return this['real_servers'];
    }
}