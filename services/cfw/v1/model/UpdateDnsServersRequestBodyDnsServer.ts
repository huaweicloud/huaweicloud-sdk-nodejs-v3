

export class UpdateDnsServersRequestBodyDnsServer {
    private 'server_ip'?: string;
    private 'is_customized'?: number;
    private 'is_applied'?: number;
    public constructor(serverIp?: string, isCustomized?: number, isApplied?: number) { 
        this['server_ip'] = serverIp;
        this['is_customized'] = isCustomized;
        this['is_applied'] = isApplied;
    }
    public withServerIp(serverIp: string): UpdateDnsServersRequestBodyDnsServer {
        this['server_ip'] = serverIp;
        return this;
    }
    public set serverIp(serverIp: string  | undefined) {
        this['server_ip'] = serverIp;
    }
    public get serverIp(): string | undefined {
        return this['server_ip'];
    }
    public withIsCustomized(isCustomized: number): UpdateDnsServersRequestBodyDnsServer {
        this['is_customized'] = isCustomized;
        return this;
    }
    public set isCustomized(isCustomized: number  | undefined) {
        this['is_customized'] = isCustomized;
    }
    public get isCustomized(): number | undefined {
        return this['is_customized'];
    }
    public withIsApplied(isApplied: number): UpdateDnsServersRequestBodyDnsServer {
        this['is_applied'] = isApplied;
        return this;
    }
    public set isApplied(isApplied: number  | undefined) {
        this['is_applied'] = isApplied;
    }
    public get isApplied(): number | undefined {
        return this['is_applied'];
    }
}