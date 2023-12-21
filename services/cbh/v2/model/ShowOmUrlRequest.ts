

export class ShowOmUrlRequest {
    private 'server_id'?: string;
    private 'ip_address'?: string;
    private 'host_account_name'?: string;
    public constructor(serverId?: string, ipAddress?: string, hostAccountName?: string) { 
        this['server_id'] = serverId;
        this['ip_address'] = ipAddress;
        this['host_account_name'] = hostAccountName;
    }
    public withServerId(serverId: string): ShowOmUrlRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withIpAddress(ipAddress: string): ShowOmUrlRequest {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withHostAccountName(hostAccountName: string): ShowOmUrlRequest {
        this['host_account_name'] = hostAccountName;
        return this;
    }
    public set hostAccountName(hostAccountName: string  | undefined) {
        this['host_account_name'] = hostAccountName;
    }
    public get hostAccountName(): string | undefined {
        return this['host_account_name'];
    }
}