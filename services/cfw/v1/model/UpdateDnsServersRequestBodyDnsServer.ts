

export class UpdateDnsServersRequestBodyDnsServer {
    private 'server_ip'?: string | undefined;
    private 'is_customized'?: number | undefined;
    private 'is_applied'?: number | undefined;
    public constructor() { 
    }
    public withServerIp(serverIp: string): UpdateDnsServersRequestBodyDnsServer {
        this['server_ip'] = serverIp;
        return this;
    }
    public set serverIp(serverIp: string | undefined) {
        this['server_ip'] = serverIp;
    }
    public get serverIp() {
        return this['server_ip'];
    }
    public withIsCustomized(isCustomized: number): UpdateDnsServersRequestBodyDnsServer {
        this['is_customized'] = isCustomized;
        return this;
    }
    public set isCustomized(isCustomized: number | undefined) {
        this['is_customized'] = isCustomized;
    }
    public get isCustomized() {
        return this['is_customized'];
    }
    public withIsApplied(isApplied: number): UpdateDnsServersRequestBodyDnsServer {
        this['is_applied'] = isApplied;
        return this;
    }
    public set isApplied(isApplied: number | undefined) {
        this['is_applied'] = isApplied;
    }
    public get isApplied() {
        return this['is_applied'];
    }
}